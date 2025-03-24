# Tradeverse/app/routes/leaderboard_routes.py
from flask import Blueprint, jsonify
from app.utils.leaderboard_utils import get_leaderboard_data

leaderboard_bp = Blueprint('leaderboard', __name__, url_prefix='/api')

@leaderboard_bp.route('/leaderboard', methods=['GET'])  # Use GET for leaderboard
def get_leaderboard():
    try:
        data = get_leaderboard_data()  # Fetch and rank data
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500