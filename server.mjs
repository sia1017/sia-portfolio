import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
const execFileAsync = promisify(execFile);

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";
const stockCodes = [
  "510300",
  "600015",
  "601818",
  "601166",
  "600023",
  "600016",
  "601169",
  "000001",
  "601997",
  "600642",
  "600036",
  "600941",
  "601838",
  "601000",
  "600350",
  "600012",
  "002271",
  "600153",
  "600398",
  "601717",
  "000858",
  "000651",
  "002027",
  "600066",
  "002032",
  "600566",
  "600132",
  "603195",
  "600873",
  "601668",
  "600582",
  "000895",
  "600177",
  "601928",
  "600970",
  "600741",
  "000683",
  "601009",
  "000429",
  "601186",
  "600886",
  "601229",
  "601328",
  "601825",
  "600039",
  "601006",
  "600377",
  "600295",
  "600018",
  "601658",
  "601916",
  "001965",
  "601598",
  "600887",
  "600098",
  "601919",
  "601318",
  "601128",
  "600900",
  "601728",
  "002966",
  "601077",
  "000999",
  "601577",
  "600919",
  "601567",
  "600704",
  "600282",
  "601398",
  "600674",
  "600585",
  "000513",
  "600998",
  "601857",
  "600863",
  "603565",
  "600008",
  "601018",
  "600901",
  "600600",
  "600690",
  "001872",
  "601939",
  "000708",
  "600803",
  "002601",
  "600050",
  "000423",
  "601390",
  "600809",
  "002304",
  "600332",
  "600483",
  "000921",
  "601988",
  "600028",
  "001286",
  "601288",
  "600019",
  "600329",
  "000333",
  "688009",
  "601998",
  "601665",
  "000088",
  "300979",
  "600000",
  "600096",
  "603369",
  "601088",
  "002236",
  "600938",
  "600926",
  "600598",
  "300628",
  "601766",
  "601800",
  "601298",
  "601216",
  "601601",
  "600027",
  "601225",
  "002223",
  "600060",
  "003816",
  "600025",
  "600968",
  "000932",
  "600236",
  "002736",
  "600011",
  "603568",
  "601985",
  "600219",
  "601001",
  "600519",
  "600971",
  "600660",
  "600795",
  "002128",
  "000538",
  "000951",
  "600583",
  "601211",
  "601555",
  "603939",
  "600428",
  "605499",
  "002152",
  "002415",
  "603605",
  "600323",
  "600188",
  "603444",
  "002142",
  "002056",
  "601319",
  "002001",
  "600415",
  "600958",
  "600362",
  "000878",
  "002007",
  "601336",
  "000776",
  "000783",
  "600999",
  "002532",
  "603993",
  "601600",
  "000807",
  "601899",
  "689009",
  "603766",
  "300498"
];
const cryptoSymbols = ["BTCUSDT", "ETHUSDT", "SOLUSDT", "BNBUSDT", "XRPUSDT", "DOGEUSDT"];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8"
};

function json(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": mimeTypes[".json"],
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(JSON.stringify(body));
}

function parseTencentQuote(raw) {
  const text = Buffer.from(raw).toString("latin1");
  const fields = text.split("~");
  const price = Number(fields[3]);
  const previousClose = Number(fields[4]);
  return Number.isFinite(price) && price > 0 ? {
    price,
    previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price
  } : null;
}

function normalizeStockCode(value) {
  const match = String(value).trim().match(/^(?:sh|sz|bj|hk)?(\d{5,6})$/i);
  return match ? match[1] : "";
}

function stockMarketPrefix(code) {
  if (String(code).length === 5) return "hk";
  return /^[569]/.test(String(code)) ? "sh" : "sz";
}

function stockEastmoneySecId(code) {
  return `${stockMarketPrefix(code) === "sh" ? "1" : "0"}.${code}`;
}

