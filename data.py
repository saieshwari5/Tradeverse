#pip install nselib
#pip install pandas_market_calendars
from nselib import capital_market
import datetime
today = datetime.datetime.today().strftime('%d%m%Y')
date = str(int(today[:2])-1)
month = today[2:4]
year = today[4:]
today_date = date+'-'+month+'-'+year
x=capital_market.bhav_copy_with_delivery(trade_date=today_date)
print(x)