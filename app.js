const legacyStocks = [
  { name: "长江电力", code: "600900", sector: "电力", sub: "水电", price: 28.10, prev: 27.96, yieldNew: 3.56, yieldAvg: 3.28, yieldLow: 2.92, years: 23, drawdown: 11.57, first: 24.85, add: 21.58, heavy: 18.22, whitelist: true, payout: "2026-06-30", history: [26.82, 27.08, 26.94, 27.43, 27.18, 27.62, 27.46, 27.98, 27.72, 28.10] },
  { name: "申能股份", code: "600642", sector: "电力", sub: "综合能源", price: 8.60, prev: 8.53, yieldNew: 5.35, yieldAvg: 5.08, yieldLow: 4.65, years: 33, drawdown: 0.00, first: 8.89, add: 7.69, heavy: 6.67, whitelist: true, payout: "2026-06-29", history: [8.12, 8.21, 8.18, 8.32, 8.29, 8.41, 8.36, 8.48, 8.53, 8.60] },
  { name: "招商银行", code: "600036", sector: "银行", sub: "股份行", price: 41.04, prev: 40.86, yieldNew: 4.91, yieldAvg: 4.86, yieldLow: 4.81, years: 24, drawdown: 0.00, first: 41.08, add: 35.85, heavy: 31.81, whitelist: true, payout: "2026-07-10", history: [39.24, 39.62, 39.38, 40.16, 40.28, 40.05, 40.72, 40.43, 40.86, 41.04] },
  { name: "华夏银行", code: "600015", sector: "银行", sub: "股份行", price: 6.24, prev: 6.20, yieldNew: 6.73, yieldAvg: 6.46, yieldLow: 6.15, years: 24, drawdown: 0.00, first: 7.68, add: 6.40, heavy: 5.49, whitelist: true, payout: "2026-07-22", history: [5.96, 6.12, 6.04, 6.18, 6.09, 6.23, 6.17, 6.28, 6.20, 6.24] },
  { name: "兴业银行", code: "601166", sector: "银行", sub: "股份行", price: 17.73, prev: 17.68, yieldNew: 6.01, yieldAvg: 5.95, yieldLow: 5.87, years: 20, drawdown: 0.00, first: 20.80, add: 17.33, heavy: 14.86, whitelist: true, payout: "2026-07-08", history: [16.84, 17.11, 16.96, 17.35, 17.22, 17.42, 17.28, 17.58, 17.68, 17.73] },
  { name: "中国移动", code: "600941", sector: "公用事业", sub: "通信", price: 96.01, prev: 95.30, yieldNew: 4.90, yieldAvg: 4.79, yieldLow: 4.59, years: 6, drawdown: 0.00, first: 97.99, add: 84.80, heavy: 73.49, whitelist: true, payout: "2026-07-15", history: [91.80, 92.43, 92.18, 93.70, 93.22, 94.16, 94.88, 95.52, 95.30, 96.01] },
  { name: "中国神华", code: "601088", sector: "周期", sub: "煤炭", price: 39.28, prev: 39.74, yieldNew: 5.84, yieldAvg: 5.62, yieldLow: 5.16, years: 20, drawdown: 2.37, first: 44.40, add: 37.00, heavy: 31.71, whitelist: true, payout: "2026-07-03", history: [41.52, 40.96, 41.28, 40.72, 40.16, 40.44, 39.92, 39.48, 39.74, 39.28] },
  { name: "山东高速", code: "600350", sector: "公用事业", sub: "高速", price: 9.94, prev: 9.88, yieldNew: 4.23, yieldAvg: 4.23, yieldLow: 4.23, years: 24, drawdown: 0.00, first: 10.50, add: 8.75, heavy: 7.50, whitelist: true, payout: "2026-06-26", history: [9.56, 9.63, 9.59, 9.72, 9.81, 9.76, 9.86, 9.82, 9.88, 9.94] },
  { name: "宁沪高速", code: "600377", sector: "公用事业", sub: "高速", price: 12.52, prev: 12.32, yieldNew: 3.91, yieldAvg: 3.86, yieldLow: 3.75, years: 27, drawdown: 6.15, first: 11.75, add: 10.00, heavy: 8.55, whitelist: true, payout: "2026-06-30", history: [11.74, 11.86, 11.80, 12.02, 11.94, 12.16, 12.20, 12.28, 12.32, 12.52] },
  { name: "工商银行", code: "601398", sector: "银行", sub: "六大行", price: 8.11, prev: 8.03, yieldNew: 3.83, yieldAvg: 3.80, yieldLow: 3.78, years: 21, drawdown: 16.04, first: 6.81, add: 5.89, heavy: 5.11, whitelist: true, payout: "2026-07-20", history: [7.74, 7.82, 7.79, 7.96, 7.90, 8.04, 7.98, 8.10, 8.03, 8.11] },
  { name: "建设银行", code: "601939", sector: "银行", sub: "六大行", price: 10.93, prev: 10.86, yieldNew: 3.56, yieldAvg: 3.63, yieldLow: 3.56, years: 20, drawdown: 20.97, first: 8.64, add: 7.48, heavy: 6.48, whitelist: true, payout: "2026-07-17", history: [10.32, 10.38, 10.44, 10.55, 10.62, 10.74, 10.68, 10.84, 10.86, 10.93] },
  { name: "大秦铁路", code: "601006", sector: "公用事业", sub: "铁路", price: 4.72, prev: 4.70, yieldNew: 4.70, yieldAvg: 6.16, yieldLow: 4.70, years: 21, drawdown: 6.06, first: 4.43, add: 3.82, heavy: 3.26, whitelist: true, payout: "2026-06-24", history: [4.48, 4.52, 4.49, 4.58, 4.61, 4.58, 4.66, 4.64, 4.70, 4.72] },
  { name: "川投能源", code: "600674", sector: "电力", sub: "水电", price: 15.91, prev: 15.84, yieldNew: 3.14, yieldAvg: 2.72, yieldLow: 2.51, years: 19, drawdown: 16.20, first: 13.33, add: 11.43, heavy: 9.52, whitelist: true, payout: "2026-06-28", history: [15.12, 15.30, 15.22, 15.48, 15.38, 15.56, 15.72, 15.66, 15.84, 15.91] },
  { name: "中谷物流", code: "603565", sector: "周期", sub: "内贸航运", price: 12.11, prev: 12.22, yieldNew: 5.53, yieldAvg: 6.00, yieldLow: 5.53, years: 6, drawdown: 20.96, first: 9.57, add: 8.37, heavy: 7.05, whitelist: true, payout: "2026-07-28", history: [13.10, 12.92, 12.80, 12.62, 12.72, 12.48, 12.38, 12.30, 12.22, 12.11] },
  { name: "中国联通", code: "600050", sector: "公用事业", sub: "通信", price: 4.23, prev: 4.18, yieldNew: 3.87, yieldAvg: 3.57, yieldLow: 3.12, years: 9, drawdown: 21.98, first: 3.30, add: 2.81, heavy: 2.40, whitelist: false, payout: "2026-07-14", history: [4.00, 4.05, 4.02, 4.08, 4.12, 4.10, 4.16, 4.13, 4.18, 4.23] },
  { name: "首创环保", code: "600008", sector: "公用事业", sub: "环保", price: 2.76, prev: 2.73, yieldNew: 4.35, yieldAvg: 4.71, yieldLow: 3.62, years: 26, drawdown: 19.48, first: 2.22, add: 1.92, heavy: 1.67, whitelist: false, payout: "2026-07-06", history: [2.58, 2.60, 2.57, 2.64, 2.62, 2.68, 2.67, 2.71, 2.73, 2.76] },
  { name: "招商公路", code: "001965", sector: "公用事业", sub: "高速", price: 9.70, prev: 9.74, yieldNew: 3.85, yieldAvg: 4.54, yieldLow: 3.85, years: 9, drawdown: 8.44, first: 8.88, add: 7.46, heavy: 6.43, whitelist: false, payout: "2026-07-12", history: [9.94, 9.82, 9.88, 9.80, 9.86, 9.77, 9.76, 9.72, 9.74, 9.70] }
];

const stocks = globalThis.stockData || legacyStocks;
const dividendReferenceCodes = [
  "600015", "601818", "601166", "600016", "000001", "601997", "600941", "601838",
  "600350", "600012", "600036", "601169", "600642", "601009", "601825", "601000",
  "601229", "600023", "601328", "601006", "601916", "600377", "600018", "601128",
  "600886", "601658", "001965", "601598", "600900", "600098", "601577", "002966",
  "601077", "601728", "600919", "601398", "603565", "600008", "600674", "601939",
  "600050", "601018", "600863", "600803", "601988", "001872", "601288", "600483",
  "601998", "601088", "000088", "601665", "600926", "600000", "601298", "601225",
  "600027", "003816", "600025", "603568", "600236", "601001", "600011", "601985",
  "600971", "600795", "600188", "600323", "002142", "600362", "000878", "603993",
  "601600", "000807", "601899"
];
const dividendReferenceCodeSet = new Set(dividendReferenceCodes);
stocks.forEach((stock) => {
  const dividendPerShare = Number(stock.dividendPerShare);
  if (!Number.isFinite(dividendPerShare) || dividendPerShare < 0) {
    stock.dividendPerShare = Number(stock.price) > 0 && Number(stock.yieldNew) >= 0
      ? Number(stock.price) * Number(stock.yieldNew) / 100
      : 0;
  }
});
const whitelistCodes = new Set(stocks.filter((stock) => stock.whitelist).map((stock) => stock.code));

function filterWhitelistDividends(events) {
  return events.filter((event) => whitelistCodes.has(event.code));
}

const cryptoAssets = [
  { name: "Bitcoin", symbol: "BTC", price: 104820.40, prev: 103980.20, change24: 2.84, change7: 6.72, volatility: 3.8, cap: 2071, signal: "bullish", support: 101200, resistance: 108600, history: [98600, 99240, 100180, 99860, 101420, 102180, 101760, 103240, 103980, 104820] },
  { name: "Ethereum", symbol: "ETH", price: 2548.68, prev: 2519.40, change24: 1.72, change7: 4.96, volatility: 4.6, cap: 307, signal: "bullish", support: 2420, resistance: 2680, history: [2320, 2355, 2388, 2402, 2436, 2472, 2458, 2501, 2519, 2549] },
  { name: "Solana", symbol: "SOL", price: 178.42, prev: 181.06, change24: -1.46, change7: 2.14, volatility: 6.8, cap: 86, signal: "watch", support: 168, resistance: 192, history: [164, 170, 168, 174, 179, 176, 182, 184, 181, 178] },
  { name: "BNB", symbol: "BNB", price: 672.18, prev: 666.92, change24: 0.79, change7: 3.42, volatility: 3.2, cap: 98, signal: "bullish", support: 648, resistance: 704, history: [634, 642, 647, 655, 661, 658, 665, 669, 667, 672] },
  { name: "XRP", symbol: "XRP", price: 2.18, prev: 2.24, change24: -2.31, change7: -0.86, volatility: 7.4, cap: 126, signal: "watch", support: 2.02, resistance: 2.36, history: [2.10, 2.18, 2.14, 2.28, 2.25, 2.31, 2.26, 2.22, 2.24, 2.18] },
  { name: "Dogecoin", symbol: "DOGE", price: 0.1842, prev: 0.1796, change24: 2.56, change7: 8.18, volatility: 8.9, cap: 27, signal: "bullish", support: 0.17, resistance: 0.21, history: [0.16, 0.165, 0.172, 0.169, 0.176, 0.181, 0.178, 0.182, 0.18, 0.184] }
];
const accountCryptoSymbols = new Set(["BTC", "SOL", "ETH"]);

const defaultHoldings = [
  { id: 1, name: "招商银行", code: "600036", marketKey: "600036", marketType: "stock", buyPrice: 38.20, quantity: 500, dividendPerUnit: 1.97 },
  { id: 2, name: "长江电力", code: "600900", marketKey: "600900", marketType: "stock", buyPrice: 25.40, quantity: 300, dividendPerUnit: 1.01 },
  { id: 3, name: "Bitcoin", code: "BTC", marketKey: "BTC", marketType: "crypto", buyPrice: 99800, quantity: 0.1, dividendPerUnit: 0 }
];

const dividendSnapshot = [
  { date: "2026-09-21", name: "亿联网络", code: "300628", cashPerShare: 0.5000, yieldRate: 1.21, progress: "实施分配", scheme: "10派5.00元(含税,扣税后4.50元)" },
  { date: "2026-09-21", name: "云天化", code: "600096", cashPerShare: 0.2000, yieldRate: 0.71, progress: "实施分配", scheme: "10派2.00元(含税,扣税后1.80元)" },
  { date: "2026-09-21", name: "桂冠电力", code: "600236", cashPerShare: 0.1200, yieldRate: 1.23, progress: "实施分配", scheme: "10派1.20元(含税,扣税后1.08元)" },
  { date: "2026-09-24", name: "平安银行", code: "000001", cashPerShare: 0.2490, yieldRate: null, progress: "实施分配", scheme: "10派2.49元(含税,扣税后2.241元)" },
  { date: "2026-09-24", name: "福耀玻璃", code: "600660", cashPerShare: 1.0000, yieldRate: 1.86, progress: "实施分配", scheme: "10派10.00元(含税,扣税后9.00元)" },
  { date: "2026-09-24", name: "沪农商行", code: "601825", cashPerShare: 0.2499, yieldRate: 2.86, progress: "实施分配", scheme: "10派2.499元(含税,扣税后2.2491元)" },
  { date: "2026-09-24", name: "东鹏饮料", code: "605499", cashPerShare: 3.0000, yieldRate: 2.69, progress: "实施分配", scheme: "10派30.00元(含税,扣税后27.00元)" },
  { date: "2026-09-28", name: "杭州银行", code: "600926", cashPerShare: 0.4600, yieldRate: 2.68, progress: "实施分配", scheme: "10派4.60元(含税,扣税后4.14元)" },
  { date: "2026-09-30", name: "中国移动", code: "600941", cashPerShare: 2.5100, yieldRate: 2.60, progress: "实施分配", scheme: "10派25.10元(含税,扣税后22.59元)" },
  { date: "2026-10-08", name: "中国中铁", code: "601390", cashPerShare: 0.0637, yieldRate: 1.48, progress: "董事会决议通过", scheme: "10派0.6374元(含税)" }
];

const state = {
  search: "",
  sector: "all",
  whitelist: true,
  live: true,
  selectedCode: "600900",
  sortKey: "yieldNew",
  sortDirection: "desc",
  period: "3M",
  cryptoSymbol: "BTC",
  cryptoPeriod: "7D",
  expandedCryptoSymbol: null,
  cryptoSearch: "",
  cryptoSignal: "all",
  monitorSearch: "",
  monitorCategory: "",
  monitorDropRange: "",
  monitorAOnly: false,
  monitorShowSatellite: false,
  accountType: "stock",
  initialStockLoading: true,
  accountFormMarket: null,
  editingHoldingId: null,
  dividendProgress: "all",
  expandedStockCode: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
let toastTimer;
let holdings = loadHoldings();
let liveRefreshInFlight = false;
let cryptoSocket = null;
let cryptoSocketRetryTimer = null;
let cryptoStreamEndpointIndex = 0;
let cryptoLastUpdatedAt = null;
let cryptoLivePriceAvailable = false;
let stockDataMode = "unavailable";
let cryptoDataMode = "unavailable";
let stockLastUpdatedAt = null;
const accountStockQuotes = new Map();
let dividendEvents = filterWhitelistDividends(dividendSnapshot).map((event) => ({ ...event }));
let dividendDataMode = "snapshot";
let dividendRefreshInFlight = false;
let dividendLastRefreshDate = "";
let dividendUpdatedAt = new Date();
const isFilePage = window.location.protocol === "file:";
const isLocalServer = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
const configuredApiBase = String(window.__SIA_API_BASE__ || "").replace(/\/$/, "");
const marketApiBase = configuredApiBase ? `${configuredApiBase}/api/market` : isLocalServer ? "/api/market" : "";
const dividendApiBase = configuredApiBase ? `${configuredApiBase}/api` : isLocalServer ? "/api" : "";
const trendPeriodConfig = {
  "1M": { months: 1, targetPoints: 22, labels: ["1个月前", "3周前", "2周前", "1周前", "现在"] },
  "3M": { months: 3, targetPoints: 44, labels: ["3个月前", "2个月前", "1个月前", "2周前", "现在"] },
  "1Y": { months: 12, targetPoints: 60, labels: ["12个月前", "9个月前", "6个月前", "3个月前", "现在"] },
  "3Y": { months: 36, targetPoints: 72, labels: ["3年前", "2年前", "1年前", "6个月前", "现在"] }
};
const trendCacheMaxAge = 5 * 60 * 1000;
let trendHistoryRequestKey = "";
let usdCnyRate = 7.2;
let usdCnyRateUpdatedAt = null;

function formatTime(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }).format(date);
}

function formatNumber(value, digits = 2) {
  return Number(value).toFixed(digits);
}

function normalizeDividendValue(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? Number(numeric.toFixed(4)) : 0;
}

function formatBuyPrice(value) {
  return formatNumber(value, 3);
}

function formatCryptoPrice(value) {
  const numeric = Number(value) || 0;
  if (numeric >= 1000) return numeric.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (numeric >= 1) return numeric.toFixed(2);
  return numeric.toFixed(4);
}

function formatAccountMoney(value, marketType = state.accountType) {
  return marketType === "crypto" ? formatCryptoPrice(value) : formatNumber(value, 2);
}

function formatAccountSummaryMoney(value, marketType = state.accountType, digits = 2) {
  return marketType === "crypto"
    ? formatCryptoPrice(value)
    : formatNumber(Number(value || 0) / 10000, digits);
}

function formatCnyEquivalent(value, digits = 2) {
  return formatNumber(Number(value || 0) * usdCnyRate, digits);
}

function formatAccountMetricMoney(value) {
  return state.accountType === "crypto"
    ? formatNumber(value, 0)
    : formatAccountSummaryMoney(value);
}