async function eastmoneyStockQuotes(codes) {
  const fields = "f2,f3,f9,f12,f14,f18,f23";
  const batches = chunkArray(codes, 60);
  const groups = await Promise.allSettled(batches.map(async (batch) => {
    const secids = batch.map(stockEastmoneySecId).join(",");
    const upstream = await fetch(
      `https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=${fields}&secids=${secids}&_=${Date.now()}`,
      {
        headers: { "User-Agent": "sia-investing-market-proxy/1.0" },
        signal: AbortSignal.timeout(4500)
      }
    );
    if (!upstream.ok) throw new Error(`Eastmoney quote HTTP ${upstream.status}`);
    const payload = await upstream.json();
    const rows = Array.isArray(payload?.data?.diff) ? payload.data.diff : [];
    const batchResult = {};
    rows.forEach((row) => {
      const code = normalizeStockCode(row.f12);
      const price = Number(row.f2);
      const previousClose = Number(row.f18);
      if (code && Number.isFinite(price) && price > 0) {
        batchResult[code] = {
          price,
          previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price,
          pe: Number(row.f9), pb: Number(row.f23)
        };
      }
    });
    return batchResult;
  }));
  const result = groups.reduce((quotes, group) => {
    if (group.status === "fulfilled") Object.assign(quotes, group.value);
    return quotes;
  }, {});
  if (!Object.keys(result).length) throw new Error("Eastmoney returned no quotes");
  return result;
}

