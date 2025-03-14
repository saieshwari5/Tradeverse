from app import db

class Leaderboard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), unique=True, nullable=False)
    rank = db.Column(db.Integer, nullable=False)
    virtual_balance = db.Column(db.Float, nullable=False)