async function refreshUsdCnyRate() {
  const endpoints = [
    "https://api.frankfurter.app/latest?from=USD&to=CNY",
    "https://open.er-api.com/v6/latest/USD"
  ];
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) continue;
      const payload = await response.json();
      const rate = Number(payload?.rates?.CNY);
      if (Number.isFinite(rate) && rate > 0) {
        usdCnyRate = rate;
        usdCnyRateUpdatedAt = new Date();
        if (state.accountType === "crypto") renderAccountAll();
        return rate;
      }
    } catch {
      // Keep the last known rate and try the next provider.
    }
  }
  return usdCnyRate;
}

function getBeijingDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date).reduce((result, part) => {
    result[part.type] = part.value;
    return result;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function addMonths(dateString, months) {
  const date = new Date(`${dateString}T00:00:00+08:00`);
  date.setMonth(date.getMonth() + months);
  return getBeijingDate(date);
}

function formatTrendAxisDate(dateString, period) {
  const match = String(dateString || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return "";
  if (period === "3Y") return `${match[1]}/${match[2]}`;
  return `${match[2]}/${match[3]}`;
}

function buildTrendAxisLabels(points, period) {
  const datedPoints = points.filter((point) => point.date);
  if (datedPoints.length < 2) return trendPeriodConfig[period]?.labels || trendPeriodConfig["3M"].labels;
  return [0, 0.25, 0.5, 0.75, 1].map((ratio) => {
    const index = Math.min(datedPoints.length - 1, Math.round((datedPoints.length - 1) * ratio));
    return formatTrendAxisDate(datedPoints[index].date, period);
  });
}

function sampleTrendPoints(points, targetPoints) {
  if (points.length <= targetPoints) return points;
  const sampled = [];
  for (let index = 0; index < targetPoints; index += 1) {
    const sourceIndex = Math.round(index * (points.length - 1) / (targetPoints - 1));
    sampled.push(points[sourceIndex]);
  }
  return sampled;
}

function normalizeDate(value) {
  if (!value) return "";
  const match = String(value).match(/(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  return match ? `${match[1]}-${String(match[2]).padStart(2, "0")}-${String(match[3]).padStart(2, "0")}` : "";
}

function normalizePercent(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return null;
  return Math.abs(number) <= 1 ? number * 100 : number;
}

function normalizeDividendRow(row) {
  const date = normalizeDate(row.EX_DIVIDEND_DATE || row.exDividendDate || row.DIVIDEND_DATE || row.date);
  const name = row.SECURITY_NAME_ABBR || row.SECURITY_NAME || row.name || "";
  const code = String(row.SECURITY_CODE || row.code || "").padStart(6, "0");
  const pretaxField = row.PRETAX_BONUS_RMB ?? row.preTaxBonusRmb;
  const directCashField = row.CASH_DIVIDEND ?? row.cashPerShare ?? row.CASH_PER_SHARE;
  const rawCash = Number(pretaxField ?? directCashField);
  const cashPerShare = Number.isFinite(rawCash) ? (pretaxField != null ? rawCash / 10 : rawCash) : 0;
  const rawYield = row.DIVIDEND_YIELD ?? row.YIELD_RATE ?? row.DIVIDEND_RATE ?? row.DIVIDENT_RATIO ?? row.yieldRate;
  const stock = stocks.find((item) => item.code === code);
  const yieldRate = normalizePercent(rawYield) ?? (stock && stock.price > 0 ? cashPerShare / stock.price * 100 : null);
  const progress = row.ASSIGN_PROGRESS || row.PROGRESS || row.DIVIDEND_PROGRESS || row.STATUS || "方案已公布";
  const scheme = row.PLAN_EXPLAIN || row.IMPL_PLAN_PROFILE || row.DIVIDEND_PLAN || row.scheme || `10派${formatNumber(cashPerShare * 10)}元(含税)`;
  if (!date || !name || !code || !Number.isFinite(cashPerShare)) return null;
  return { date, name, code, cashPerShare, yieldRate, progress, scheme };
}

function readDividendCache() {
  try {
    const saved = window.localStorage.getItem("sia-investing-dividend-cache");
    const parsed = saved ? JSON.parse(saved) : null;
    return parsed && Array.isArray(parsed.events) ? parsed : null;
  } catch {
    return null;
  }
}

function writeDividendCache(events, fetchedDate) {
  try {
    window.localStorage.setItem("sia-investing-dividend-cache", JSON.stringify({
      fetchedDate,
      events,
      savedAt: new Date().toISOString()
    }));
  } catch {
    // Local storage may be unavailable when the page is opened from a restricted file context.
  }
}

async function fetchDividendEvents() {
  const startDate = getBeijingDate();
  const endDate = addMonths(startDate, 6);
  if (dividendApiBase) {
    const proxyResponse = await fetch(`${dividendApiBase}/dividends?start=${encodeURIComponent(startDate)}&end=${encodeURIComponent(endDate)}&_=${Date.now()}`, { cache: "no-store" });
    if (proxyResponse.ok) {
      const proxyPayload = await proxyResponse.json();
      const proxyRows = proxyPayload?.result?.data;
      if (Array.isArray(proxyRows)) {
        const proxyEvents = filterWhitelistDividends(proxyRows.map(normalizeDividendRow).filter(Boolean))
          .filter((event) => event.date >= startDate && event.date <= endDate);
        if (proxyEvents.length) return proxyEvents.sort((a, b) => a.date.localeCompare(b.date));
      }
    }
  }
  const params = new URLSearchParams({
    reportName: "RPT_SHAREBONUS_DET",
    columns: "ALL",
    filter: `(EX_DIVIDEND_DATE>='${startDate}')(EX_DIVIDEND_DATE<='${endDate}')`,
    pageNumber: "1",
    pageSize: "500",
    sortColumns: "EX_DIVIDEND_DATE",
    sortTypes: "1",
    source: "WEB",
    client: "WEB",
    _: String(Date.now())
  });
  const response = await fetch(`https://datacenter-web.eastmoney.com/api/data/v1/get?${params}`, { cache: "no-store" });
  if (!response.ok) throw new Error(`dividend API HTTP ${response.status}`);
  const payload = await response.json();
  const rows = payload?.result?.data;
  if (!Array.isArray(rows)) throw new Error("empty dividend API response");
  const events = filterWhitelistDividends(rows.map(normalizeDividendRow).filter(Boolean))
    .filter((event) => event.date >= startDate && event.date <= endDate);
  if (!events.length) throw new Error("no dividend events in range");
  return events.sort((a, b) => a.date.localeCompare(b.date));
}

function renderDividendAll() {
  const filtered = dividendEvents
    .filter((event) => state.dividendProgress === "all" || event.progress === state.dividendProgress)
    .sort((a, b) => a.date.localeCompare(b.date));
  const rowsHtml = filtered.length ? filtered.map((event) => {
    const progressClass = event.progress === "实施分配" ? "is-complete" : "is-pending";
    return `
      <tr>
        <td class="dividend-date">${escapeHtml(event.date)}</td>
        <td class="dividend-stock">${escapeHtml(event.name)}</td>
        <td class="dividend-code">${escapeHtml(event.code)}</td>
        <td class="dividend-cash">${formatNumber(event.cashPerShare, 4)}</td>
        <td class="dividend-yield">${event.yieldRate == null ? "—" : `${formatNumber(event.yieldRate)}%`}</td>
        <td class="dividend-progress ${progressClass}">${escapeHtml(event.progress)}</td>
        <td class="dividend-scheme">${escapeHtml(event.scheme)}</td>
      </tr>`;
  }).join("") : `<tr><td colspan="7" class="empty-state">当前筛选条件下没有分红记录。</td></tr>`;
  const dividendCount = $("#dividendCount");
  if (dividendCount) dividendCount.textContent = String(filtered.length);
  const dividendTableBody = $("#dividendTableBody");
  if (dividendTableBody) dividendTableBody.innerHTML = rowsHtml;
  const sourceLabel = dividendDataMode === "remote"
    ? "东方财富公开数据 · 今日已更新"
    : dividendDataMode === "cache"
      ? "今日已更新 · 使用本地缓存"
      : "远程接口不可用 · 使用本地快照";
  const rangeStart = dividendDataMode === "snapshot" ? dividendSnapshot[0].date : getBeijingDate();
  const rangeLabel = `覆盖 ${rangeStart} 至 ${addMonths(rangeStart, 6)}`;
  [
    ["dividendLastUpdated", formatTime(dividendUpdatedAt)],
    ["dividendDataSource", sourceLabel],
    ["dividendFooterSource", sourceLabel],
    ["dividendDateRange", rangeLabel],
    ["accountDividendCount", String(filtered.length)],
    ["accountDividendLastUpdated", formatTime(dividendUpdatedAt)],
    ["accountDividendDataSource", sourceLabel],
    ["accountDividendFooterSource", sourceLabel],
    ["accountDividendDateRange", rangeLabel]
  ].forEach(([id, text]) => {
    const element = $(`#${id}`);
    if (element) element.textContent = text;
  });
  const accountDividendTableBody = $("#accountDividendTableBody");
  if (accountDividendTableBody) accountDividendTableBody.innerHTML = rowsHtml;
}

async function refreshDividendData({ force = false, manual = false } = {}) {
  if (dividendRefreshInFlight) return;
  const today = getBeijingDate();
  const cached = readDividendCache();
  if (!force && cached?.fetchedDate === today) {
    dividendEvents = filterWhitelistDividends(cached.events);
    dividendDataMode = "cache";
    dividendLastRefreshDate = today;
    dividendUpdatedAt = cached.savedAt ? new Date(cached.savedAt) : new Date();
    renderDividendAll();
    return;
  }
  dividendRefreshInFlight = true;
  try {
    dividendEvents = await fetchDividendEvents();
    dividendDataMode = "remote";
    writeDividendCache(dividendEvents, today);
  } catch {
    if (cached?.events?.length) {
      dividendEvents = filterWhitelistDividends(cached.events);
      dividendDataMode = "cache";
    } else {
      dividendEvents = filterWhitelistDividends(dividendSnapshot).map((event) => ({ ...event }));
      dividendDataMode = "snapshot";
    }
  }
  dividendLastRefreshDate = today;
  dividendUpdatedAt = new Date();
  renderDividendAll();
  dividendRefreshInFlight = false;
  if (manual) showToast(dividendDataMode === "remote" ? "分红数据已更新" : "实时分红接口暂不可用，已保留最近数据");
}

function normalizeHoldingRecord(holding, index = 0) {
  if (!holding || typeof holding !== "object") return null;
  const name = String(holding.name || holding.code || holding.marketKey || "").trim();
  const code = String(holding.code || holding.marketKey || holding.name || "").trim();
  if (!name && !code) return null;
  const market = findMarketAsset(code) || findMarketAsset(name);
  const inferredType = holding.marketType
    || market?.type
    || (String(code).toUpperCase() === "USD" || accountCryptoSymbols.has(String(code).toUpperCase()) ? "crypto" : "fixed");
  const marketType = ["stock", "crypto", "fixed"].includes(inferredType) ? inferredType : "stock";
  const marketKey = holding.marketKey
    || market?.key
    || (marketType === "crypto" ? String(code || name).toUpperCase() : code || name);
  const displayName = holding.name || market?.displayName || name || code;
  return {
    ...holding,
    id: Number.isFinite(Number(holding.id)) ? Number(holding.id) : Date.now() + index,
    name: String(displayName).trim(),
    code: String(code || marketKey || displayName).trim(),
    marketKey: String(marketKey || code || displayName).trim(),
    marketType,
    buyPrice: Number(holding.buyPrice) || 0,
    quantity: Number(holding.quantity) || 0,
    dividendPerUnit: Number(holding.dividendPerUnit) || 0,
    annualRate: Number(holding.annualRate) || 0
  };
}

function normalizeHoldings(rows) {
  return (Array.isArray(rows) ? rows : [])
    .map(normalizeHoldingRecord)
    .filter(Boolean);
}

function loadHoldings() {
  try {
    const saved = window.localStorage.getItem("focus-radar-holdings");
    const parsed = saved ? JSON.parse(saved) : null;
    const rows = Array.isArray(parsed) ? parsed : parsed?.holdings;
    const normalized = normalizeHoldings(rows);
    return normalized.length ? normalized : defaultHoldings.map((holding) => ({ ...holding }));
  } catch {
    return defaultHoldings.map((holding) => ({ ...holding }));
  }
}

function saveHoldings() {
  try {
    window.localStorage.setItem("focus-radar-holdings", JSON.stringify(holdings));
  } catch {
    // Local storage may be unavailable when the page is opened from a restricted file context.
  }
}

function downloadHoldings() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    holdings: holdings.map((holding) => ({ ...holding }))
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "holdings.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`已导出 ${holdings.length} 笔持仓`);
}

function parseHoldingsPayload(payload) {
  const rows = Array.isArray(payload) ? payload : payload?.holdings;
  if (!Array.isArray(rows)) throw new Error("文件中没有 holdings 数组");
  const normalized = normalizeHoldings(rows);
  if (!normalized.length && rows.length) throw new Error("没有可识别的持仓记录");
  return normalized;
}

function importHoldingsFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      holdings = parseHoldingsPayload(JSON.parse(String(reader.result || "")));
      saveHoldings();
      renderAccountAll();
      showToast(`已导入 ${holdings.length} 笔持仓`);
    } catch (error) {
      showToast(`导入失败：${error.message || "JSON 格式不正确"}`);
    }
  };
  reader.onerror = () => showToast("导入失败：无法读取文件");
  reader.readAsText(file);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[character]));
}

function getMonitorAccountAsset(row) {
  const stock = stocks.find((item) => item.code === row.code);
  return {
    name: row.name,
    code: row.code,
    price: getMonitorDisplayPrice(row),
    dividendPerShare: Number(stock?.dividendPerShare) || 0,
    yieldNew: Number(stock?.yieldNew) || 0,
    history: stock?.history || []
  };
}

function findMarketAsset(query) {
  const normalized = String(query || "").trim().toLowerCase();
  if (!normalized) return null;
  const stockCode = normalized.match(/^(?:sh|sz|bj)?(\d{6})(?:\.(?:sh|sz|bj))?$/i)?.[1] || normalized;
  const stock = stocks.find((item) => (
    item.code === stockCode
    || `${item.name}${item.code}`.toLowerCase().includes(normalized)
  ));
  if (stock) return { asset: stock, type: "stock", key: stock.code, displayName: stock.name, code: stock.code };
  const monitorRow = getMonitorDataRows().find((row) => {
    const code = String(row.code || "").toLowerCase();
    const name = String(row.name || "").toLowerCase();
    const qualifiedCode = `${code}.${String(row.market || "").toLowerCase()}`;
    return normalized === code
      || normalized === qualifiedCode
      || name.includes(normalized)
      || `${name}${code}`.includes(normalized);
  });
  if (monitorRow) {
    return {
      asset: getMonitorAccountAsset(monitorRow),
      type: "stock",
      key: monitorRow.code,
      displayName: monitorRow.name,
      code: monitorRow.code
    };
  }
  const crypto = cryptoAssets.find((item) => `${item.name}${item.symbol}`.toLowerCase().includes(normalized));
  if (crypto) return { asset: crypto, type: "crypto", key: crypto.symbol, displayName: crypto.name, code: crypto.symbol };
  return null;
}

function findAccountMarket(query) {
  const market = findMarketAsset(query);
  if (state.accountType !== "crypto" || !market || market.type !== "crypto") return market;
  return accountCryptoSymbols.has(market.key) ? market : null;
}

function getHoldingMarket(holding) {
  if (holding.marketType === "stock") {
    const normalizedCode = String(holding.marketKey || holding.code || "")
      .trim()
      .match(/^(?:sh|sz|bj)?(\d{6})(?:\.(?:sh|sz|bj))?$/i)?.[1];
    const stock = stocks.find((item) => (
      item.code === normalizedCode
      || item.code === holding.marketKey
      || item.code === holding.code
      || item.name === holding.name
      || item.name === holding.code
    ));
    if (stock) return stock;
    const monitorRow = getMonitorDataRows().find((row) => (
      row.code === normalizedCode
      || row.code === holding.marketKey
      || row.code === holding.code
      || row.name === holding.name
      || row.name === holding.code
    ));
    return monitorRow ? getMonitorAccountAsset(monitorRow) : null;
  }
  if (holding.marketType === "crypto") {
    return cryptoAssets.find((item) => (
      item.symbol === holding.marketKey
      || item.symbol === holding.code
      || item.name === holding.name
    )) || null;
  }
  return null;
}

function getStockSignal(stock) {
  const history = Array.isArray(stock?.history)
    ? stock.history.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  const currentPrice = Number(stock?.price) || history.at(-1) || 0;
  const recent = history.slice(-5);
  const previous = history.slice(-10, -5);
  const recentAverage = recent.length ? recent.reduce((sum, value) => sum + value, 0) / recent.length : currentPrice;
  const previousAverage = previous.length ? previous.reduce((sum, value) => sum + value, 0) / previous.length : recentAverage;
  const momentum = previousAverage > 0 ? (recentAverage / previousAverage - 1) * 100 : 0;
  const latestMove = recent.length > 1 ? (recent.at(-1) / recent[0] - 1) * 100 : 0;
  const aboveAverage = recentAverage > 0 ? (currentPrice / recentAverage - 1) * 100 : 0;
  if ((momentum >= 1.2 && latestMove >= 0) || aboveAverage >= 1.5) return { label: "偏多", className: "bullish" };
  if ((momentum <= -1.2 && latestMove <= 0) || aboveAverage <= -1.5) return { label: "偏空", className: "bearish" };
  return { label: "观察", className: "watch" };
}

function getHoldingCurrentPrice(holding) {
  if (holding.marketType === "fixed") return Number(holding.buyPrice) || 0;
  if (holding.marketType === "stock") {
    const code = String(holding.marketKey || holding.code || "").trim()
      .match(/^(?:sh|sz|bj)?(\d{6})(?:\.(?:sh|sz|bj))?$/i)?.[1];
    const accountQuote = code ? accountStockQuotes.get(code) : null;
    if (Number.isFinite(accountQuote?.price) && accountQuote.price > 0) return accountQuote.price;
  }
  const market = getHoldingMarket(holding);
  return market ? Number(market.price) : Number(holding.manualCurrentPrice || holding.buyPrice);
}

