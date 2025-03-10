from app import db

class BhavCopy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.String(50), nullable=False)
    series = db.Column(db.String(10), nullable=False)
    trade_date = db.Column(db.Date, nullable=False)
    prev_close = db.Column(db.Float, nullable=True)
    open_price = db.Column(db.Float, nullable=True)
    high = db.Column(db.Float, nullable=True)
    low = db.Column(db.Float, nullable=True)
    last_price = db.Column(db.Float, nullable=True)
    close_price = db.Column(db.Float, nullable=True)
    avg_price = db.Column(db.Float, nullable=True)
    volume = db.Column(db.Integer, nullable=True)  # TTL_TRD_QNTY
    turnover_lacs = db.Column(db.Float, nullable=True)
    no_of_trades = db.Column(db.Integer, nullable=True)
    deliv_qty = db.Column(db.Integer, nullable=True)
    deliv_per = db.Column(db.Float, nullable=True)

    def __repr__(self):
        return f"<BhavCopy {self.symbol} - {self.trade_date}>"
