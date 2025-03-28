from flask import Blueprint, jsonify, render_template, session
from flask_login import login_required, current_user
from app import db
from app.models.portfolio import Portfolio

portfolio_bp = Blueprint('portfolio', __name__)

@portfolio_bp.route('/api/portfolio', methods=['GET'])
@login_required
def view_portfolio():
    user_id = current_user.id
    portfolio_data = Portfolio.query.filter_by(user_id=user_id).first()
    
    if portfolio_data:
        return jsonify({
            'status': 'success',
            'portfolio': portfolio_data.to_dict()  # Assuming you have a to_dict method
        })
    return jsonify({
        'status': 'error',
        'message': 'Portfolio not found'
    }), 404