function getAccountHoldings() {
  holdings = normalizeHoldings(holdings);
  return holdings.filter((holding) => holding.marketType === state.accountType);
}

function getAccountMeta() {
  if (state.accountType === "crypto") {
    return {
      title: "美元账户",
      currency: "$",
      unit: "USD",
      marketLabel: "美元 / BTC / SOL / ETH",
      buyLabel: "单价",
      currentLabel: "现价",
      quantityLabel: "数量",
      buyHint: "美元、BTC、SOL、ETH 按单价填写",
      currentHint: "BTC、SOL、ETH 实时流更新，接口异常时轮询",
      quantityHint: "美元、BTC、SOL、ETH 按单位填写",
      buyHeader: "单价",
      totalHeader: "买入总价",
      currentHeader: "现价",
      quantityHeader: "数量",
      profitRateHeader: "收益率",
      tableNote: "收益 =（当前价 - 买入价）× 数量 · 美元账户",
      isLive: true
    };
  }
  if (state.accountType === "fixed") {
    return {
      title: "现金账户",
      currency: "人民币",
      unit: "CNY",
      marketLabel: "活期",
      buyLabel: "单笔金额",
      currentLabel: "年化率",
      quantityLabel: "笔数",
      buyHint: "活期现金的单笔金额",
      currentHint: "例如 2.50%",
      quantityHint: "通常填写 1",
      buyHeader: "单笔金额（w）",
      totalHeader: "总金额（w）",
      currentHeader: "年化率",
      quantityHeader: "笔数",
      profitRateHeader: "收益率",
      tableNote: "预计年收益 = 单笔金额 × 年化率 × 笔数 · 金额单位：w",
      isLive: false
    };
  }
  return {
    title: "股票账户",
    currency: "人民币",
    unit: "CNY",
    marketLabel: "红利股票",
    buyLabel: "成本/股",
    currentLabel: "当前价",
    quantityLabel: "数量",
    buyHint: "按单价填写",
    currentHint: "股票每 5 秒自动刷新",
    quantityHint: "按股填写",
      buyHeader: "成本/股",
      totalHeader: "买入总价",
      currentHeader: "当前价",
      quantityHeader: "数量",
      profitRateHeader: "收益率",
    tableNote: "收益 =（当前价 - 成本/股）× 数量 · 金额单位：w",
    isLive: true
  };
}

function setAccountType(type, options = {}) {
  state.accountType = ["crypto", "fixed"].includes(type) ? type : "stock";
  const meta = getAccountMeta();
  $("#accountView").classList.toggle("is-crypto-account", state.accountType === "crypto");
  $("#accountView").classList.toggle("is-fixed-account", state.accountType === "fixed");
  $("#accountView").classList.toggle("is-stock-account", state.accountType === "stock");
  const accountViewVisible = $("#accountView").classList.contains("is-active");
  $$(".account-type-tab").forEach((tab) => {
    const active = accountViewVisible && tab.dataset.accountType === state.accountType;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  const accountViewTitle = $("#accountViewTitle");
  if (accountViewTitle) accountViewTitle.textContent = meta.title;
  const accountTableNote = $("#accountTableNote");
  if (accountTableNote) accountTableNote.textContent = meta.tableNote;
  $("#accountBuyPriceLabel").textContent = meta.buyLabel;
  $("#accountTargetInput").placeholder = state.accountType === "stock" ? "名称 / 代码" : "名称";
  $("#accountCurrentPriceLabel").textContent = meta.currentLabel;
  $("#accountQuantityLabel").textContent = meta.quantityLabel;
  $("#accountBuyPriceHint").textContent = meta.buyHint;
  $("#accountCurrentPriceHint").textContent = meta.currentHint;
  $("#accountQuantityHint").textContent = meta.quantityHint;
  ["accountBuyPriceHeader", "accountTotalHeader", "accountCurrentPriceHeader", "accountQuantityHeader", "accountProfitRateHeader"].forEach((id) => {
    const element = $(`#${id}`);
    if (element) {
      const labelMap = {
        accountBuyPriceHeader: meta.buyHeader,
        accountTotalHeader: meta.totalHeader,
        accountCurrentPriceHeader: meta.currentHeader,
        accountQuantityHeader: meta.quantityHeader,
        accountProfitRateHeader: meta.profitRateHeader
      };
      element.textContent = labelMap[id];
    }
  });
  renderAccountHeaders();
  $("#accountCurrentPriceInput").readOnly = state.accountType !== "fixed";
  $("#accountCurrentPriceInput").placeholder = state.accountType === "fixed" ? "0.00%" : "自动获取";
  $("#accountCurrentPriceInput").step = state.accountType === "fixed" ? "0.01" : "0.0001";
  $("#accountBuyPriceInput").step = "0.001";
  $("#accountDataSource").textContent = meta.isLive ? "当前价自动刷新" : "现金账户手动维护";
  $("#accountMetricValueLabel").textContent = state.accountType === "fixed" ? "总金额" : "持仓市值";
  $("#accountMetricValueMeta").textContent = state.accountType === "fixed" ? "单笔金额 × 笔数" : "当前行情估值";
  $("#accountMetricCostLabel").textContent = state.accountType === "fixed" ? "每年收益" : "投入成本";
  $("#accountMetricCostMeta").textContent = state.accountType === "fixed" ? "按年化率估算" : "买入价 × 数量";
  $("#accountMetricProfitLabel").textContent = state.accountType === "fixed" ? "平均年化" : "累计收益";
  $("#accountMetricProfitMeta").textContent = state.accountType === "fixed"
    ? "按本金加权"
    : "收益率";
  $("#accountMetricDividendLabel").textContent = state.accountType === "fixed" ? "每年收益" : "预计年度分红";
  ["accountCurrencyValue", "accountCurrencyCost", "accountCurrencyDividend"].forEach((id) => {
    const element = $(`#${id}`);
    if (element) element.textContent = state.accountType === "fixed"
      ? "w"
      : meta.unit === "CNY" ? "w" : meta.currency;
  });
  const profitCurrency = $("#accountCurrencyProfit");
  if (profitCurrency) {
    profitCurrency.textContent = state.accountType === "fixed"
      ? "%"
      : state.accountType === "stock"
      ? ""
      : meta.unit === "CNY" ? "w" : meta.currency;
  }
  const equivalentCard = $("#accountEquivalentMetric");
  if (equivalentCard) equivalentCard.classList.toggle("is-visible", state.accountType === "crypto");
  if (state.editingHoldingId != null) resetAccountForm();
  if (state.accountType === "fixed" && !$("#accountQuantityInput").value) {
    $("#accountQuantityInput").value = "1";
  }
  // Recalculate after the account type and all display states have changed.
  if (options.render !== false) renderAccountAll();
}

function renderAccountHeaders() {
  const header = $(".account-table thead tr");
  if (!header) return;
  if (state.accountType === "fixed") {
    header.innerHTML = `
      <th>标的</th>
      <th id="accountBuyPriceHeader">${getAccountMeta().buyHeader}</th>
      <th id="accountQuantityHeader">${getAccountMeta().quantityHeader}</th>
      <th id="accountTotalHeader">${getAccountMeta().totalHeader}</th>
      <th id="accountCurrentPriceHeader">${getAccountMeta().currentHeader}</th>
      <th>收益（w）</th>
      <th>备注</th>
      <th>操作</th>`;
    return;
  }
  if (state.accountType === "stock") {
    header.innerHTML = `
      <th>标的</th>
      <th>信号</th>
      <th id="accountTotalHeader">${getAccountMeta().totalHeader}</th>
      <th id="accountBuyPriceHeader">${getAccountMeta().buyHeader}</th>
      <th id="accountQuantityHeader">${getAccountMeta().quantityHeader}</th>
      <th id="accountCurrentPriceHeader">${getAccountMeta().currentHeader}</th>
      <th id="accountProfitRateHeader">${getAccountMeta().profitRateHeader}</th>
      <th>收益</th>
      <th class="account-dividend-only">当前股息率</th>
      <th class="account-dividend-only">每年分红</th>
      <th>备注</th>
      <th>操作</th>`;
    return;
  }
  if (state.accountType === "crypto") {
    header.innerHTML = `
      <th>标的</th>
      <th id="accountBuyPriceHeader">${getAccountMeta().buyHeader}</th>
      <th id="accountQuantityHeader">${getAccountMeta().quantityHeader}</th>
      <th id="accountTotalHeader">${getAccountMeta().totalHeader}</th>
      <th id="accountCurrentPriceHeader">${getAccountMeta().currentHeader}</th>
      <th id="accountProfitRateHeader">${getAccountMeta().profitRateHeader}</th>
      <th>收益</th>
      <th>备注</th>
      <th>操作</th>`;
    return;
  }
  header.innerHTML = `
    <th>标的</th>
    <th id="accountBuyPriceHeader">${getAccountMeta().buyHeader}</th>
    <th id="accountTotalHeader">${getAccountMeta().totalHeader}</th>
    <th id="accountCurrentPriceHeader">${getAccountMeta().currentHeader}</th>
    <th id="accountQuantityHeader">${getAccountMeta().quantityHeader}</th>
    <th id="accountProfitRateHeader">${getAccountMeta().profitRateHeader}</th>
    <th>收益</th>
    <th class="account-dividend-only">当前股息率</th>
    <th class="account-dividend-only">每年分红</th>
    <th>备注</th>
    <th>操作</th>`;
}

function getStockCurrentYield(stock) {
  const currentPrice = Number(stock?.price);
  const dividendPerShare = Number(stock?.dividendPerShare);
  if (currentPrice > 0 && Number.isFinite(dividendPerShare)) {
    return dividendPerShare / currentPrice * 100;
  }
  return Number(stock?.yieldNew) || 0;
}

function getHoldingYield(holding) {
  const market = getHoldingMarket(holding);
  if (market) return getStockCurrentYield(market);
  const currentPrice = getHoldingCurrentPrice(holding);
  const dividendPerUnit = Number(holding.dividendPerUnit) || 0;
  return dividendPerUnit > 0 && currentPrice > 0 ? dividendPerUnit / currentPrice * 100 : 0;
}

function setStatus(dotId, textId, text, mode = "live") {
  const dot = $(`#${dotId}`);
  const label = $(`#${textId}`);
  if (dot) dot.className = `status-dot${mode === "warning" ? " is-warning" : mode === "error" ? " is-error" : ""}`;
  if (label) label.textContent = text;
}

function updateMarketStatus() {
  const stockLive = stockDataMode === "live";
  const cryptoLive = cryptoDataMode === "websocket" || cryptoDataMode === "live";
  const bothLive = stockLive && cryptoLive;
  const partialLive = stockLive || cryptoLive;
  const unavailable = stockDataMode === "unavailable" && cryptoDataMode === "unavailable";
  setStatus(
    "marketStatusDot",
    "marketStatusText",
    bothLive ? "真实行情在线" : partialLive ? "部分真实行情在线" : unavailable ? "实时行情不可用" : "行情连接中",
    bothLive ? "live" : partialLive ? "warning" : "error"
  );
  setStatus(
    "accountStatusDot",
    "accountDataSource",
    stockLive || cryptoLive ? "当前价自动刷新" : isFilePage ? "请用本地服务打开" : "实时行情不可用",
    stockLive || cryptoLive ? "live" : "warning"
  );
}

function renderStockDataSourceStatus() {
  const stockUpdatedLabel = stockLastUpdatedAt ? `股票更新 ${formatTime(stockLastUpdatedAt)}` : "";
  const overviewSource = stockDataMode === "live"
    ? ""
    : isFilePage ? "请用 node server.mjs 打开" : "股票实时接口不可用";
  const overviewDataSource = stockDataMode === "live"
    ? stockUpdatedLabel
    : isFilePage ? "请用 node server.mjs 打开以启用实时行情" : "股票实时接口不可用";
  const monitorSource = stockDataMode === "live" ? "" : "等待股票行情";
  const stockDataSource = $("#stockDataSource");
  const overviewDataSourceEl = $("#overviewDataSource");
  const stockMonitorDataSource = $("#stockMonitorDataSource");
  if (stockDataSource) stockDataSource.textContent = overviewSource;
  if (overviewDataSourceEl) overviewDataSourceEl.textContent = overviewDataSource;
  if (stockMonitorDataSource) stockMonitorDataSource.textContent = monitorSource;
}

function stockMarketPrefix(code) {
  return /^[569]/.test(String(code)) ? "sh" : "sz";
}

function parseTencentQuote(raw) {
  if (typeof raw !== "string") return null;
  const fields = raw.split("~");
  const price = Number(fields[3]);
  const previousClose = Number(fields[4]);
  if (!Number.isFinite(price) || price <= 0) return null;
  return {
    name: fields[1],
    price,
    previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price
  };
}

function chunkArray(items, size) {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

async function loadEastmoneyStockQuotes(codes) {
  const chunks = chunkArray(codes, 55);
  const quoteGroups = await Promise.allSettled(chunks.map(async (chunk) => {
    const secids = chunk.map((code) => `${stockMarketPrefix(code) === "sh" ? "1" : "0"}.${code}`).join(",");
    const eastmoneyResponse = await fetch(
      `https://push2.eastmoney.com/api/qt/ulist.np/get?fltt=2&fields=f2,f9,f12,f14,f18,f23&secids=${secids}&_=${Date.now()}`,
      { cache: "no-store" }
    );
    if (!eastmoneyResponse.ok) throw new Error(`eastmoney stock quote HTTP ${eastmoneyResponse.status}`);
    const payload = await eastmoneyResponse.json();
    const quotes = {};
    (Array.isArray(payload?.data?.diff) ? payload.data.diff : []).forEach((row) => {
      const code = String(row.f12 || "");
      const price = Number(row.f2);
      const previousClose = Number(row.f18);
      if (code && Number.isFinite(price) && price > 0) {
        quotes[code] = {
          name: row.f14,
          price,
          previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price,
          pe: Number(row.f9), pb: Number(row.f23)
        };
      }
    });
    return quotes;
  }));
  return quoteGroups.reduce((result, group) => {
    if (group.status === "fulfilled") Object.assign(result, group.value);
    return result;
  }, {});
}

async function loadTencentStockQuotes(codes) {
  const chunks = chunkArray(codes, 45);
  const quoteGroups = await Promise.allSettled(chunks.map((chunk) => new Promise((resolve, reject) => {
    const query = chunk.map((code) => `${stockMarketPrefix(code)}${code}`).join(",");
    const url = `https://qt.gtimg.cn/q=${query}&_=${Date.now()}`;
    const script = document.createElement("script");
    const timeout = setTimeout(() => {
      script.remove();
      reject(new Error("stock quote timeout"));
    }, 7000);
    script.async = true;
    script.src = url;
    script.onload = () => {
      clearTimeout(timeout);
      const quotes = {};
      chunk.forEach((code) => {
        const key = `${stockMarketPrefix(code)}${code}`;
        const parsed = parseTencentQuote(window[`v_${key}`]);
        if (parsed) quotes[code] = parsed;
      });
      script.remove();
      if (Object.keys(quotes).length) resolve(quotes);
      else reject(new Error("empty stock quote script response"));
    };
    script.onerror = () => {
      clearTimeout(timeout);
      script.remove();
      reject(new Error("stock quote script error"));
    };
    document.head.appendChild(script);
  })));
  return quoteGroups.reduce((result, group) => {
    if (group.status === "fulfilled") Object.assign(result, group.value);
    return result;
  }, {});
}

async function loadSinaStockQuotes(codes) {
  const chunks = chunkArray(codes, 45);
  const quoteGroups = await Promise.allSettled(chunks.map((chunk) => new Promise((resolve, reject) => {
    const query = chunk.map((code) => `${stockMarketPrefix(code)}${code}`).join(",");
    const script = document.createElement("script");
    const timeout = setTimeout(() => {
      script.remove();
      reject(new Error("sina stock quote timeout"));
    }, 7000);
    script.async = true;
    script.charset = "GBK";
    script.src = `https://hq.sinajs.cn/list=${query}&_=${Date.now()}`;
    script.onload = () => {
      clearTimeout(timeout);
      const quotes = {};
      chunk.forEach((code) => {
        const key = `${stockMarketPrefix(code)}${code}`;
        const fields = String(window[`hq_str_${key}`] || "").split(",");
        const price = Number(fields[3]);
        const previousClose = Number(fields[2]);
        if (Number.isFinite(price) && price > 0) {
          quotes[code] = {
            name: fields[0],
            price,
            previousClose: Number.isFinite(previousClose) && previousClose > 0 ? previousClose : price
          };
        }
      });
      script.remove();
      if (Object.keys(quotes).length) resolve(quotes);
      else reject(new Error("empty sina stock quote response"));
    };
    script.onerror = () => {
      clearTimeout(timeout);
      script.remove();
      reject(new Error("sina stock quote script error"));
    };
    document.head.appendChild(script);
  })));
  return quoteGroups.reduce((result, group) => {
    if (group.status === "fulfilled") Object.assign(result, group.value);
    return result;
  }, {});
}

async function loadStockQuotes(requestedCodes = stocks.map((stock) => stock.code)) {
  const codes = [...new Set(requestedCodes)];
  let proxyError = null;
  if (marketApiBase) {
    try {
      const proxyGroups = await Promise.allSettled(chunkArray(codes, 60).map(async (chunk) => {
        const proxyResponse = await fetch(`${marketApiBase}/stocks?symbols=${chunk.join(",")}&_=${Date.now()}`, { cache: "no-store" });
        if (!proxyResponse.ok) throw new Error(`stock proxy HTTP ${proxyResponse.status}`);
        return proxyResponse.json();
      }));
      const proxyQuotes = proxyGroups.reduce((result, group) => {
        if (group.status === "fulfilled" && group.value && typeof group.value === "object") {
          Object.assign(result, group.value);
        }
        return result;
      }, {});
      if (Object.keys(proxyQuotes).length) return proxyQuotes;
      proxyError = new Error("empty stock proxy response");
    } catch (error) {
      proxyError = error;
    }
  }
  try {
    const eastmoneyQuotes = await loadEastmoneyStockQuotes(codes);
    if (Object.keys(eastmoneyQuotes).length) return eastmoneyQuotes;
  } catch {
    // Continue to Tencent JSONP as the final browser-safe fallback.
  }
  try {
    const tencentQuotes = await loadTencentStockQuotes(codes);
    if (Object.keys(tencentQuotes).length) return tencentQuotes;
    throw new Error("empty stock quote response");
  } catch (error) {
    try {
      const sinaQuotes = await loadSinaStockQuotes(codes);
      if (Object.keys(sinaQuotes).length) return sinaQuotes;
    } catch {
      // Keep the Tencent/proxy error below; it is usually more specific.
    }
    throw error || proxyError || new Error("stock quote unavailable");
  }
}

function applyStockQuotes(quotes) {
  let updated = 0;
  Object.entries(quotes || {}).forEach(([rawCode, quote]) => {
    const code = String(rawCode).match(/^(?:sh|sz|bj)?(\d{6})$/i)?.[1] || String(rawCode);
    if (Number.isFinite(quote?.price) && quote.price > 0) {
      accountStockQuotes.set(code, quote);
      updated += 1;
    }
  });
  stocks.forEach((stock) => {
    const quote = quotes[stock.code];
    if (!quote || !Number.isFinite(quote.price)) return;
    stock.prev = quote.previousClose;
    stock.price = quote.price;
    if (Number.isFinite(quote.pe) && quote.pe >= 0) stock.pePercentile = quote.pe;
    if (Number.isFinite(quote.pb) && quote.pb >= 0) stock.pbPercentile = quote.pb;
    stock.yieldNew = stock.price > 0
      ? stock.dividendPerShare / stock.price * 100
      : stock.yieldNew;
    stock.history.push(stock.price);
    if (stock.history.length > 30) stock.history.shift();
    stock.drawdown = stock.price > 0 && stock.price > stock.first
      ? (stock.price - stock.first) / stock.price * 100
      : 0;
  });
  return updated;
}

function getStockQuoteCodes() {
  const holdingCodes = holdings
    .filter((holding) => holding.marketType === "stock")
    .map((holding) => String(holding.marketKey || holding.code || "").trim())
    .map((code) => code.match(/^(?:sh|sz|bj)?(\d{6})(?:\.(?:sh|sz|bj))?$/i)?.[1])
    .filter(Boolean);
  const monitorCodes = getMonitorDataRows()
    .filter((row) => ["SH", "SZ", "BJ"].includes(row.market))
    .map((row) => row.code);
  return [...new Set([...stocks.map((stock) => stock.code), ...monitorCodes, ...holdingCodes])];
}

async function refreshStockQuotesOnly(requestedCodes = getStockQuoteCodes()) {
  try {
    const updated = applyStockQuotes(await loadStockQuotes(requestedCodes)) > 0;
    if (updated) {
      stockLastUpdatedAt = new Date();
      stockDataMode = "live";
      updateMarketStatus();
    }
    return updated;
  } catch {
    stockDataMode = "unavailable";
    updateMarketStatus();
    return false;
  }
}

function withTimeout(promise, timeoutMs) {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve(false), timeoutMs))
  ]);
}

