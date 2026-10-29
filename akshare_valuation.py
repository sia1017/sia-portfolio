import json, sys
import akshare as ak
import pandas as pd

code = sys.argv[1].zfill(6)
try:
    df = ak.stock_a_lg_indicator(symbol=code)
    pe_col = next((c for c in df.columns if str(c).lower() in {'pe_ttm','pe'}), None)
    pb_col = next((c for c in df.columns if str(c).lower() in {'pb','pb_mrq'}), None)
    date_col = next((c for c in df.columns if 'date' in str(c).lower()), df.columns[0])
    result = {'code': code, 'pePercentile': None, 'pbPercentile': None}
    for key, col in [('pePercentile', pe_col), ('pbPercentile', pb_col)]:
        if col is None: continue
        values = pd.to_numeric(df[col], errors='coerce').dropna()
        dates = pd.to_datetime(df[date_col], errors='coerce')
        recent = values[dates >= (pd.Timestamp.now() - pd.DateOffset(years=10))]
        if len(recent):
            current = float(recent.iloc[-1])
            result[key] = round(float((recent <= current).mean() * 100), 2)
    print(json.dumps(result, ensure_ascii=False))
except Exception as exc:
    print(json.dumps({'code': code, 'error': str(exc)}))
