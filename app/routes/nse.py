from flask import Blueprint, jsonify
from app import db
from app.models import BhavCopy
import pandas as pd
import datetime
from nselib import capital_market

nse_bp = Blueprint("nse", __name__)

def parse_value(value, dtype=float):
    """Convert value to the given dtype, or return None if invalid."""
    if isinstance(value, str) and value.strip() in ["-", ""]:
        return None  # Handle missing values
    try:
        return dtype(value)
    except ValueError:
        return None

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

        entries_to_add = []
        for _, row in df.iterrows():
            existing_record = BhavCopy.query.filter_by(symbol=row["SYMBOL"], trade_date=trade_date).first()
            if existing_record:
                continue  # Skip if already exists

            entry = BhavCopy(
                symbol=row["SYMBOL"],
                series=row["SERIES"],
                trade_date=trade_date,
                prev_close=parse_value(row["PREV_CLOSE"], float),
                open_price=parse_value(row["OPEN_PRICE"], float),
                high=parse_value(row["HIGH_PRICE"], float),
                low=parse_value(row["LOW_PRICE"], float),
                last_price=parse_value(row["LAST_PRICE"], float),
                close_price=parse_value(row["CLOSE_PRICE"], float),
                avg_price=parse_value(row["AVG_PRICE"], float),
                volume=parse_value(row["TTL_TRD_QNTY"], int),
                turnover_lacs=parse_value(row["TURNOVER_LACS"], float),
                no_of_trades=parse_value(row["NO_OF_TRADES"], int),
                deliv_qty=parse_value(row["DELIV_QTY"], int),  # Fix for incorrect integer value
                deliv_per=parse_value(row["DELIV_PER"], float),  # Fix for incorrect float value
            )
            entries_to_add.append(entry)

        # Add all new entries to the database in a single batch insert
        if entries_to_add:
            db.session.bulk_save_objects(entries_to_add)
            db.session.commit()

        return jsonify({"message": "BhavCopy data updated successfully!"}), 200

    except Exception as e:
        db.session.rollback()  # Rollback in case of error
        return jsonify({"error": str(e)}), 500