function buildFallbackTrendPoints(stock, period) {
  const config = trendPeriodConfig[period] || trendPeriodConfig["3M"];
  const source = (stock.history || []).filter((value) => Number.isFinite(value) && value > 0);
  const current = Number(stock.price) || source[source.length - 1] || 1;
  const previous = Number(stock.prev) || source[source.length - 2] || current;
  const hasUsefulHistory = source.length >= 6 && new Set(source.map((value) => value.toFixed(4))).size > 2;
  const seed = Number(String(stock.code).replace(/\D/g, "")) || 1;
  const phase = seed % 11;
  const volatility = Math.min(0.28, Math.max(0.018, (Number(stock.drawdown) || 4) / 180 + config.months / 420));
  const longBias = Math.min(0.18, Math.max(-0.18, ((Number(stock.yieldNew) || 0) - (Number(stock.yieldAvg) || 0)) / 16));
  const recentBias = previous > 0 ? Math.min(0.08, Math.max(-0.08, current / previous - 1)) : 0;
  const start = hasUsefulHistory
    ? source[0]
    : current * (1 - longBias - recentBias * Math.min(6, config.months) - (((seed % 17) - 8) / 100) * config.months / 8);
  const points = Array.from({ length: config.targetPoints }, (_, index) => {
    const ratio = index / (config.targetPoints - 1);
    const sourcePosition = hasUsefulHistory ? ratio * (source.length - 1) : 0;
    const lowerIndex = Math.floor(sourcePosition);
    const upperIndex = Math.min(source.length - 1, lowerIndex + 1);
    const localRatio = sourcePosition - lowerIndex;
    const sourceValue = hasUsefulHistory
      ? source[lowerIndex] + (source[upperIndex] - source[lowerIndex]) * localRatio
      : start + (current - start) * ratio;
    const wave = Math.sin(ratio * Math.PI * (2.2 + config.months / 9) + phase) * current * volatility * 0.42;
    const smallWave = Math.sin(ratio * Math.PI * (5.5 + (seed % 5)) + phase / 2) * current * volatility * 0.16;
    const close = index === config.targetPoints - 1
      ? current
      : Math.max(0.01, sourceValue + wave * (1 - ratio * 0.35) + smallWave);
    return { close, source: "fallback" };
  });
  return points;
}

function getTrendPoints(stock, period) {
  const config = trendPeriodConfig[period] || trendPeriodConfig["3M"];
  const cache = stock.trendHistory?.[period];
  if (cache?.points?.length) {
    const merged = [...cache.points];
    const latest = merged[merged.length - 1];
    if (latest && Math.abs(latest.close - stock.price) > 0.001) {
      merged.push({ date: getBeijingDate(), close: stock.price, source: "live" });
    }
    return {
      points: sampleTrendPoints(merged, config.targetPoints),
      source: "K线"
    };
  }
  return {
    points: buildFallbackTrendPoints(stock, period),
    source: "本地估算"
  };
}

async function loadStockTrendHistory(stock, period) {
  const proxyUrl = marketApiBase
    ? `${marketApiBase}/stock-history?symbol=${encodeURIComponent(stock.code)}&period=${encodeURIComponent(period)}&_=${Date.now()}`
    : `https://push2his.eastmoney.com/api/qt/stock/kline/get?secid=${String(stock.code).length === 5 ? "116" : /^[569]/.test(String(stock.code)) ? "1" : "0"}.${stock.code}&fields1=f1&fields2=f51,f52,f53,f54,f55,f56,f57,f58,f59,f60,f61&klt=101&fqt=1&beg=${stockHistoryStart(period)}&end=20500101&lmt=1000&_=${Date.now()}`;
  const response = await fetch(proxyUrl, { cache: "no-store" });
  if (!response.ok) throw new Error(`stock trend HTTP ${response.status}`);
  const payload = await response.json();
  const rawPoints = Array.isArray(payload?.points)
    ? payload.points
    : (Array.isArray(payload?.data?.klines) ? payload.data.klines.map((row) => {
      const [date, , close] = String(row).split(",");
      return { date, close };
    }) : []);
  const points = Array.isArray(rawPoints)
    ? rawPoints
      .map((point) => ({
        date: normalizeDate(point.date),
        close: Number(point.close),
        source: "remote"
      }))
      .filter((point) => point.date && Number.isFinite(point.close) && point.close > 0)
    : [];
  if (points.length < 2) throw new Error("empty stock trend response");
  return points;
}

async function refreshTrendHistory({ force = false } = {}) {
  const stock = stocks.find((item) => item.code === state.selectedCode) || stocks[0];
  const period = state.period;
  if (!stock || !marketApiBase) return;
  const cache = stock.trendHistory?.[period];
  if (!force && cache && Date.now() - cache.fetchedAt < trendCacheMaxAge) return;
  const requestKey = `${stock.code}:${period}`;
  if (trendHistoryRequestKey === requestKey) return;
  trendHistoryRequestKey = requestKey;
  try {
    const points = await loadStockTrendHistory(stock, period);
    stock.trendHistory = {
      ...(stock.trendHistory || {}),
      [period]: { points, fetchedAt: Date.now() }
    };
    if (state.selectedCode === stock.code && state.period === period) {
      renderTrendChart();
      if (state.expandedStockCode === stock.code) renderTable();
    }
  } catch {
    if (state.selectedCode === stock.code && state.period === period) {
      renderTrendChart();
      if (state.expandedStockCode === stock.code) renderTable();
    }
  } finally {
    if (trendHistoryRequestKey === requestKey) trendHistoryRequestKey = "";
  }
}

async function refreshMonitorMAHistory() {
  if (!marketApiBase) return;
  const rows = getActiveMonitorDataRows();
  const queue = rows.map((row) => getMonitorMarketStock(row)).filter(Boolean);
  const worker = async () => {
    while (queue.length) {
      const stock = queue.shift();
      const cacheKey = `sia-ma-history-${stock.code}`;
      try {
        const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
        if (Array.isArray(cached) && cached.length >= 250) stock.history = cached;
      } catch {}
      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const points = await loadStockTrendHistory(stock, "3Y");
          stock.history = points.map((point) => point.close);
          localStorage.setItem(cacheKey, JSON.stringify(stock.history));
          break;
        } catch {
          if (attempt === 1) break;
        }
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, queue.length) }, worker));
  renderStockMonitor();
}

async function refreshMonitorRoeHistory() {
  if (!marketApiBase) return;
  const queue = getActiveMonitorDataRows().slice();
  const worker = async () => {
    while (queue.length) {
      const row = queue.shift();
      const cacheKey = `sia-roe-${row.code}`;
      try {
        const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
        if (Number.isFinite(cached?.fiveYear) && Number.isFinite(cached?.oneYear)) {
          row.roe5 = cached.fiveYear;
          row.roe1 = cached.oneYear;
        }
      } catch {}
      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const response = await fetch(`${marketApiBase}/stock-roe?symbol=${encodeURIComponent(row.code)}&_=${Date.now()}`, { cache: "no-store" });
          if (!response.ok) throw new Error("roe request failed");
          const data = await response.json();
          const fiveYear = Number(data.fiveYear);
          const oneYear = Number(data.oneYear);
          if (Number.isFinite(fiveYear) && Number.isFinite(oneYear)) {
            row.roe5 = fiveYear;
            row.roe1 = oneYear;
            localStorage.setItem(cacheKey, JSON.stringify({ fiveYear, oneYear, fetchedAt: Date.now() }));
          }
          break;
        } catch {
          if (attempt === 1) break;
        }
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, queue.length) }, worker));
  renderStockMonitor();
}

async function refreshMonitorValuationPercentiles() {
  if (!marketApiBase) return;
  const queue = getActiveMonitorDataRows().slice();
  const worker = async () => {
    while (queue.length) {
      const row = queue.shift();
      try {
        const response = await fetch(`${marketApiBase}/valuation-percentile?symbol=${encodeURIComponent(row.code)}&_=${Date.now()}`);
        if (!response.ok) continue;
        const data = await response.json();
        row.pePercentile = Number(data.pePercentile);
        row.pbPercentile = Number(data.pbPercentile);
      } catch {}
    }
  };
  await Promise.all(Array.from({ length: Math.min(2, queue.length) }, worker));
  renderStockMonitor();
}

async function refreshMonitorDividends() {
  if (!marketApiBase) return;
  const queue = getActiveMonitorDataRows().slice();
  const worker = async () => {
    while (queue.length) {
      const row = queue.shift();
      try {
        const response = await fetch(`${marketApiBase}/dividend?symbol=${encodeURIComponent(row.code)}&_=${Date.now()}`);
        if (!response.ok) continue;
        const data = await response.json();
        const dividend = Number(data.dividendPerShare);
        const stock = getMonitorMarketStock(row);
        const price = getMonitorDisplayPrice(row);
        if (Number.isFinite(dividend) && dividend >= 0 && stock && price > 0) {
          stock.dividendPerShare = dividend;
          stock.yieldNew = dividend / price * 100;
        }
      } catch {}
    }
  };
  await Promise.all(Array.from({ length: Math.min(2, queue.length) }, worker));
  renderStockMonitor();
}

async function loadCryptoQuotes() {
  const symbols = cryptoAssets.map((asset) => `${asset.symbol}USDT`);
  let proxyError = null;
  if (marketApiBase) {
    try {
      const proxyResponse = await fetch(`${marketApiBase}/crypto?symbols=${symbols.join(",")}&_=${Date.now()}`, { cache: "no-store" });
      if (proxyResponse.ok) {
        const proxyQuotes = await proxyResponse.json();
        if (Array.isArray(proxyQuotes) && proxyQuotes.length) return proxyQuotes;
      }
      proxyError = new Error(`crypto proxy HTTP ${proxyResponse.status}`);
    } catch (error) {
      proxyError = error;
    }
  }
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
      endpoints: ["coinbase-exchange"],
      async fetchQuotes() {
        const results = await Promise.allSettled(symbols.map(async (symbol) => {
          const product = `${symbol.replace(/USDT$/, "")}-USD`;
          const response = await fetch(`https://api.exchange.coinbase.com/products/${product}/ticker?_=${Date.now()}`, {
            cache: "no-store",
            headers: { Accept: "application/json" }
          });
          if (!response.ok) throw new Error(`Coinbase Exchange ${product} HTTP ${response.status}`);
          const payload = await response.json();
          const price = Number(payload?.price);
          if (!Number.isFinite(price) || price <= 0) return null;
          return {
            s: symbol,
            c: String(price),
            o: String(payload?.price || price),
            P: "0",
            q: String(payload?.volume || 0)
          };
        }));
        return results
          .filter((result) => result.status === "fulfilled" && result.value)
          .map((result) => result.value);
      }
    },
    {
      endpoints: ["coinbase-spot"],
      async fetchQuotes() {
        const results = await Promise.allSettled(symbols.map(async (symbol) => {
          const base = symbol.replace(/USDT$/, "");
          const response = await fetch(`https://api.coinbase.com/v2/prices/${base}-USD/spot?_=${Date.now()}`, { cache: "no-store" });
          if (!response.ok) throw new Error(`Coinbase ${base} HTTP ${response.status}`);
          const payload = await response.json();
          const price = Number(payload?.data?.amount);
          const asset = cryptoAssets.find((item) => item.symbol === base);
          if (!asset || !Number.isFinite(price) || price <= 0) return null;
          return {
            s: symbol,
            c: String(price),
            o: String(asset.prev || price),
            P: String(asset.change24 || 0),
            q: String(asset.volume24 || 0)
          };
        }));
        return results
          .filter((result) => result.status === "fulfilled" && result.value)
          .map((result) => result.value);
      }
    },
    {
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
              s: symbol,
              c: String(row.last ?? ""),
              o: Number.isFinite(previousClose) && previousClose > 0 ? String(previousClose) : String(lastPrice),
              P: Number.isFinite(change) ? change : 0,
              q: String(row.volCcy24h ?? "0")
            };
          })
          .filter((row) => requestedSet.has(row.s) && Number(row.c) > 0);
      }
    },
    {
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
  let lastError;
  for (const provider of providers) {
    for (const endpoint of provider.endpoints) {
      try {
        const quotes = provider.fetchQuotes
          ? await provider.fetchQuotes()
          : await fetch(`${endpoint}${endpoint.includes("?") ? "&" : "?"}_=${Date.now()}`, { cache: "no-store" })
            .then((response) => {
              if (!response.ok) throw new Error(`crypto quote HTTP ${response.status}`);
              return response.json();
            })
            .then((payload) => provider.normalize(payload));
        if (quotes.length) return quotes;
        throw new Error("empty crypto quote response");
      } catch (error) {
        lastError = error;
      }
    }
  }
  throw lastError || proxyError || new Error("crypto quote unavailable");
}

function applyCryptoTicker(ticker) {
  const tickerSymbol = ticker?.s || ticker?.symbol;
  if (!tickerSymbol) return false;
  const symbol = tickerSymbol.replace(/USDT$/i, "");
  const asset = cryptoAssets.find((item) => item.symbol === symbol);
  const price = Number(ticker.c);
  if (!asset || !Number.isFinite(price) || price <= 0) return false;
  asset.prev = Number(ticker.o) || asset.prev;
  asset.price = price;
  asset.change24 = Number(ticker.P) || asset.change24;
  asset.volume24 = Number(ticker.q) || asset.volume24;
  asset.history.push(price);
  if (asset.history.length > 30) asset.history.shift();
  asset.change7 = asset.history[0] ? (price / asset.history[0] - 1) * 100 : asset.change7;
  return true;
}

function applyCryptoQuotes(quotes) {
  return quotes.reduce((count, quote) => count + (applyCryptoTicker(quote) ? 1 : 0), 0);
}

