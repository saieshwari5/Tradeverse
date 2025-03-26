# from app import db

# class Portfolio(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     stock_symbol = db.Column(db.String(10), nullable=False)
#     quantity = db.Column(db.Float, nullable=False)
#     avg_price = db.Column(db.Float, nullable=False)

#     @property
#     def total_value(self):
#         return round(self.quantity * self.avg_price, 2)

# class Transaction(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
#     stock_symbol = db.Column(db.String(10), nullable=False)
#     quantity = db.Column(db.Float, nullable=False)
#     price = db.Column(db.Float, nullable=False)
#     order_type = db.Column(db.String(4), nullable=False)  # BUY/SELL
#     timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())


from app import db

class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    stock_symbol = db.Column(db.String(10), nullable=False)
    quantity = db.Column(db.Float, nullable=False)
    avg_price = db.Column(db.Float, nullable=False)

    @property
    def total_value(self):
        return round(self.quantity * self.avg_price, 2)

class Transaction(db.Model):
    __tablename__ = 'stock_transaction'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    stock_symbol = db.Column(db.String(10), nullable=False)
    quantity = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float, nullable=False)
    order_type = db.Column(db.String(4), nullable=False)  # BUY/SELL
    timestamp = db.Column(db.DateTime, default=db.func.current_timestamp())