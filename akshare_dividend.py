import json, sys
import akshare as ak
import pandas as pd

code = sys.argv[1].zfill(6)
try:
    df = ak.stock_fhps_detail_em(symbol=code)
    date_col = next((c for c in df.columns if '除权' in str(c) or '公告' in str(c)), None)
    cash_col = next((c for c in df.columns if '派息' in str(c) or '现金' in str(c)), None)
    if date_col is None or cash_col is None: raise ValueError('dividend columns unavailable')
    df['_date'] = pd.to_datetime(df[date_col], errors='coerce')
    df['_cash'] = pd.to_numeric(df[cash_col], errors='coerce')
    row = df.dropna(subset=['_date','_cash']).sort_values('_date').iloc[-1]
    print(json.dumps({'code': code, 'dividendPerShare': float(row['_cash'])}, ensure_ascii=False))
except Exception as exc:
    print(json.dumps({'code': code, 'error': str(exc)}))