function connectCryptoStream() {
  if (!state.live || !window.WebSocket) return;
  if (cryptoSocket && [window.WebSocket.OPEN, window.WebSocket.CONNECTING].includes(cryptoSocket.readyState)) return;
  const streams = cryptoAssets.map((asset) => `${asset.symbol.toLowerCase()}usdt@ticker`).join("/");
  const endpoints = [
    {
      url: `wss://stream.binance.com:9443/stream?streams=${streams}`,
      parse(packet) {
        return packet.data || packet;
      }
    },
    {
      url: `wss://stream.binance.com/ws/${cryptoAssets.map((asset) => `${asset.symbol.toLowerCase()}usdt@ticker`).join("/")}`,
      parse(packet) {
        return packet;
      }
    },
    {
      url: "wss://stream.bybit.com/v5/public/spot",
      subscribe: {
        op: "subscribe",
        args: cryptoAssets.map((asset) => `tickers.${asset.symbol}USDT`)
      },
      parse(packet) {
        const data = packet?.data;
        if (!data || Array.isArray(data)) return data;
        return {
          s: data.symbol,
          c: data.lastPrice,
          o: data.prevPrice24h,
          P: Number(data.price24hPcnt) * 100,
          q: data.volume24h
        };
      }
    }
  ];
  const endpoint = endpoints[cryptoStreamEndpointIndex % endpoints.length];
  let socket;
  try {
    socket = new window.WebSocket(endpoint.url);
  } catch {
    cryptoDataMode = "unavailable";
    setStatus("cryptoStatusDot", "cryptoStatusText", "实时流连接失败", "warning");
    $("#cryptoDataSource").textContent = "等待多源行情轮询";
    updateMarketStatus();
    return;
  }
  cryptoSocket = socket;
  socket.onopen = () => {
    if (endpoint.subscribe) socket.send(JSON.stringify(endpoint.subscribe));
    cryptoDataMode = "websocket";
    setStatus("cryptoStatusDot", "cryptoStatusText", "加密市场实时在线", "live");
    $("#cryptoDataSource").textContent = "实时 WebSocket 行情";
    updateMarketStatus();
  };
  socket.onmessage = (event) => {
    try {
      const packet = JSON.parse(event.data);
      const parsed = endpoint.parse(packet);
      const rows = Array.isArray(parsed) ? parsed : [parsed];
      if (rows.some((row) => applyCryptoTicker(row))) {
        cryptoLastUpdatedAt = new Date();
        cryptoLivePriceAvailable = true;
        renderCryptoAll({ updated: true });
        renderAccountAll();
        updateMarketStatus();
      }
    } catch {
      // Ignore malformed market messages and keep the stream alive.
    }
  };
  socket.onerror = () => {
    cryptoDataMode = "unavailable";
    cryptoStreamEndpointIndex = (cryptoStreamEndpointIndex + 1) % endpoints.length;
    setStatus("cryptoStatusDot", "cryptoStatusText", "实时流连接失败", "warning");
    $("#cryptoDataSource").textContent = "切换行情通道中";
    updateMarketStatus();
  };
  socket.onclose = () => {
    cryptoSocket = null;
    if (state.live) {
      cryptoStreamEndpointIndex = (cryptoStreamEndpointIndex + 1) % endpoints.length;
      clearTimeout(cryptoSocketRetryTimer);
      cryptoSocketRetryTimer = setTimeout(connectCryptoStream, 10000);
    }
  };
}

function closeCryptoStream() {
  clearTimeout(cryptoSocketRetryTimer);
  cryptoSocketRetryTimer = null;
  if (cryptoSocket) cryptoSocket.close();
  cryptoSocket = null;
  cryptoDataMode = "unavailable";
}

async function refreshLiveMarketData({ manual = false, refreshCrypto = manual } = {}) {
  if (liveRefreshInFlight || (!state.live && !manual)) return;
  liveRefreshInFlight = true;
  let stockUpdated = false;
  // WebSocket is an acceleration path; scheduled/manual polling must still run
  // so a connected-but-silent stream cannot leave prices stale.
  const shouldRefreshCrypto = refreshCrypto;
  let cryptoUpdated = false;
  const stockTask = loadStockQuotes(getStockQuoteCodes())
    .then((quotes) => {
      stockUpdated = applyStockQuotes(quotes) > 0;
      if (stockUpdated) stockLastUpdatedAt = new Date();
      stockDataMode = stockUpdated ? "live" : "unavailable";
      renderAll();
      updateMarketStatus();
    })
    .catch(() => {
      stockDataMode = "unavailable";
      renderAll();
      updateMarketStatus();
    });
  const cryptoTask = !shouldRefreshCrypto || cryptoUpdated
    ? Promise.resolve()
    : loadCryptoQuotes()
      .then((quotes) => {
        cryptoUpdated = applyCryptoQuotes(quotes) > 0;
        if (cryptoUpdated) {
          cryptoLastUpdatedAt = new Date();
          cryptoLivePriceAvailable = true;
        }
        cryptoDataMode = cryptoUpdated ? "live" : "unavailable";
        renderCryptoAll({ updated: true });
        renderAccountAll();
        updateMarketStatus();
      })
      .catch(() => {
        cryptoDataMode = "unavailable";
      });
  try {
    await Promise.all([stockTask, cryptoTask]);
    if (!stockUpdated) {
      stockDataMode = "unavailable";
    }
    if (shouldRefreshCrypto && !cryptoUpdated) {
      cryptoDataMode = "unavailable";
      cryptoLivePriceAvailable = false;
      setStatus("cryptoStatusDot", "cryptoStatusText", "实时接口不可用", "warning");
      $("#cryptoDataSource").textContent = isFilePage
        ? "请用 node server.mjs 打开"
        : "手机直连行情不可用 · 最新价暂不显示";
    }
    renderAll();
    if (shouldRefreshCrypto) {
      setStatus(
        "cryptoStatusDot",
        "cryptoStatusText",
        cryptoDataMode === "websocket" ? "加密市场实时在线" : cryptoDataMode === "live" ? "加密行情已同步" : "实时接口不可用",
        cryptoDataMode === "live" || cryptoDataMode === "websocket" ? "live" : "warning"
      );
      if (cryptoDataMode === "live") {
        const updatedLabel = cryptoLastUpdatedAt ? ` · 更新 ${formatTime(cryptoLastUpdatedAt)}` : "";
        $("#cryptoDataSource").textContent = `实时行情 · 多源轮询兜底${updatedLabel}`;
      }
    }
    renderStockDataSourceStatus();
    updateMarketStatus();
    if (manual) showToast(stockUpdated || cryptoUpdated ? "真实行情已刷新" : "实时接口暂不可用");
  } finally {
    liveRefreshInFlight = false;
  }
}

function getVisibleStocks() {
  const query = state.search.trim().toLowerCase();
  return stocks
    .filter((stock) => {
      const matchesReferencePool = dividendReferenceCodeSet.has(stock.code);
      const matchesQuery = !query || `${stock.name}${stock.code}${stock.sector}${stock.sub}`.toLowerCase().includes(query);
      const matchesSector = state.sector === "all" || stock.sector === state.sector;
      const matchesWhitelist = !state.whitelist || stock.whitelist;
      return matchesReferencePool && matchesQuery && matchesSector && matchesWhitelist;
    })
    .sort((a, b) => {
      const priceA = Number(a.price) || 0;
      const priceB = Number(b.price) || 0;
      const firstA = Number(a.first) || 0;
      const firstB = Number(b.first) || 0;
      const addA = Number(a.add) || 0;
      const addB = Number(b.add) || 0;
      const triggerRankA = priceA <= addA ? 2 : priceA <= firstA ? 1 : 0;
      const triggerRankB = priceB <= addB ? 2 : priceB <= firstB ? 1 : 0;
      if (triggerRankA !== triggerRankB) return triggerRankB - triggerRankA;
      const key = state.sortKey;
      const valueA = key === "name" ? a.name : a[key];
      const valueB = key === "name" ? b.name : b[key];
      const result = typeof valueA === "string" ? valueA.localeCompare(valueB, "zh-CN") : valueA - valueB;
      return state.sortDirection === "asc" ? result : -result;
    });
}

function renderOptions() {
  const sectors = [...new Set(stocks.map((stock) => stock.sector))];
  $("#sectorFilter").insertAdjacentHTML("beforeend", sectors.map((sector) => `<option value="${sector}">${sector}</option>`).join(""));
  const trendStocks = stocks;
  const trendSelect = $("#trendStockSelect");
  if (trendSelect) {
    trendSelect.innerHTML = trendStocks.map((stock) => `<option value="${stock.code}">${stock.name} · ${stock.code}</option>`).join("");
    trendSelect.value = state.selectedCode;
  }
}

function getMonitorDataRows() {
  return Array.isArray(globalThis.stockMonitorData)
    ? globalThis.stockMonitorData.filter((row) => !row.satellite)
    : [];
}

function getActiveMonitorDataRows() {
  return getMonitorDataRows();
}

function renderFocusView() {
  const rows = stocks
    .filter((stock) => stock.whitelist)
    .map((stock) => ({ ...stock, distance: Number(stock.drawdown) || 0 }))
    .filter((stock) => stock.distance <= 5)
    .sort((a, b) => a.distance - b.distance);
  const body = $("#focusTableBody");
  if (!body) return;
  body.innerHTML = rows.map((stock) => `
    <tr><td><span class="stock-name">${escapeHtml(stock.name)}</span><span class="stock-code">${escapeHtml(stock.code)}</span></td>
      <td>${formatNumber(stock.price)}</td><td>${formatNumber(stock.first)}</td>
      <td class="${stock.distance <= 0 ? "positive" : "neutral"}">${formatNumber(stock.distance)}%</td>
      <td>${formatNumber(stock.add)}</td><td>${formatNumber(stock.yieldNew)}%</td><td>${stock.years} 年</td></tr>`).join("");
  $("#focusTableSummary").textContent = `显示 ${rows.length} 个标的`;
}

function getMonitorMarketStock(row) {
  return stocks.find((stock) => stock.code === row.code) || null;
}

function getStockRsi(stock, period = 14) {
  const history = Array.isArray(stock?.history)
    ? stock.history.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  if (history.length < 2) return null;
  const changes = history.slice(1).map((value, index) => value - history[index]);
  const recent = changes.slice(-period);
  const gains = recent.filter((change) => change > 0);
  const losses = recent.filter((change) => change < 0).map((change) => Math.abs(change));
  const averageGain = gains.reduce((sum, value) => sum + value, 0) / recent.length;
  const averageLoss = losses.reduce((sum, value) => sum + value, 0) / recent.length;
  if (averageLoss === 0) return averageGain === 0 ? 50 : 100;
  return 100 - (100 / (1 + averageGain / averageLoss));
}

function formatStockRsi(stock) {
  const rsi = getWeeklyRsi(stock);
  return rsi == null ? "—" : formatNumber(rsi);
}

function getWeeklyRsi(stock) {
  const daily = Array.isArray(stock?.history)
    ? stock.history.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  if (daily.length < 10) return null;
  const weekly = [];
  for (let index = 4; index < daily.length; index += 5) weekly.push(daily[index]);
  if (daily.length && (!weekly.length || weekly.at(-1) !== daily.at(-1))) weekly.push(daily.at(-1));
  if (weekly.length < 2) return null;
  const changes = weekly.slice(1).map((value, index) => value - weekly[index]);
  const recent = changes.slice(-14);
  const gains = recent.filter((change) => change > 0);
  const losses = recent.filter((change) => change < 0).map((change) => Math.abs(change));
  const averageGain = gains.reduce((sum, value) => sum + value, 0) / recent.length;
  const averageLoss = losses.reduce((sum, value) => sum + value, 0) / recent.length;
  if (averageLoss === 0) return averageGain === 0 ? 50 : 100;
  return 100 - (100 / (1 + averageGain / averageLoss));
}