function chunkArray(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function stockQuotes(searchParams) {
  const requested = (searchParams.get("symbols") || stockCodes.join(","))
    .split(",")
    .map(normalizeStockCode)
    .filter(Boolean);
  const codes = [...new Set(requested.length ? requested : stockCodes)];
  let lastError;
  try {
    return await eastmoneyStockQuotes(codes);
  } catch (error) {
    lastError = error;
  }
  try {
    const groups = await Promise.allSettled(chunkArray(codes, 45).map(async (batch) => {
      const query = batch.map((code) => `${stockMarketPrefix(code)}${code}`).join(",");
      const upstream = await fetch(`https://qt.gtimg.cn/q=${query}&_=${Date.now()}`, {
        headers: { "User-Agent": "sia-investing-market-proxy/1.0" },
        signal: AbortSignal.timeout(4500)
      });
      if (!upstream.ok) throw new Error(`Tencent quote HTTP ${upstream.status}`);
      const raw = await upstream.arrayBuffer();
      const bytes = Buffer.from(raw);
      const batchResult = {};
      for (const code of batch) {
        const key = `${stockMarketPrefix(code)}${code}`;
        const marker = Buffer.from(`v_${key}="`);
        const start = bytes.indexOf(marker);
        if (start < 0) continue;
        const valueStart = start + marker.length;
        const end = bytes.indexOf(0x22, valueStart);
        if (end < 0) continue;
        const quote = parseTencentQuote(bytes.subarray(valueStart, end));
        if (quote) batchResult[code] = quote;
      }
      return batchResult;
    }));
    const result = groups.reduce((quotes, group) => {
      if (group.status === "fulfilled") Object.assign(quotes, group.value);
      return quotes;
    }, {});
    if (Object.keys(result).length) return result;
    throw new Error("Tencent returned no quotes");
  } catch (error) {
    lastError = error;
  }
  try {
    const groups = await Promise.allSettled(chunkArray(codes, 45).map(async (batch) => {
      const query = batch.map((code) => `${stockMarketPrefix(code)}${code}`).join(",");
      const upstream = await fetch(`https://hq.sinajs.cn/list=${query}&_=${Date.now()}`, {
        headers: {
          "Referer": "https://finance.sina.com.cn/",
          "User-Agent": "Mozilla/5.0"
        },
        signal: AbortSignal.timeout(4500)
      });
      if (!upstream.ok) throw new Error(`Sina quote HTTP ${upstream.status}`);
      const text = Buffer.from(await upstream.arrayBuffer()).toString("latin1");
      const batchResult = {};
      for (const code of batch) {
        const key = `${stockMarketPrefix(code)}${code}`;
        const match = text.match(new RegExp(`hq_str_${key}="([^"]*)"`));
        const fields = match?.[1]?.split(",");
        const price = Number(fields?.[3]);
        const previousClose = Number(fields?.[2]);
        if (Number.isFinite(price) && price > 0) {
          batchResult[code] = {
            price,
            previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price
          };
        }
      }
      return batchResult;
    }));
    const result = groups.reduce((quotes, group) => {
      if (group.status === "fulfilled") Object.assign(quotes, group.value);
      return quotes;
    }, {});
    if (Object.keys(result).length) return result;
    throw new Error("Sina returned no quotes");
  } catch (error) {
    lastError = error;
  }
  throw lastError || new Error("No stock quote provider returned data");
}

function stockHistoryStart(period) {
  const months = { "1M": 1, "3M": 3, "1Y": 12, "3Y": 36 }[period] || 3;
  const start = new Date();
  start.setMonth(start.getMonth() - months);
  const year = start.getFullYear();
  const month = String(start.getMonth() + 1).padStart(2, "0");
  const day = String(start.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

async function stockHistory(searchParams) {
  const code = normalizeStockCode(searchParams.get("symbol"));
  const period = searchParams.get("period") || "3M";
  if (!code || !["1M", "3M", "1Y", "3Y"].includes(period)) {
    throw new Error("Valid stock symbol and period are required");
  }
  const params = new URLSearchParams({
    secid: stockMarketPrefix(code) === "sh" ? `1.${code}` : stockMarketPrefix(code) === "hk" ? `116.${code}` : `0.${code}`,
    fields1: "f1,f2,f3,f4,f5,f6",
    fields2: "f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61",
    klt: "101",
    fqt: "1",
    beg: stockHistoryStart(period),
    end: "20500101",
    lmt: "1000",
    _: String(Date.now())
  });
  const upstream = await fetch(`https://push2his.eastmoney.com/api/qt/stock/kline/get?${params}`, {
    headers: { "User-Agent": "sia-investing-market-proxy/1.0" },
    signal: AbortSignal.timeout(6000)
  });
  if (!upstream.ok) throw new Error(`Eastmoney history HTTP ${upstream.status}`);
  const payload = await upstream.json();
  const rows = Array.isArray(payload?.data?.klines) ? payload.data.klines : [];
  const points = rows.map((row) => {
    const [date, , close] = String(row).split(",");
    return { date, close: Number(close) };
  }).filter((point) => /^\d{4}-\d{2}-\d{2}$/.test(point.date) && Number.isFinite(point.close) && point.close > 0);
  if (points.length < 2) throw new Error("Eastmoney returned no stock history");
  return { code, period, points };
}

async function cryptoQuotes(searchParams) {
  const requested = (searchParams.get("symbols") || cryptoSymbols.join(","))
    .split(",")
    .map((symbol) => symbol.trim().toUpperCase())
    .filter((symbol) => /^[A-Z0-9]+USDT$/.test(symbol));
  const symbols = [...new Set(requested.length ? requested : cryptoSymbols)];
  const coingeckoIds = {
    BTCUSDT: "bitcoin",
    ETHUSDT: "ethereum",
    SOLUSDT: "solana",
    BNBUSDT: "binancecoin",
    XRPUSDT: "ripple",
    DOGEUSDT: "dogecoin"
  };
  const coingeckoRequested = symbols.filter((symbol) => coingeckoIds[symbol]);
  const coingeckoIdParam = coingeckoRequested.map((symbol) => coingeckoIds[symbol]).join(",");
  const providers = [
    {
      name: "Binance",
      endpoints: [
        "https://api.binance.com/api/v3/ticker/24hr",
        "https://data-api.binance.vision/api/v3/ticker/24hr"
      ],
      normalize(payload) {
        const requestedSet = new Set(symbols);
        return Array.isArray(payload)
          ? payload.filter((row) => requestedSet.has(String(row.symbol || "").toUpperCase()))
          : [];
      }
    },
    {
      name: "Bybit",
      endpoints: [
        "https://api.bybit.com/v5/market/tickers?category=spot",
        "https://api.bytick.com/v5/market/tickers?category=spot"
      ],
      normalize(payload) {
        const requestedSet = new Set(symbols);
        const rows = payload?.retCode === 0 && Array.isArray(payload?.result?.list) ? payload.result.list : [];
        return rows
          .filter((row) => requestedSet.has(String(row.symbol || "").toUpperCase()))
          .map((row) => {
            const symbol = String(row.symbol || "").toUpperCase();
            const lastPrice = Number(row.lastPrice);
            const previousClose = Number(row.prevPrice24h);
            const change = Number(row.price24hPcnt);
            return {
              symbol,
              s: symbol,
              c: String(row.lastPrice ?? ""),
              o: Number.isFinite(previousClose) && previousClose > 0 ? String(previousClose) : String(lastPrice),
              P: Number.isFinite(change) ? change * 100 : 0,
              q: String(row.volume24h ?? "0")
            };
          })
          .filter((row) => Number(row.c) > 0);
      }
    },
    {
      name: "OKX",
      endpoints: [
        "https://www.okx.com/api/v5/market/tickers?instType=SPOT"
      ],
      normalize(payload) {
        const requestedSet = new Set(symbols);
        const rows = payload?.code === "0" && Array.isArray(payload?.data) ? payload.data : [];
        return rows
          .map((row) => {
            const symbol = String(row.instId || "").replace(/-/g, "").toUpperCase();
            const lastPrice = Number(row.last);
            const previousClose = Number(row.open24h);
            const change = previousClose > 0 ? (lastPrice / previousClose - 1) * 100 : 0;
            return {
              symbol,
              s: symbol,
              c: String(row.last ?? ""),
              o: Number.isFinite(previousClose) && previousClose > 0 ? String(previousClose) : String(lastPrice),
              P: Number.isFinite(change) ? change : 0,
              q: String(row.volCcy24h ?? "0")
            };
          })
          .filter((row) => requestedSet.has(row.symbol) && Number(row.c) > 0);
      }
    },
    {
      name: "CoinGecko",
      endpoints: coingeckoIdParam
        ? [`https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoIdParam}&vs_currencies=usd&include_24hr_change=true&include_24hr_vol=true`]
        : [],
      normalize(payload) {
        return coingeckoRequested.map((symbol) => {
          const row = payload?.[coingeckoIds[symbol]];
          const lastPrice = Number(row?.usd);
          const change = Number(row?.usd_24h_change);
          const previousClose = change > -100 ? lastPrice / (1 + change / 100) : lastPrice;
          return {
            symbol,
            s: symbol,
            c: String(lastPrice),
            o: String(previousClose),
            P: Number.isFinite(change) ? change : 0,
            q: String(row?.usd_24h_vol ?? "0")
          };
        }).filter((row) => Number(row.c) > 0);
      }
    },
    {
      name: "CoinCap",
      endpoints: ["https://api.coincap.io/v2/assets"],
      normalize(payload) {
        const requestedSet = new Set(symbols.map((symbol) => symbol.replace(/USDT$/, "")));
        return (Array.isArray(payload?.data) ? payload.data : [])
          .filter((row) => requestedSet.has(String(row.symbol || "").toUpperCase()))
          .map((row) => {
            const symbol = `${String(row.symbol).toUpperCase()}USDT`;
            const lastPrice = Number(row.priceUsd);
            const change = Number(row.changePercent24Hr);
            const previousClose = change > -100 ? lastPrice / (1 + change / 100) : lastPrice;
            return {
              symbol,
              s: symbol,
              c: String(lastPrice),
              o: String(previousClose),
              P: Number.isFinite(change) ? change : 0,
              q: String(row.volumeUsd24Hr ?? "0")
            };
          })
          .filter((row) => Number(row.c) > 0);
      }
    }
  ];
  const attempts = providers.flatMap((provider) => provider.endpoints.map(async (endpoint) => {
    const upstream = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, {
      headers: { "User-Agent": "sia-investing-market-proxy/1.0" },
      signal: AbortSignal.timeout(4500)
    });
    if (!upstream.ok) throw new Error(`${provider.name} quote HTTP ${upstream.status}`);
    const payload = await upstream.json();
    const quotes = provider.normalize(payload);
    if (!quotes.length) throw new Error(`${provider.name} returned no requested quotes`);
    return quotes;
  }));
  try {
    return await Promise.any(attempts);
  } catch (error) {
    const messages = error instanceof AggregateError
      ? error.errors.map((item) => item instanceof Error ? item.message : String(item)).filter(Boolean)
      : [];
    throw new Error(messages.length ? `Crypto quote providers unavailable: ${messages.join("; ")}` : "No crypto quote provider returned data");
  }
}

async function proxyDividends(searchParams) {
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  if (!start || !end) throw new Error("Dividend range is required");
  const params = new URLSearchParams({
    reportName: "RPT_SHAREBONUS_DET",
    columns: "ALL",
    filter: `(EX_DIVIDEND_DATE>='${start}')(EX_DIVIDEND_DATE<='${end}')`,
    pageNumber: "1",
    pageSize: "500",
    sortColumns: "EX_DIVIDEND_DATE",
    sortTypes: "1",
    source: "WEB",
    client: "WEB",
    _: String(Date.now())
  });
  const upstream = await fetch(`https://datacenter-web.eastmoney.com/api/data/v1/get?${params}`, {
    headers: { "User-Agent": "sia-investing-market-proxy/1.0" }
  });
  if (!upstream.ok) throw new Error(`Eastmoney dividend HTTP ${upstream.status}`);
  return upstream.json();
}

async function handleApi(request, response, url) {
  try {
    if (url.pathname === "/api/health") {
      return json(response, 200, { ok: true, service: "sia-investing-market-proxy", now: new Date().toISOString() });
    }
    if (url.pathname === "/api/market/stocks") {
      return json(response, 200, await stockQuotes(url.searchParams));
    }
    if (url.pathname === "/api/market/stock-history") {
      return json(response, 200, await stockHistory(url.searchParams));
    }
    if (url.pathname === "/api/market/stock-roe") {
      const code = String(url.searchParams.get("symbol") || "").replace(/\D/g, "");
      const secu = `${code}.${/^[569]/.test(code) ? "SH" : "SZ"}`;
      const params = new URLSearchParams({ reportName: "RPT_F10_FINANCE_MAIN", columns: "SECUCODE,REPORT_DATE,ROEJQ,ROE,ROE_AVG", filter: `(SECUCODE=\"${secu}\")`, pageNumber: "1", pageSize: "20", sortColumns: "REPORT_DATE", sortTypes: "-1", _: String(Date.now()) });
      const upstream = await fetch(`https://datacenter-web.eastmoney.com/api/data/v1/get?${params}`);
      if (!upstream.ok) throw new Error(`Eastmoney ROE HTTP ${upstream.status}`);
      const payload = await upstream.json();
      const rows = Array.isArray(payload?.result?.data) ? payload.result.data : [];
      const values = rows.map((item) => Number(item.ROEJQ ?? item.ROE ?? item.ROE_AVG)).filter(Number.isFinite);
      if (!values.length) throw new Error("No ROE records returned");
      return json(response, 200, { oneYear: values[0], fiveYear: values.slice(0, 5).reduce((sum, value) => sum + value, 0) / Math.min(5, values.length) });
    }
    if (url.pathname === "/api/market/valuation-percentile") {
      const code = String(url.searchParams.get("symbol") || "").replace(/\D/g, "");
      const { stdout } = await execFileAsync("/Users/sia/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3", [join(root, "akshare_valuation.py"), code], { timeout: 30000 });
      return json(response, 200, JSON.parse(stdout));
    }
    if (url.pathname === "/api/market/dividend") {
      const code = String(url.searchParams.get("symbol") || "").replace(/\D/g, "");
      const { stdout } = await execFileAsync("/Users/sia/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3", [join(root, "akshare_dividend.py"), code], { timeout: 30000 });
      return json(response, 200, JSON.parse(stdout));
    }
    if (url.pathname === "/api/market/crypto") {
      return json(response, 200, await cryptoQuotes(url.searchParams));
    }
    if (url.pathname === "/api/dividends") {
      return json(response, 200, await proxyDividends(url.searchParams));
    }
    return json(response, 404, { error: "API route not found" });
  } catch (error) {
    return json(response, 502, { error: error instanceof Error ? error.message : "Upstream request failed" });
  }
}

async function handleStatic(request, response, url) {
  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = normalize(join(root, requestedPath.replace(/^\/+/, "")));
  const relativePath = relative(root, filePath);
  if (relativePath === ".." || relativePath.startsWith("../") || relativePath.startsWith("/")) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }
  try {
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-cache"
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

const server = http.createServer(async (request, response) => {
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    response.end();
    return;
  }
  const url = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);
  if (url.pathname.startsWith("/api/")) return handleApi(request, response, url);
  return handleStatic(request, response, url);
});

server.listen(port, host, () => {
  console.log(`sia's investing is running at http://localhost:${port}`);
  console.log(`LAN access: http://<your-computer-ip>:${port}`);
});
