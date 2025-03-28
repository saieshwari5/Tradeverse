from app.extensions import db
from datetime import datetime

class Leaderboard(db.Model):
    __tablename__ = 'leaderboard'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Changed from 'user.id' to 'users.id'
    total_value = db.Column(db.Float, default=0.0)
    rank = db.Column(db.Integer)
    last_updated = db.Column(db.DateTime, default=datetime.utcnow)