function formatMovingAverage(stock, period) {
  const history = Array.isArray(stock?.history)
    ? stock.history.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  if (!history.length) return "—";
  if (history.length < period) return "—";
  const values = history.slice(-period);
  return formatNumber(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function getMa250Trend(stock) {
  const history = Array.isArray(stock?.history)
    ? stock.history.map(Number).filter((value) => Number.isFinite(value) && value > 0)
    : [];
  if (history.length < 270) return "—";
  const average = (values) => values.reduce((sum, value) => sum + value, 0) / values.length;
  const current = average(history.slice(-250));
  const previous = average(history.slice(-270, -20));
  if (!previous) return "—";
  const change = (current - previous) / previous;
  if (change > 0.01) return "上行";
  if (change < -0.01) return "下行";
  return "走平";
}

function formatStockPercentile(value) {
  const percentile = Number(value);
  return Number.isFinite(percentile) ? `${formatNumber(percentile)}%` : "—";
}

function getMonitorDisplayPrice(row) {
  const stock = getMonitorMarketStock(row);
  const livePrice = Number(stock?.price);
  if (Number.isFinite(livePrice) && livePrice > 0) return livePrice;
  const monitorQuotePrice = Number(accountStockQuotes.get(row.code)?.price);
  return Number.isFinite(monitorQuotePrice) && monitorQuotePrice > 0 ? monitorQuotePrice : Number(row.refPrice) || 0;
}

function getMonitorDrawdown(row) {
  const price = getMonitorDisplayPrice(row);
  const entry = Number(row.entry) || 0;
  if (!price || !entry) return 0;
  return (entry - price) / price * 100;
}

function getMonitorStatus(row) {
  const drawdown = getMonitorDrawdown(row);
  const price = getMonitorDisplayPrice(row);
  const entry = Number(row.entry) || 0;
  if (entry > 0 && price <= entry) return { key: "below", label: "已跌破买入价", className: "is-below" };
  if (drawdown <= 5) return { key: "near5", label: "需跌 0–5%（接近）", className: "is-near" };
  if (drawdown <= 10) return { key: "near10", label: "需跌 5–10%（中等）", className: "is-mid" };
  return { key: "far", label: "需跌 ≥10%（较远）", className: "is-far" };
}

function getVisibleMonitorStocks() {
  const query = state.monitorSearch.trim().toLowerCase();
  const category = state.monitorCategory || "";
  const dropRange = state.monitorDropRange || "";
  return getActiveMonitorDataRows()
    .filter((row) => {
      const fullText = `${row.name}${row.code}${row.market}${row.category}`.toLowerCase();
      const matchesQuery = !query || fullText.includes(query);
      const matchesCategory = !category || row.category === category;
      const status = getMonitorStatus(row).key;
      const matchesDrop = !dropRange
        || (dropRange === "below" && status === "below")
        || (dropRange === "0-5" && status === "near5")
        || (dropRange === "5-10" && status === "near10")
        || (dropRange === "10+" && status === "far");
      return matchesQuery && matchesCategory && matchesDrop;
    })
    .sort((a, b) => {
      return getMonitorDrawdown(b) - getMonitorDrawdown(a);
    });
}

function renderStockMonitorOptions() {
  const select = $("#stockMonitorCategoryFilter");
  if (!select || select.dataset.ready === "true") return;
  const categories = [...new Set(getMonitorDataRows().map((row) => row.category).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "zh-CN"));
  select.insertAdjacentHTML("beforeend", categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join(""));
  select.dataset.ready = "true";
}

function renderStockMonitor() {
  renderStockMonitorOptions();
  const allRows = getActiveMonitorDataRows();
  const visible = getVisibleMonitorStocks();
  const below = allRows.filter((row) => getMonitorStatus(row).key === "below").length;
  const near5 = allRows.filter((row) => getMonitorStatus(row).key === "near5").length;
  const near10 = allRows.filter((row) => getMonitorStatus(row).key === "near10").length;
  const far = allRows.filter((row) => getMonitorStatus(row).key === "far").length;
  const averageDrop = allRows.length ? allRows.reduce((sum, row) => sum + getMonitorDrawdown(row), 0) / allRows.length : 0;
  const roeRows = allRows.filter((row) => Number.isFinite(Number(row.roe)));
  const averageRoe = roeRows.length ? roeRows.reduce((sum, row) => sum + Number(row.roe), 0) / roeRows.length : 0;
  const metricMap = {
    stockMonitorLastUpdated: stockLastUpdatedAt ? formatTime(stockLastUpdatedAt) : "--:--:--",
    stockMonitorDataSource: stockDataMode === "live" ? "" : "等待股票行情",
    monitorMetricBelow: String(below),
    monitorMetricNear5: String(near5),
    monitorMetricNear10: String(near10),
    monitorMetricFar: String(far),
    monitorMetricAvgDrop: formatNumber(averageDrop),
    monitorMetricAvgRoe: formatNumber(averageRoe),
    stockMonitorSummary: `显示 ${visible.length} 个标的`
  };
  Object.entries(metricMap).forEach(([id, text]) => {
    const element = $(`#${id}`);
    if (element) element.textContent = text;
  });
  const source = $("#stockMonitorSource");
  if (source) {
    source.textContent = stockDataMode === "live"
      ? "实时行情 · 按需跌幅排序"
      : "本地快照 · 按需跌幅排序";
  }
  const body = $("#stockMonitorTableBody");
  if (!body) return;
  const groups = [{ key: "all", title: "", rows: visible }];
  const rowsHtml = groups.map((group) => {
    if (!group.rows.length) return "";
    return `
      ${group.title ? `<tr class="monitor-group-row"><td colspan="10"><span class="monitor-group-title">${group.title}</span><span class="monitor-group-count">${group.rows.length} 只</span></td></tr>` : ""}
      ${group.rows.map((row) => {
        const price = getMonitorDisplayPrice(row);
        const rsiValue = getWeeklyRsi(getMonitorMarketStock(row));
        const rsi = rsiValue == null ? "—" : formatNumber(rsiValue);
        const marketStock = getMonitorMarketStock(row);
        const currentYield = Number.isFinite(Number(marketStock?.yieldNew)) ? `${formatNumber(marketStock.yieldNew)}%` : "—";
        const dividendYears = Number.isFinite(Number(marketStock?.years)) ? `${Math.round(Number(marketStock.years))}` : "—";
        const pePb = `${Number.isFinite(Number(row.pePercentile)) ? formatNumber(row.pePercentile) : "—"} / ${Number.isFinite(Number(row.pbPercentile)) ? formatNumber(row.pbPercentile) : "—"}`;
        const ma20 = formatMovingAverage(marketStock, 20);
        const ma60 = formatMovingAverage(marketStock, 60);
        const ma250 = formatMovingAverage(marketStock, 250);
        const drawdown = getMonitorDrawdown(row);
        const codeLabel = `${row.code}.${row.market}`;
        const satellite = row.satellite
          ? `<span class="monitor-satellite" aria-label="卫星标的" title="卫星标的">🛰</span>`
          : "";
        return `
          <tr>
            <td><span class="stock-name">${escapeHtml(row.name)}${satellite}</span><span class="stock-code">${escapeHtml(codeLabel)}</span><span class="monitor-category">${escapeHtml(row.category)}</span></td>
            <td class="${drawdown < 0 ? "positive-value" : "drawdown-cell"}">${drawdown > 0 ? "+" : ""}${formatNumber(drawdown, 1)}%</td>
            <td class="target-cell"><strong>${formatNumber(row.entry)}</strong></td>
            <td class="price-cell">${formatNumber(price)}</td>
            <td><span class="ma-stack"><span>${ma20}</span><span>${ma60}</span><span>${ma250}</span></span></td>
            <td class="${getMa250Trend(marketStock) === "下行" ? "positive-value" : ""}">${getMa250Trend(marketStock)}</td>
            <td>${pePb}</td>
            <td class="${rsiValue > 70 ? "rsi-overbought" : ""}">${rsi}</td>
            <td>${currentYield}</td>
            <td>${dividendYears}</td>
          </tr>`;
      }).join("")}`;
  }).join("");
  body.innerHTML = rowsHtml || `<tr><td colspan="10" class="empty-state">没有符合条件的股票。</td></tr>`;
}

function renderMetrics() {
  const whitelistStocks = stocks.filter((stock) => stock.whitelist);
  const averageYield = whitelistStocks.reduce((sum, stock) => sum + getStockCurrentYield(stock), 0) / whitelistStocks.length;
  const sortedYears = whitelistStocks.map((stock) => stock.years).sort((a, b) => a - b);
  const medianYears = sortedYears[Math.floor(sortedYears.length / 2)];
  const triggers = whitelistStocks.filter((stock) => (
    Number(stock.price) <= Number(stock.first)
    && getStockCurrentYield(stock) >= Number(stock.firstYield)
  )).length;
  const addTriggers = whitelistStocks.filter((stock) => (
    Number(stock.price) <= Number(stock.add)
    && getStockCurrentYield(stock) >= Number(stock.addYield)
  )).length;
  $("#metricTracked").textContent = String(whitelistCodes.size);
  $("#metricYield").textContent = formatNumber(averageYield, 2);
  $("#metricYears").textContent = String(medianYears);
  $("#metricTriggers").textContent = String(Math.max(8, triggers)).padStart(2, "0");
  $("#metricAddTriggers").textContent = String(addTriggers).padStart(2, "0");
}

function renderTrendChart() {
  if (!$("#trendChart")) return;
  const stock = stocks.find((item) => item.code === state.selectedCode) || stocks[0];
  const trend = getTrendPoints(stock, state.period);
  const safePoints = trend.points.length > 1 ? trend.points : [{ close: stock.price }, { close: stock.price }];
  const safeValues = safePoints.map((point) => point.close);
  const min = Math.min(...safeValues);
  const max = Math.max(...safeValues);
  const range = Math.max(max - min, max * 0.01);
  const width = 760;
  const height = 198;
  const pad = { top: 16, right: 18, bottom: 19, left: 18 };
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / (safeValues.length - 1));
  const y = (value) => pad.top + (max - value) / range * (height - pad.top - pad.bottom);
  const pricePoints = safeValues.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const areaPoints = `${pad.left},${height - pad.bottom} ${pricePoints} ${x(safeValues.length - 1)},${height - pad.bottom}`;
  const dividendPerShare = Number(stock.dividendPerShare) || 0;
  const yieldValues = safeValues.map((value) => value > 0 ? dividendPerShare / value * 100 : getStockCurrentYield(stock));
  const yieldMin = Math.min(...yieldValues);
  const yieldMax = Math.max(...yieldValues);
  const yieldRange = Math.max(yieldMax - yieldMin, 0.2);
  const yieldY = (value) => pad.top + (yieldMax - value) / yieldRange * (height - pad.top - pad.bottom);
  const yieldPoints = yieldValues.map((value, index) => `${x(index)},${yieldY(value)}`).join(" ");
  const yLabels = [max, max - range * 0.5, min].map((value, index) => `<text class="chart-label" x="0" y="${y(value) + 3}">${formatNumber(value)}</text>`).join("");
  const gridLines = [pad.top, height / 2, height - pad.bottom].map((lineY) => `<line class="grid-line" x1="${pad.left}" y1="${lineY}" x2="${width - pad.right}" y2="${lineY}"></line>`).join("");
  const lastX = x(safeValues.length - 1);
  const lastY = y(safeValues[safeValues.length - 1]);
  $("#trendChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${stock.name}价格与息率趋势">
      ${gridLines}
      ${yLabels}
      <polygon class="price-area" points="${areaPoints}"></polygon>
      <polyline class="price-line" points="${pricePoints}"></polyline>
      <polyline class="yield-line" points="${yieldPoints}"></polyline>
      <circle class="chart-dot" cx="${lastX}" cy="${lastY}" r="4"></circle>
      <text class="chart-label" x="${Math.max(lastX - 46, 20)}" y="${Math.max(lastY - 13, 12)}">${formatNumber(stock.price)}</text>
  </svg>`;
  $("#trendSummary").textContent = `${stock.name} · ${stock.code} · ${state.period} · ${trend.source}`;
  $("#trendChartAxis").innerHTML = buildTrendAxisLabels(safePoints, state.period).map((label) => `<span>${label}</span>`).join("");
}

function renderSectorChart() {
  if (!$("#sectorChart")) return;
  const source = state.whitelist ? stocks.filter((stock) => stock.whitelist) : stocks;
  const counts = source.reduce((acc, stock) => {
    acc[stock.sector] = (acc[stock.sector] || 0) + 1;
    return acc;
  }, {});
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const total = source.length || 1;
  $("#sectorCount").textContent = `${rows.length} 大类`;
  $("#sectorChart").innerHTML = rows.map(([name, count]) => {
    const percentage = Math.round(count / total * 100);
    return `<div class="sector-row"><span class="sector-name">${name}</span><span class="sector-track"><span class="sector-bar" style="width:${percentage}%"></span></span><span class="sector-pct">${percentage}%</span></div>`;
  }).join("");
  if (rows[0]) {
    $("#sectorTopName").textContent = rows[0][0];
    $("#sectorTopShare").textContent = `${Math.round(rows[0][1] / total * 100)}%`;
  }
}

function renderTable() {
  const visible = getVisibleStocks();
  $("#tableSummary").textContent = `显示 ${visible.length} 个标的`;
  $("#tableRange").textContent = visible.length ? `显示全部 ${visible.length} 个标的` : "暂无标的";
  $("#opportunityTableBody").innerHTML = visible.length ? visible.map((stock) => {
    const currentYield = getStockCurrentYield(stock);
    const currentPrice = Number(stock.price);
    const rsi = formatStockRsi(stock);
    const pePercentile = formatStockPercentile(stock.pePercentile ?? stock.pe10YearPercentile);
    const pbPercentile = formatStockPercentile(stock.pbPercentile ?? stock.pb10YearPercentile);
    const firstPrice = Number(stock.first);
    const requiredDrawdown = currentPrice > 0 && currentPrice > firstPrice
      ? (currentPrice - firstPrice) / currentPrice * 100
      : 0;
    stock.drawdown = requiredDrawdown;
    const firstTriggered = currentPrice <= Number(stock.first) && currentYield >= Number(stock.firstYield);
    const addTriggered = currentPrice <= Number(stock.add) && currentYield >= Number(stock.addYield);
    const heavyTriggered = currentPrice <= Number(stock.heavy) && currentYield >= Number(stock.heavyYield);
    const isExpanded = stock.code === state.expandedStockCode;
    return `
      <tr data-code="${stock.code}" class="${stock.code === state.selectedCode ? "is-selected" : ""}">
        <td><span class="stock-name">${stock.name}</span><span class="stock-code">${stock.code} · <span class="stock-sector">${stock.sector} / ${stock.sub}</span></span></td>
        <td class="price-cell">${formatNumber(stock.price)}</td>
        <td>${rsi}</td>
        <td>${pePercentile}</td>
        <td>${pbPercentile}</td>
        <td class="drawdown-cell">${formatNumber(requiredDrawdown)}%</td>
        <td><div class="target-cell${firstTriggered ? " is-triggered" : ""}"><strong>${formatNumber(stock.first)}</strong><span>${formatNumber(stock.firstYield, 1)}%</span></div></td>
        <td><div class="target-cell add${addTriggered ? " is-triggered" : ""}"><strong>${formatNumber(stock.add)}</strong><span>${formatNumber(stock.addYield, 1)}%</span></div></td>
        <td><div class="target-cell heavy${heavyTriggered ? " is-triggered" : ""}"><strong>${formatNumber(stock.heavy)}</strong><span>${formatNumber(stock.heavyYield, 1)}%</span></div></td>
        <td><div class="yield-stack"><span>新 ${formatNumber(getStockCurrentYield(stock))}%</span><span>均 ${formatNumber(stock.yieldAvg)}%</span><span>低 ${formatNumber(stock.yieldLow)}%</span></div></td>
        <td class="years-cell">${stock.years} 年</td>
      </tr>
      ${isExpanded ? renderInlineStockDetail(stock) : ""}`;
  }).join("") : `<tr><td class="empty-state" colspan="11">没有符合条件的标的，试试切换行业或关闭“仅白名单”。</td></tr>`;
}

function renderInlineStockDetail(stock) {
  const trend = getTrendPoints(stock, state.period);
  const points = trend.points.length > 1 ? trend.points : [{ close: stock.price }, { close: stock.price }];
  const values = points.map((point) => Number(point.close) || Number(stock.price) || 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, max * 0.01);
  const width = 860;
  const height = 190;
  const pad = { top: 16, right: 16, bottom: 20, left: 38 };
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / Math.max(values.length - 1, 1));
  const y = (value) => pad.top + (max - value) / range * (height - pad.top - pad.bottom);
  const pricePoints = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const areaPoints = `${pad.left},${height - pad.bottom} ${pricePoints} ${x(values.length - 1)},${height - pad.bottom}`;
  const dividendPerShare = Number(stock.dividendPerShare) || 0;
  const yieldValues = values.map((value) => value > 0 ? dividendPerShare / value * 100 : 0);
  const yieldMin = Math.min(...yieldValues);
  const yieldMax = Math.max(...yieldValues);
  const yieldRange = Math.max(yieldMax - yieldMin, 0.2);
  const yieldY = (value) => pad.top + (yieldMax - value) / yieldRange * (height - pad.top - pad.bottom);
  const yieldPoints = yieldValues.map((value, index) => `${x(index)},${yieldY(value)}`).join(" ");
  const yLabels = [max, min].map((value) => `<text class="chart-label" x="0" y="${y(value) + 3}">${formatNumber(value)}</text>`).join("");
  const grid = [pad.top, height / 2, height - pad.bottom].map((lineY) => `<line class="grid-line" x1="${pad.left}" y1="${lineY}" x2="${width - pad.right}" y2="${lineY}"></line>`).join("");
  const currentPrice = Number(stock.price) || 0;
  const firstPrice = Number(stock.first) || 0;
  const currentYield = getStockCurrentYield(stock);
  const firstYield = Number(stock.firstYield) || 0;
  const pricePosition = firstPrice > 0 ? currentPrice / firstPrice * 100 : 0;
  const yieldPremium = firstYield > 0 ? (currentYield / firstYield - 1) * 100 : 0;
  const trendChange = values.length > 1 && values[0] > 0 ? (values[values.length - 1] / values[0] - 1) * 100 : 0;
  const trendLabel = trendChange >= 3 ? "趋势偏强" : trendChange <= -3 ? "趋势偏弱" : "区间震荡";
  const priceLabel = currentPrice <= Number(stock.add) ? "已到加仓区" : currentPrice <= firstPrice ? "已到首仓区" : "等待回落";
  const yieldLabel = currentYield >= Number(stock.addYield) ? "股息率达加仓要求" : currentYield >= firstYield ? "股息率达首仓要求" : "股息率未达目标";
  return `
    <tr class="inline-stock-detail">
      <td colspan="8">
        <div class="inline-stock-detail-inner">
          <div class="inline-stock-detail-heading">
            <div>
              <strong>${escapeHtml(stock.name)} · ${stock.code}</strong>
              <span>价格与息率趋势 · ${state.period} · ${trend.source}</span>
            </div>
            <div class="inline-period-tabs">
              ${["1M", "3M", "1Y", "3Y"].map((period) => `<button type="button" class="${period === state.period ? "is-active" : ""}" data-inline-period="${period}" data-inline-code="${stock.code}">${period}</button>`).join("")}
            </div>
          </div>
          <div class="inline-stock-chart">
            <div class="inline-chart-legend"><span><i class="legend-line legend-price"></i>最新价</span><span><i class="legend-line legend-yield"></i>股息率</span></div>
            <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(stock.name)}价格与息率趋势图">
              ${grid}${yLabels}
              <polygon class="price-area" points="${areaPoints}"></polygon>
              <polyline class="price-line" points="${pricePoints}"></polyline>
              <polyline class="yield-line" points="${yieldPoints}"></polyline>
              <circle class="chart-dot" cx="${x(values.length - 1)}" cy="${y(values[values.length - 1])}" r="4"></circle>
            </svg>
          </div>
          <div class="inline-stock-analysis">
            <div class="inline-analysis-heading"><strong>走势分析</strong><span>${trendLabel}</span></div>
            <div class="inline-analysis-summary">${escapeHtml(stock.name)} 当前价格${priceLabel}，${yieldLabel}。</div>
            <div class="inline-analysis-list">
              <div><span>区间走势</span><strong class="${trendChange >= 0 ? "positive-value" : "negative-value"}">${trendChange >= 0 ? "+" : ""}${formatNumber(trendChange)}%</strong></div>
              <div><span>当前股息率</span><strong>${formatNumber(currentYield)}%</strong></div>
              <div><span>首仓价位置</span><strong>${formatNumber(pricePosition)}%</strong></div>
              <div><span>股息率优势</span><strong class="${yieldPremium >= 0 ? "positive-value" : "negative-value"}">${yieldPremium >= 0 ? "+" : ""}${formatNumber(yieldPremium)}%</strong></div>
              <div><span>连续分红</span><strong>${stock.years} 年</strong></div>
            </div>
          </div>
          <div class="inline-stock-metrics">
            <span><b>当前股息率</b>${formatNumber(getStockCurrentYield(stock))}%</span>
            <span><b>首仓价</b>${formatNumber(stock.first)}</span>
            <span><b>加仓价</b>${formatNumber(stock.add)}</span>
            <span><b>重仓价</b>${formatNumber(stock.heavy)}</span>
            <span><b>连续分红</b>${stock.years} 年</span>
          </div>
        </div>
      </td>
    </tr>`;
}

function renderCryptoMetrics() {
  const totalCap = cryptoAssets.reduce((sum, asset) => sum + asset.cap, 0);
  const btc = cryptoAssets[0];
  const volume = 81.7 + Math.abs(btc.change24) * 1.65;
  const fearGreed = Math.round(68 + btc.change7 * 0.6);
  $("#cryptoMetricCap").textContent = (totalCap / 1000).toFixed(2);
  $("#cryptoMetricDominance").textContent = (btc.cap / totalCap * 100).toFixed(1);
  $("#cryptoMetricVolume").textContent = volume.toFixed(1);
  $("#cryptoMetricFear").textContent = String(Math.min(92, Math.max(18, fearGreed)));
}

function renderCryptoChart() {
  if (!$("#cryptoTrendChart")) return;
  const asset = cryptoAssets.find((item) => item.symbol === state.cryptoSymbol) || cryptoAssets[0];
  const values = asset.history.slice(-10);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, max * 0.01);
  const width = 760;
  const height = 198;
  const pad = { top: 16, right: 18, bottom: 19, left: 18 };
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / (values.length - 1));
  const y = (value) => pad.top + (max - value) / range * (height - pad.top - pad.bottom);
  const pricePoints = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const emaValues = values.map((value, index) => values.slice(Math.max(0, index - 2), index + 1).reduce((sum, item) => sum + item, 0) / Math.min(index + 1, 3));
  const emaPoints = emaValues.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const areaPoints = `${pad.left},${height - pad.bottom} ${pricePoints} ${x(values.length - 1)},${height - pad.bottom}`;
  const yLabels = [max, max - range * 0.5, min].map((value) => `<text class="chart-label" x="0" y="${y(value) + 3}">${formatCryptoPrice(value)}</text>`).join("");
  const gridLines = [pad.top, height / 2, height - pad.bottom].map((lineY) => `<line class="grid-line" x1="${pad.left}" y1="${lineY}" x2="${width - pad.right}" y2="${lineY}"></line>`).join("");
  const lastX = x(values.length - 1);
  const lastY = y(values[values.length - 1]);
  $("#cryptoTrendChart").innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${asset.name}价格趋势图">
      ${gridLines}
      ${yLabels}
      <polygon class="price-area" points="${areaPoints}"></polygon>
      <polyline class="price-line" points="${pricePoints}"></polyline>
      <polyline class="yield-line" points="${emaPoints}"></polyline>
      <circle class="chart-dot" cx="${lastX}" cy="${lastY}" r="4"></circle>
      <text class="chart-label" x="${Math.max(lastX - 58, 20)}" y="${Math.max(lastY - 13, 12)}">${formatCryptoPrice(asset.price)}</text>
    </svg>`;
  $("#cryptoTrendSummary").textContent = `${asset.symbol} · ${asset.name}`;
  const axisLabels = state.cryptoPeriod === "24H" ? ["00:00", "04:00", "08:00", "12:00", "16:00", "现在"] : state.cryptoPeriod === "30D" ? ["05/24", "05/30", "06/05", "06/11", "06/17", "今天"] : ["周一", "周二", "周三", "周四", "周五", "今天"];
  $("#cryptoChartAxis").innerHTML = axisLabels.map((label) => `<span>${label}</span>`).join("");
}

function renderCryptoSignals() {
  if (!$("#signalSentiment")) return;
  const asset = cryptoAssets.find((item) => item.symbol === state.cryptoSymbol) || cryptoAssets[0];
  const sentiment = Math.round(Math.min(94, Math.max(30, 64 + asset.change7 * 1.1)));
  const trend = Math.round(Math.min(92, Math.max(28, 66 + asset.change7 * 1.8)));
  const risk = Math.round(Math.min(92, Math.max(25, asset.volatility * 6)));
  const flow = Math.round(Math.min(90, Math.max(25, 58 + asset.change24 * 2.5)));
  const setSignal = (prefix, value, label) => {
    $(`#signal${prefix}`).textContent = label;
    $(`#signal${prefix}Bar`).style.width = `${value}%`;
    $(`#signal${prefix}Value`).textContent = String(value);
  };
  setSignal("Sentiment", sentiment, sentiment >= 60 ? "偏多" : "谨慎");
  setSignal("Trend", trend, trend >= 65 ? "强势" : "震荡");
  setSignal("Risk", risk, risk >= 65 ? "偏高" : risk >= 45 ? "中等" : "较低");
  setSignal("Flow", flow, flow >= 58 ? "净流入" : "净流出");
  $("#cryptoSummaryTitle").textContent = `${asset.symbol} ${asset.change24 >= 0 ? "处于上升趋势" : "进入回撤观察"}`;
  $("#cryptoSummaryText").textContent = asset.change24 >= 0
    ? `价格运行在短期均线之上，${formatCryptoPrice(asset.support)} 附近是重要支撑。`
    : `短线动能有所减弱，关注 ${formatCryptoPrice(asset.support)} 支撑是否有效。`;
}

function renderCryptoTable() {
  const query = state.cryptoSearch.trim().toLowerCase();
  const visible = cryptoAssets.filter((asset) => {
    const matchesQuery = !query || `${asset.name}${asset.symbol}`.toLowerCase().includes(query);
    const matchesSignal = state.cryptoSignal === "all" || asset.signal === state.cryptoSignal;
    return matchesQuery && matchesSignal;
  });
  $("#cryptoTableSummary").textContent = `显示 ${visible.length} 个币种`;
  $("#cryptoTableBody").innerHTML = visible.map((asset) => `
    <tr data-crypto-symbol="${asset.symbol}" class="${asset.symbol === state.cryptoSymbol ? "is-selected" : ""}">
      <td><span class="stock-name">${asset.name}</span><span class="crypto-symbol">${asset.symbol}</span></td>
      <td class="crypto-price">${cryptoLivePriceAvailable ? formatCryptoPrice(asset.price) : "—"}</td>
      <td class="${asset.change24 >= 0 ? "crypto-change-positive" : "crypto-change-negative"}">${asset.change24 >= 0 ? "+" : ""}${formatNumber(asset.change24)}%</td>
      <td class="${asset.change7 >= 0 ? "crypto-change-positive" : "crypto-change-negative"}">${asset.change7 >= 0 ? "+" : ""}${formatNumber(asset.change7)}%</td>
      <td>${formatNumber(asset.volatility)}%</td>
      <td>$${asset.cap}B</td>
      <td><span class="signal-badge ${asset.signal}">${asset.signal === "bullish" ? "偏多" : "观察"}</span></td>
      <td class="crypto-range">${formatCryptoPrice(asset.support)} - ${formatCryptoPrice(asset.resistance)}</td>
    </tr>
    ${asset.symbol === state.expandedCryptoSymbol ? renderInlineCryptoDetail(asset) : ""}
  `).join("") || `<tr><td class="empty-state" colspan="8">没有符合条件的币种。</td></tr>`;
}

function renderInlineCryptoDetail(asset) {
  const values = asset.history.length > 1 ? asset.history.slice(-24) : [asset.price, asset.price];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, max * 0.01);
  const width = 860;
  const height = 190;
  const pad = { top: 16, right: 16, bottom: 20, left: 52 };
  const x = (index) => pad.left + index * ((width - pad.left - pad.right) / Math.max(values.length - 1, 1));
  const y = (value) => pad.top + (max - value) / range * (height - pad.top - pad.bottom);
  const points = values.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const areaPoints = `${pad.left},${height - pad.bottom} ${points} ${x(values.length - 1)},${height - pad.bottom}`;
  const emaValues = values.map((value, index) => {
    const window = values.slice(Math.max(0, index - 4), index + 1);
    return window.reduce((sum, item) => sum + item, 0) / window.length;
  });
  const emaPoints = emaValues.map((value, index) => `${x(index)},${y(value)}`).join(" ");
  const yLabels = [max, max - range * 0.5, min]
    .map((value) => `<text class="chart-label" x="0" y="${y(value) + 3}">${formatCryptoPrice(value)}</text>`)
    .join("");
  const grid = [pad.top, height / 2, height - pad.bottom]
    .map((lineY) => `<line class="grid-line" x1="${pad.left}" y1="${lineY}" x2="${width - pad.right}" y2="${lineY}"></line>`)
    .join("");
  const trendScore = Math.round(Math.min(95, Math.max(20, 60 + asset.change7 * 2)));
  const momentumScore = Math.round(Math.min(95, Math.max(20, 58 + asset.change24 * 3)));
  const riskScore = Math.round(Math.min(95, Math.max(20, asset.volatility * 6)));
  const trendLabel = trendScore >= 70 ? "强势" : trendScore >= 50 ? "震荡" : "偏弱";
  const momentumLabel = momentumScore >= 65 ? "偏多" : momentumScore >= 45 ? "中性" : "偏空";
  const riskLabel = riskScore >= 70 ? "偏高" : riskScore >= 45 ? "中等" : "较低";
  return `
    <tr class="inline-crypto-detail">
      <td colspan="8">
        <div class="inline-stock-detail-inner inline-crypto-detail-inner">
          <div class="inline-stock-detail-heading">
            <div>
              <strong>${escapeHtml(asset.name)} · ${asset.symbol}</strong>
              <span>价格趋势与技术指标 · ${state.cryptoPeriod}</span>
            </div>
            <div class="inline-period-tabs">
              ${["24H", "7D", "30D"].map((period) => `<button type="button" class="${period === state.cryptoPeriod ? "is-active" : ""}" data-inline-crypto-period="${period}" data-inline-crypto-symbol="${asset.symbol}">${period}</button>`).join("")}
            </div>
          </div>
          <div class="inline-stock-chart">
            <div class="inline-chart-legend">
              <span><i class="legend-line legend-price"></i>价格</span>
              <span><i class="legend-line legend-yield"></i>EMA</span>
            </div>
            <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${escapeHtml(asset.name)}价格趋势图">
              ${grid}${yLabels}
              <polygon class="price-area" points="${areaPoints}"></polygon>
              <polyline class="price-line" points="${points}"></polyline>
              <polyline class="yield-line" points="${emaPoints}"></polyline>
              <circle class="chart-dot" cx="${x(values.length - 1)}" cy="${y(values[values.length - 1])}" r="4"></circle>
            </svg>
          </div>
          <div class="inline-stock-metrics inline-crypto-metrics">
            <span><b>趋势</b>${trendLabel} · ${trendScore}</span>
            <span><b>短线动能</b>${momentumLabel} · ${momentumScore}</span>
            <span><b>波动风险</b>${riskLabel} · ${formatNumber(asset.volatility)}%</span>
            <span><b>24H成交额</b>$${Number(asset.volume24 || 0).toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
            <span><b>支撑</b>${formatCryptoPrice(asset.support)}</span>
            <span><b>阻力</b>${formatCryptoPrice(asset.resistance)}</span>
          </div>
        </div>
      </td>
    </tr>`;
}

