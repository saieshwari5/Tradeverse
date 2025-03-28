from .. import db  # Change from 'from app import db'

class BhavCopy(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    symbol = db.Column(db.String(50), nullable=False)
    series = db.Column(db.String(10), nullable=False)  # Add this line
    trade_date = db.Column(db.Date, nullable=False)
    prev_close = db.Column(db.Float, nullable=False)
    open_price = db.Column(db.Float, nullable=False)
    high = db.Column(db.Float, nullable=False)
    low = db.Column(db.Float, nullable=False)
    last_price = db.Column(db.Float, nullable=False)
    close_price = db.Column(db.Float, nullable=False)
    avg_price = db.Column(db.Float, nullable=False)
    volume = db.Column(db.Integer, nullable=False)
    turnover_lacs = db.Column(db.Float, nullable=False)
    no_of_trades = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<BhavCopy {self.symbol} - {self.trade_date}>"
