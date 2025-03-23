from flask import Blueprint, jsonify
from app import db
from app.models import User
from app.models.leaderboard import Leaderboard

leaderboard_bp = Blueprint("leaderboard", __name__)

@leaderboard_bp.route("/leaderboard", methods=["GET"])  # Changed route to match frontend
def get_leaderboard():
    leaderboard_data = Leaderboard.query.order_by(Leaderboard.rank.asc()).all()

    leaderboard_list = [
        {
            "rank": entry.rank,
            "username": User.query.get(entry.user_id).username if User.query.get(entry.user_id) else "Unknown",
            "virtual_balance": entry.virtual_balance
        }
        for entry in leaderboard_data
    ]

    return jsonify(leaderboard_list), 200