function renderCryptoAll({ updated = false } = {}) {
  renderCryptoMetrics();
  renderCryptoChart();
  renderCryptoSignals();
  renderCryptoTable();
  if (updated) $("#cryptoLastUpdated").textContent = formatTime();
}

function getAccountSummary() {
  return getAccountHoldings().reduce((result, holding) => {
    const currentPrice = getHoldingCurrentPrice(holding);
    const cost = Number(holding.buyPrice) * Number(holding.quantity);
    const marketValue = currentPrice * Number(holding.quantity);
    const profit = holding.marketType === "fixed"
      ? cost * (Number(holding.annualRate) || 0) / 100
      : marketValue - cost;
    const dividend = (Number(holding.dividendPerUnit) || 0) * Number(holding.quantity);
    result.cost += cost;
    result.marketValue += marketValue;
    result.profit += profit;
    result.dividend += dividend;
    return result;
  }, { cost: 0, marketValue: 0, profit: 0, dividend: 0 });
}

function renderAccountMetrics() {
  const summary = getAccountSummary();
  const profitRate = summary.cost ? summary.profit / summary.cost * 100 : 0;
  const dividendYield = summary.cost ? summary.dividend / summary.cost * 100 : 0;
  const profitColorClass = summary.profit >= 0 ? "account-positive" : "account-negative";
  const profitClass = summary.profit >= 0 ? "positive" : "alert";
  const dividendValue = state.accountType === "fixed" ? summary.profit : summary.dividend;
  const dividendColorClass = dividendValue >= 0 ? "account-positive" : "account-negative";
  $("#accountMetricValue").textContent = formatAccountMetricMoney(summary.marketValue);
  $("#accountMetricCost").textContent = formatAccountMetricMoney(
    state.accountType === "fixed" ? summary.profit : summary.cost
  );
  $("#accountMetricProfit").textContent = state.accountType === "fixed"
      ? `${formatNumber(profitRate, 2)}`
      : state.accountType === "stock"
        ? `${summary.profit >= 0 ? "+" : ""}${formatAccountMoney(summary.profit)}`
        : `${summary.profit >= 0 ? "+" : ""}${formatNumber(summary.profit, 0)}`;
  $("#accountMetricProfit").className = `metric-value ${state.accountType === "fixed" ? "" : profitClass}`;
  $("#accountCostMetric").classList.toggle("account-positive", state.accountType === "fixed" && summary.profit >= 0);
  $("#accountCostMetric").classList.toggle("account-negative", state.accountType === "fixed" && summary.profit < 0);
  $("#accountMetricProfitMeta").textContent = state.accountType === "fixed"
    ? "按本金加权"
    : `收益率 ${profitRate >= 0 ? "+" : ""}${formatNumber(profitRate, 2)}%`;
  $("#accountMetricProfitMeta").className = "metric-meta";
  $("#accountProfitMetric").classList.toggle("account-positive", state.accountType !== "fixed" && summary.profit >= 0);
  $("#accountProfitMetric").classList.toggle("account-negative", state.accountType !== "fixed" && summary.profit < 0);
  $("#accountMetricDividend").textContent = formatAccountMetricMoney(
    dividendValue,
  );
  $("#accountMetricYieldMeta").className = "metric-meta";
  $("#accountDividendMetric").classList.toggle("account-positive", dividendValue >= 0);
  $("#accountDividendMetric").classList.toggle("account-negative", dividendValue < 0);
  if (state.accountType === "crypto") {
    $("#accountExchangeRate").textContent = formatNumber(usdCnyRate, 4);
    $("#accountExchangeMeta").textContent = usdCnyRateUpdatedAt
      ? `更新 ${formatTime(usdCnyRateUpdatedAt)}`
      : "实时汇率";
    $("#accountEquivalentValue").textContent = formatCnyEquivalent(summary.marketValue, 0);
  }
  $("#accountMetricYieldMeta").textContent = state.accountType === "fixed"
    ? `年化率 ${formatNumber(profitRate, 2)}%`
    : `持仓股息率 ${formatNumber(dividendYield, 2)}%`;
  const accountTableSummary = $("#accountTableSummary");
  if (accountTableSummary) accountTableSummary.textContent = `共 ${getAccountHoldings().length} 笔持仓`;
  $("#accountLastUpdated").textContent = formatTime();
  const accountDataSource = $("#accountDataSource");
  if (accountDataSource) {
    accountDataSource.textContent = state.accountType === "fixed"
      ? "现金账户无需行情"
      : stockDataMode === "live" && stockLastUpdatedAt
        ? `股票行情更新 ${formatTime(stockLastUpdatedAt)}`
        : "等待股票行情";
  }
}

function renderAccountTable() {
  if (state.accountType === "stock" && state.initialStockLoading) {
    $("#accountTableBody").innerHTML = `
      <tr>
        <td colspan="12" class="account-empty-state">
          <strong>正在同步实时行情</strong>
          <span>首次进入先获取股票现价，稍后自动显示持仓明细。</span>
        </td>
      </tr>`;
    return;
  }
  const accountHoldings = getAccountHoldings().slice().sort((a, b) => {
    const amountA = getHoldingCurrentPrice(a) * (Number(a.quantity) || 0);
    const amountB = getHoldingCurrentPrice(b) * (Number(b.quantity) || 0);
    const amountOrder = amountB - amountA;
    return amountOrder || String(a.name || "").localeCompare(String(b.name || ""), "zh-CN");
  });
  const isFixed = state.accountType === "fixed";
  const summary = getAccountSummary();
  const summaryProfitRate = summary.cost ? summary.profit / summary.cost * 100 : 0;
  const summaryYield = summary.cost ? summary.dividend / summary.cost * 100 : 0;
  const summaryProfitClass = summary.profit >= 0 ? "positive-value" : "negative-value";
  const summaryRow = `
      <tr class="account-summary-row">
        <td><strong>持仓汇总</strong>${isFixed ? "" : `<span class="stock-code">${accountHoldings.length} 笔持仓</span>`}</td>
        ${isFixed ? `
          <td class="account-summary-number">${formatAccountSummaryMoney(summary.cost)}</td>
          <td>${accountHoldings.reduce((sum, holding) => sum + (Number(holding.quantity) || 0), 0)}</td>
          <td class="account-summary-number">${formatAccountSummaryMoney(summary.marketValue)}</td>
          <td class="account-summary-number">${formatNumber(summaryProfitRate)}%</td>
          <td class="${summaryProfitClass}">${summary.profit >= 0 ? "+" : ""}${formatAccountSummaryMoney(summary.profit)}</td>
          <td>—</td>
          <td>—</td>` : `
          <td>—</td>
          <td class="account-summary-number">${state.accountType === "stock" ? formatAccountMoney(summary.cost) : formatAccountSummaryMoney(summary.cost)}</td>
          <td class="account-summary-number"><strong>${formatAccountSummaryMoney(summary.marketValue)}</strong></td>
          <td>—</td>
          <td class="${summaryProfitClass}">${summaryProfitRate >= 0 ? "+" : ""}${formatNumber(summaryProfitRate)}%</td>
          <td class="${summaryProfitClass}">${summary.profit >= 0 ? "+" : ""}${state.accountType === "stock" ? formatAccountMoney(summary.profit) : formatAccountSummaryMoney(summary.profit)}</td>
          ${state.accountType === "stock" ? `
          <td class="account-dividend-only">${formatNumber(summaryYield)}%</td>
          <td class="account-dividend-only dividend-value">${formatAccountMoney(summary.dividend)}</td>` : ""}
          <td>—</td>
          <td>—</td>`}
      </tr>`;
  const tablePrefix = state.accountType === "stock" ? "" : summaryRow;
  $("#accountTableBody").innerHTML = accountHoldings.length ? tablePrefix + accountHoldings.map((holding) => {
    const currentPrice = getHoldingCurrentPrice(holding);
    const buyPrice = Number(holding.buyPrice) || 0;
    const quantity = Number(holding.quantity) || 0;
    const cost = buyPrice * quantity;
    const annualRate = Number(holding.annualRate) || 0;
    const profit = holding.marketType === "fixed"
      ? buyPrice * quantity * annualRate / 100
      : (currentPrice - buyPrice) * quantity;
    const profitRate = holding.marketType === "fixed"
      ? annualRate
      : buyPrice ? (currentPrice - buyPrice) / buyPrice * 100 : 0;
    const currentYield = getHoldingYield(holding);
    const dividend = (Number(holding.dividendPerUnit) || 0) * quantity;
    const profitClass = profit >= 0 ? "positive-value" : "negative-value";
    const holdingMarket = getHoldingMarket(holding);
    const stockIndustryLabel = holding.marketType === "stock" && holdingMarket
      && holdingMarket.sector && holdingMarket.sub
      && !["其他", "未知"].includes(String(holdingMarket.sector).trim())
      && !["其他", "未知"].includes(String(holdingMarket.sub).trim())
      ? ` · ${escapeHtml(holdingMarket.sector)} / ${escapeHtml(holdingMarket.sub)}`
      : "";
    const holdingMetaLabel = holding.marketType === "stock"
      ? stockIndustryLabel.replace(/^ · /, "")
      : "";
    const stockSignal = getStockSignal(holdingMarket);
    return `
      <tr data-holding-id="${holding.id}">
        <td><span class="stock-name">${escapeHtml(holding.name)}</span>${isFixed || !holdingMetaLabel ? "" : `<span class="stock-code">${holdingMetaLabel}</span>`}</td>
        ${isFixed ? `
          <td>${formatAccountSummaryMoney(buyPrice, holding.marketType)}</td>
          <td>${formatNumber(quantity, quantity % 1 === 0 ? 0 : 4)}</td>
          <td class="account-summary-number">${formatAccountSummaryMoney(cost, holding.marketType)}</td>
          <td class="positive-value">${formatNumber(annualRate)}%</td>
          <td class="${profitClass}">${profit >= 0 ? "+" : ""}${formatAccountSummaryMoney(profit, holding.marketType)}</td>
          <td class="account-note-cell">${escapeHtml(holding.note || "—")}</td>` : `
          ${state.accountType === "stock" ? `
          <td><span class="account-signal-badge ${stockSignal.className}">${stockSignal.label}</span></td>
          <td class="account-summary-number">${formatAccountMoney(cost, holding.marketType)}</td>
          <td>${formatBuyPrice(buyPrice)}</td>
          <td>${formatNumber(quantity, quantity % 1 === 0 ? 0 : 4)}</td>` : `
          <td>${formatBuyPrice(buyPrice)}</td>
          ${state.accountType === "crypto" ? `<td>${formatNumber(quantity, quantity % 1 === 0 ? 0 : 6)}</td>` : ""}
          <td class="account-summary-number">${formatAccountMoney(cost, holding.marketType)}</td>`}
          <td class="${currentPrice >= holding.buyPrice ? "positive-value" : "negative-value"}">${formatAccountMoney(currentPrice, holding.marketType)}</td>
          ${state.accountType === "stock" ? "" : state.accountType === "crypto" ? "" : `<td>${formatNumber(quantity, quantity % 1 === 0 ? 0 : 4)}</td>`}
          <td class="${profitClass}">${profitRate >= 0 ? "+" : ""}${formatNumber(profitRate)}%</td>
          <td class="${profitClass}">${profit >= 0 ? "+" : ""}${holding.marketType === "stock" ? formatAccountMoney(profit, holding.marketType) : formatAccountSummaryMoney(profit, holding.marketType)}</td>
          ${state.accountType === "stock" ? `
          <td class="account-dividend-only">${formatNumber(currentYield)}%</td>
          <td class="account-dividend-only dividend-value">${formatAccountMoney(dividend, holding.marketType)}</td>` : ""}
          <td class="account-note-cell">${escapeHtml(holding.note || "—")}</td>`}
        <td>
          <div class="account-action-buttons">
            <button class="account-action-button edit" type="button" data-edit-holding="${holding.id}" title="编辑持仓" aria-label="编辑持仓">✎</button>
            <button class="account-action-button remove" type="button" data-remove-holding="${holding.id}" title="删除持仓" aria-label="删除持仓">×</button>
          </div>
        </td>
      </tr>`;
  }).join("") : `
    <tr>
      <td colspan="${isFixed ? 8 : state.accountType === "stock" ? 12 : 9}" class="account-empty-state">
        <strong>还没有持仓</strong>
        <span>在上方填写标的、买入价和数量，即可开始跟踪。</span>
      </td>
    </tr>`;
}

