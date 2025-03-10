from flask import Blueprint, jsonify
from app import db
from app.models import BhavCopy
import pandas as pd
import datetime
from nselib import capital_market

nse_bp = Blueprint("nse", __name__)

@nse_bp.route("/fetch_bhavcopy", methods=["GET"])
def fetch_bhavcopy():
    try:
        today = datetime.datetime.today().strftime('%d%m%Y')
        date = str(int(today[:2])-1)  # Get the previous trading day's data
        month = today[2:4]
        year = today[4:]
        trade_date_str = f"{date}-{month}-{year}"
        trade_date = datetime.datetime.strptime(trade_date_str, "%d-%m-%Y").date()

        # Fetch NSE bhavcopy data
        data = capital_market.bhav_copy_with_delivery(trade_date=trade_date_str)
        df = pd.DataFrame(data)

        for _, row in df.iterrows():
            existing_record = BhavCopy.query.filter_by(symbol=row["SYMBOL"], trade_date=trade_date).first()
            if existing_record:
                continue  # Skip if already exists

            entry = BhavCopy(
                symbol=row["SYMBOL"],
                series=row["SERIES"],
                trade_date=trade_date,
                prev_close=row["PREV_CLOSE"],
                open_price=row["OPEN_PRICE"],
                high=row["HIGH_PRICE"],
                low=row["LOW_PRICE"],
                last_price=row["LAST_PRICE"],
                close_price=row["CLOSE_PRICE"],
                avg_price=row["AVG_PRICE"],
                volume=row["TTL_TRD_QNTY"],
                turnover_lacs=row["TURNOVER_LACS"],
                no_of_trades=row["NO_OF_TRADES"],
                deliv_qty=None if row["DELIV_QTY"] == "-" else row["DELIV_QTY"],
                deliv_per=None if row["DELIV_PER"] == "-" else row["DELIV_PER"],
            )
            db.session.add(entry)

        db.session.commit()
        return jsonify({"message": "BhavCopy data updated successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