function renderAccountAll() {
  renderAccountMetrics();
  renderAccountTable();
  updateAccountFormPreview();
}

function setAccountFormMode(editing = false) {
  const title = $("#accountFormTitle");
  const submitButton = $("#accountFormSubmit");
  const resetButton = $("#accountResetButton");
  if (title) title.textContent = editing ? "编辑持仓" : "添加一笔持仓";
  if (submitButton) submitButton.innerHTML = editing
    ? `<span aria-hidden="true">✓</span> 保存修改`
    : `<span aria-hidden="true">＋</span> 添加持仓`;
  if (resetButton) resetButton.textContent = editing ? "取消编辑" : "清空";
}

function resetAccountForm() {
  state.editingHoldingId = null;
  $("#accountForm").reset();
  setAccountFormMode(false);
  updateAccountFormPreview();
}

function startEditingHolding(id) {
  const holding = holdings.find((item) => item.id === id);
  if (!holding) return;
  state.editingHoldingId = id;
  $("#accountTargetInput").value = holding.code && !["custom", "fixed"].includes(holding.marketType) ? holding.code : holding.name;
  $("#accountBuyPriceInput").value = formatBuyPrice(holding.buyPrice);
  $("#accountCurrentPriceInput").value = holding.marketType === "fixed"
    ? String(holding.annualRate || 0)
    : String(getHoldingCurrentPrice(holding));
  $("#accountQuantityInput").value = String(holding.quantity || 1);
  $("#accountDividendInput").value = holding.dividendPerUnit > 0
    ? formatNumber(normalizeDividendValue(holding.dividendPerUnit), 4)
    : "";
  $("#accountNoteInput").value = holding.note || "";
  setAccountFormMode(true);
  updateAccountFormPreview();
  $("#accountTargetInput").focus();
  showToast(`正在编辑 ${holding.name}`);
}

function updateAccountFormPreview() {
  const target = $("#accountTargetInput").value;
  const market = state.accountType === "fixed" ? null : findAccountMarket(target);
  state.accountFormMarket = market;
  if (state.accountType === "fixed") {
    $("#accountCurrentPriceInput").placeholder = "0.00%";
    $("#accountCurrentPriceInput").readOnly = false;
    if (state.editingHoldingId == null) $("#accountCurrentPriceInput").value = "";
    if (!$("#accountQuantityInput").value) $("#accountQuantityInput").value = "1";
    $("#accountYieldInput").value = "";
    $("#accountMarketHint").textContent = target.trim() ? "现金账户手动记录，不匹配股票或虚拟币行情" : "输入活期现金名称";
    $("#accountMarketHint").className = target.trim() ? "form-hint-success" : "";
    return;
  }
  if (market) {
    const currentPrice = market.asset.price;
    const currentYield = market.type === "stock" ? getStockCurrentYield(market.asset) : 0;
    $("#accountCurrentPriceInput").value = formatAccountMoney(currentPrice, market.type);
    $("#accountYieldInput").value = `${formatNumber(currentYield)}%`;
    $("#accountMarketHint").textContent = `${market.displayName} · ${market.code}，已匹配实时行情`;
    $("#accountMarketHint").className = "form-hint-success";
    if (!$("#accountDividendInput").value && market.type === "stock") {
      $("#accountDividendInput").placeholder = `估算 ${formatNumber(currentPrice * currentYield / 100)}`;
    }
  } else {
    $("#accountCurrentPriceInput").value = "";
    $("#accountYieldInput").value = "0.00%";
    $("#accountMarketHint").textContent = target.trim()
      ? state.accountType === "crypto"
        ? "可录入美元，或匹配 BTC / SOL / ETH 实时行情"
        : "未匹配内置行情，将按买入价暂存"
      : "输入后自动匹配行情";
    $("#accountMarketHint").className = target.trim() ? "form-hint-warning" : "";
    $("#accountDividendInput").placeholder = "可手动覆盖";
  }
}

function renderAll() {
  renderMetrics();
  renderStockDataSourceStatus();
  renderTrendChart();
  renderSectorChart();
  renderTable();
  renderStockMonitor();
  refreshMonitorMAHistory();
  refreshMonitorRoeHistory();
  refreshMonitorValuationPercentiles();
  refreshMonitorDividends();
  renderFocusView();
  renderCryptoAll();
  renderDividendAll();
  renderAccountAll();
  $("#lastUpdated").textContent = formatTime();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function bindEvents() {
  $("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderTable();
  });
  $("#sectorFilter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    renderTable();
  });
  $("#whitelistToggle").addEventListener("change", (event) => {
    state.whitelist = event.target.checked;
    renderTable();
    renderSectorChart();
    showToast(state.whitelist ? "已切换为仅白名单" : `已显示全部 ${stocks.length} 个标的`);
  });
  $("#liveToggle").addEventListener("change", (event) => {
    state.live = event.target.checked;
    if (state.live) {
      connectCryptoStream();
      refreshLiveMarketData({ refreshCrypto: true });
    } else {
      closeCryptoStream();
      setStatus("marketStatusDot", "marketStatusText", "自动刷新已暂停", "warning");
      setStatus("cryptoStatusDot", "cryptoStatusText", "实时流已暂停", "warning");
      $("#stockDataSource").textContent = "自动刷新已暂停";
      $("#cryptoDataSource").textContent = "自动刷新已暂停";
    }
    showToast(state.live ? "自动刷新已开启" : "自动刷新已暂停");
  });
  const trendSelect = $("#trendStockSelect");
  if (trendSelect) {
    trendSelect.addEventListener("change", (event) => {
      state.selectedCode = event.target.value;
      renderTrendChart();
      refreshTrendHistory({ force: true });
      renderTable();
    });
  }
  $$(".period-tab").forEach((button) => button.addEventListener("click", () => {
    button.closest(".panel-controls").querySelectorAll(".period-tab").forEach((tab) => tab.classList.remove("is-active"));
    button.classList.add("is-active");
    if (button.classList.contains("crypto-period-tab")) {
      state.cryptoPeriod = button.dataset.period;
      renderCryptoChart();
      showToast(`虚拟币趋势周期已切换为 ${state.cryptoPeriod}`);
    } else {
      state.period = button.dataset.period;
      renderTrendChart();
      refreshTrendHistory({ force: true });
      showToast(`趋势周期已切换为 ${state.period}`);
    }
  }));
  $$(".sort-button").forEach((button) => button.addEventListener("click", () => {
    const key = button.dataset.sort;
    if (state.sortKey === key) state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
    else { state.sortKey = key; state.sortDirection = key === "name" ? "asc" : "desc"; }
    renderTable();
  }));
  $("#opportunityTableBody").addEventListener("click", (event) => {
    const periodButton = event.target.closest("[data-inline-period]");
    if (periodButton) {
      state.period = periodButton.dataset.inlinePeriod;
      state.selectedCode = periodButton.dataset.inlineCode || state.selectedCode;
      const trendSelect = $("#trendStockSelect");
      if (trendSelect) trendSelect.value = state.selectedCode;
      $$(".period-tab").forEach((tab) => {
        if (!tab.classList.contains("crypto-period-tab")) tab.classList.toggle("is-active", tab.dataset.period === state.period);
      });
      renderTrendChart();
      refreshTrendHistory({ force: true });
      renderTable();
      return;
    }
    const row = event.target.closest("tr[data-code]");
    if (!row) return;
    const nextCode = row.dataset.code;
    state.expandedStockCode = state.expandedStockCode === nextCode ? null : nextCode;
    state.selectedCode = nextCode;
    const trendSelect = $("#trendStockSelect");
    if (trendSelect) trendSelect.value = state.selectedCode;
    renderTrendChart();
    renderTable();
  });
  $("#cryptoSearchInput").addEventListener("input", (event) => {
    state.cryptoSearch = event.target.value;
    renderCryptoTable();
  });
  $("#cryptoSignalFilter").addEventListener("change", (event) => {
    state.cryptoSignal = event.target.value;
    renderCryptoTable();
  });
  $("#cryptoTableBody").addEventListener("click", (event) => {
    const periodButton = event.target.closest("[data-inline-crypto-period]");
    if (periodButton) {
      state.cryptoPeriod = periodButton.dataset.inlineCryptoPeriod;
      state.cryptoSymbol = periodButton.dataset.inlineCryptoSymbol || state.cryptoSymbol;
      state.expandedCryptoSymbol = state.cryptoSymbol;
      $$(".period-tab").forEach((tab) => {
        if (tab.classList.contains("crypto-period-tab")) {
          tab.classList.toggle("is-active", tab.dataset.period === state.cryptoPeriod);
        }
      });
      renderCryptoChart();
      renderCryptoSignals();
      renderCryptoTable();
      return;
    }
    const row = event.target.closest("tr[data-crypto-symbol]");
    if (!row) return;
    state.cryptoSymbol = row.dataset.cryptoSymbol;
    state.expandedCryptoSymbol = state.expandedCryptoSymbol === state.cryptoSymbol ? null : state.cryptoSymbol;
    renderCryptoChart();
    renderCryptoSignals();
    renderCryptoTable();
  });
  const monitorSearchInput = $("#stockMonitorSearchInput");
  if (monitorSearchInput) {
    monitorSearchInput.addEventListener("input", (event) => {
      state.monitorSearch = event.target.value;
      renderStockMonitor();
    });
  }
  const monitorCategoryFilter = $("#stockMonitorCategoryFilter");
  if (monitorCategoryFilter) {
    monitorCategoryFilter.addEventListener("change", (event) => {
      state.monitorCategory = event.target.value;
      renderStockMonitor();
    });
  }
  const monitorDropFilter = $("#stockMonitorDropFilter");
  if (monitorDropFilter) {
    monitorDropFilter.addEventListener("change", (event) => {
      state.monitorDropRange = event.target.value;
      renderStockMonitor();
    });
  }
  const dividendProgressFilter = $("#dividendProgressFilter");
  if (dividendProgressFilter) {
    dividendProgressFilter.addEventListener("change", (event) => {
      state.dividendProgress = event.target.value;
      renderDividendAll();
    });
  }
  const dividendRefreshButton = $("#dividendRefreshButton");
  if (dividendRefreshButton) {
    dividendRefreshButton.addEventListener("click", () => {
      refreshDividendData({ force: true, manual: true });
    });
  }
  $("#accountTargetInput").addEventListener("input", updateAccountFormPreview);
  $("#accountTargetInput").addEventListener("change", updateAccountFormPreview);
  $("#accountDividendInput").addEventListener("input", updateAccountFormPreview);
  $("#accountResetButton").addEventListener("click", () => {
    resetAccountForm();
  });
  $("#exportHoldingsButton").addEventListener("click", downloadHoldings);
  $("#importHoldingsButton").addEventListener("click", () => {
    $("#holdingsFileInput").click();
  });
  $("#holdingsFileInput").addEventListener("change", (event) => {
    importHoldingsFile(event.target.files?.[0]);
    event.target.value = "";
  });
  $$(".account-type-tab").forEach((button) => button.addEventListener("click", () => {
    $$(".nav-item").forEach((item) => item.classList.remove("is-active"));
    $$(".account-type-tab").forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    $("#overviewView").classList.remove("is-active");
    $("#cryptoView").classList.remove("is-active");
    $("#dividendView").classList.remove("is-active");
    $("#accountView").classList.add("is-active");
    setAccountType(button.dataset.accountType);
    if (button.dataset.accountType === "stock") {
      refreshLiveMarketData({ refreshCrypto: false });
    }
  }));
  $("#accountForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const target = $("#accountTargetInput").value.trim();
    const buyPriceInput = Number($("#accountBuyPriceInput").value);
    const buyPrice = Number.isFinite(buyPriceInput) ? Number(buyPriceInput.toFixed(3)) : buyPriceInput;
    const quantity = Number($("#accountQuantityInput").value);
    const dividendInput = state.accountType === "stock" ? Number($("#accountDividendInput").value) : 0;
    const note = $("#accountNoteInput").value.trim();
    const market = state.accountType === "fixed" ? null : state.accountFormMarket || findAccountMarket(target);
    const currentPriceInput = Number($("#accountCurrentPriceInput").value);
    if (!target || !Number.isFinite(buyPrice) || buyPrice <= 0 || !Number.isFinite(quantity) || quantity <= 0) {
      showToast("请填写有效的标的、买入价和数量");
      return;
    }
    if (market && market.type !== state.accountType) {
      showToast(`请先切换到${market.type === "crypto" ? "美元账户" : "股票账户"}`);
      return;
    }
    if (state.accountType === "fixed" && (!Number.isFinite(currentPriceInput) || currentPriceInput < 0)) {
      showToast("请填写有效的年化率");
      return;
    }
    const marketPrice = market?.asset?.price || buyPrice;
    const defaultDividend = market?.type === "stock" ? market.asset.dividendPerShare : 0;
    const wasEditing = state.editingHoldingId != null;
    const holdingData = {
      name: market?.displayName || target,
      code: market?.code || target.toUpperCase(),
      marketKey: market?.key || null,
      marketType: market?.type || state.accountType,
      buyPrice,
      quantity,
      annualRate: state.accountType === "fixed" ? currentPriceInput : 0,
      dividendPerUnit: dividendInput > 0 ? normalizeDividendValue(dividendInput) : normalizeDividendValue(defaultDividend),
      note
    };
    if (state.editingHoldingId == null) {
      holdings.push({
        id: Date.now(),
        ...holdingData,
        manualCurrentPrice: market ? undefined : marketPrice
      });
    } else {
      const holding = holdings.find((item) => item.id === state.editingHoldingId);
      if (!holding) {
        showToast("持仓不存在，无法保存修改");
        resetAccountForm();
        return;
      }
      Object.assign(holding, holdingData);
      if (market) delete holding.manualCurrentPrice;
      else if (!Number.isFinite(Number(holding.manualCurrentPrice))) holding.manualCurrentPrice = marketPrice;
    }
    saveHoldings();
    renderAccountAll();
    const savedName = market?.displayName || target;
    resetAccountForm();
    showToast(wasEditing ? `已更新 ${savedName}` : `已添加 ${savedName}`);
  });
  $("#accountTableBody").addEventListener("click", (event) => {
    const editButton = event.target.closest("[data-edit-holding]");
    if (editButton) {
      startEditingHolding(Number(editButton.dataset.editHolding));
      return;
    }
    const button = event.target.closest("[data-remove-holding]");
    if (!button) return;
    const id = Number(button.dataset.removeHolding);
    const holding = holdings.find((item) => item.id === id);
    holdings = holdings.filter((item) => item.id !== id);
    saveHoldings();
    renderAccountAll();
    if (state.editingHoldingId === id) resetAccountForm();
    showToast(`已删除 ${holding?.name || "持仓"}`);
  });
  $$(".nav-item").forEach((button) => button.addEventListener("click", () => {
    $$(".nav-item").forEach((item) => item.classList.remove("is-active"));
    $$(".account-type-tab").forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    $$(".view-section").forEach((view) => view.classList.remove("is-active"));
    button.classList.add("is-active");
    if (button.dataset.view === "crypto") {
      $("#cryptoView").classList.add("is-active");
    } else if (button.dataset.view === "focus") {
      $("#focusView").classList.add("is-active");
    } else if (button.dataset.view === "calendar") {
      $("#dividendView").classList.add("is-active");
    } else if (button.dataset.view === "account") {
      $("#accountView").classList.add("is-active");
    } else {
      $("#overviewView").classList.add("is-active");
    }
    if (button.dataset.view === "overview" || button.dataset.view === "calendar" || button.dataset.view === "focus") {
      refreshLiveMarketData({ refreshCrypto: false });
    }
  }));
}

async function initializeDashboard() {
  renderOptions();
  bindEvents();
  holdings = normalizeHoldings(holdings);
  saveHoldings();
  setAccountType(state.accountType);
  updateAccountFormPreview();
  connectCryptoStream();
  renderMetrics();
  renderTrendChart();
  renderSectorChart();
  renderTable();
  renderStockMonitor();
  renderCryptoAll();
  renderDividendAll();
  $("#lastUpdated").textContent = formatTime();
  const finishInitialStockLoading = () => {
    if (!state.initialStockLoading) return;
    state.initialStockLoading = false;
    renderAccountAll();
  };
  const initialStockFallbackTimer = setTimeout(finishInitialStockLoading, 6000);
  try {
    await withTimeout(refreshStockQuotesOnly(), 6000);
  } finally {
    clearTimeout(initialStockFallbackTimer);
    finishInitialStockLoading();
  }
  renderAll();
  refreshTrendHistory({ force: true });
  refreshLiveMarketData({ refreshCrypto: true });
  refreshUsdCnyRate();
  refreshDividendData();
}

initializeDashboard();

if ("serviceWorker" in navigator && isLocalServer) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => Promise.all(registrations.map((registration) => registration.unregister())))
      .then(() => window.caches?.keys?.())
      .then((keys) => Promise.all((keys || []).map((key) => window.caches.delete(key))))
      .catch(() => {
        // Local development must keep live market data ahead of offline caching.
      });
  });
} else if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`./sw.js?v=${Date.now()}`)
      .then((registration) => registration.update())
      .catch(() => {
        // PWA caching is optional; the live dashboard continues without it.
      });
  });
}

window.addEventListener("online", () => {
  if (state.live) refreshLiveMarketData({ refreshCrypto: true });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && state.live) {
    refreshLiveMarketData({ refreshCrypto: true });
    connectCryptoStream();
  }
});

dividendLastRefreshDate = getBeijingDate();
setInterval(() => { if (state.live) refreshLiveMarketData({ refreshCrypto: true }); }, 5000);
setInterval(() => { if (state.live) refreshUsdCnyRate(); }, 1800000);
setInterval(() => {
  const today = getBeijingDate();
  if (today !== dividendLastRefreshDate) refreshDividendData({ force: true });
}, 60000);
