from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Portfolio, Transaction
from datetime import datetime
import pandas as pd

portfolio_bp = Blueprint('portfolio', __name__)

def calculate_portfolio_value(transactions):
    """Calculate cumulative portfolio value over time"""
    if not transactions:
        return []

    # Convert transactions to a DataFrame
    df = pd.DataFrame([{
        'date': txn.timestamp,
        'value': txn.quantity * txn.price * (1 if txn.order_type.upper() == 'BUY' else -1)
    } for txn in transactions])

    # Sort transactions by date
    df = df.sort_values(by='date')

    # Calculate cumulative value over time
    df['cumulative'] = df['value'].cumsum()

    return [{
        'date': row['date'].strftime('%Y-%m-%d'),
        'value': round(row['cumulative'], 2)
    } for _, row in df.iterrows()]

@portfolio_bp.route('/portfolio', methods=['GET'])
@login_required
def get_portfolio():
    try:
        # Fetch user holdings
        holdings = Portfolio.query.filter_by(user_id=current_user.id).all()
        
        if not holdings:
            return jsonify({"message": "No holdings found.", "holdings": []}), 200

        # Debugging - Check what holdings are fetched
        print(f"User {current_user.id} Holdings: {holdings}")

        portfolio_data = [{
            "stock_symbol": h.stock_symbol,
            "quantity": h.quantity,
            "avg_price": h.avg_price,
            "total_value": h.total_value
        } for h in holdings]

        return jsonify({"status": "success", "holdings": portfolio_data}), 200

    except Exception as e:
        print(f"Error fetching portfolio: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500

@portfolio_bp.route('/progress/portfolio_progress', methods=['GET'])
@login_required
def portfolio_progress():
    try:
        transactions = Transaction.query.filter_by(
            user_id=current_user.id
        ).order_by(Transaction.timestamp.asc()).all()

        if not transactions:
            return jsonify({"message": "No transactions found", "data": []}), 200

        # Debugging - Check transactions retrieved
        print(f"User {current_user.id} Transactions: {transactions}")

        data = calculate_portfolio_value(transactions)

        return jsonify({
            'status': 'success',
            'data': data,
            'last_updated': datetime.utcnow().isoformat()
        }), 200

    except Exception as e:
        print(f"Error fetching portfolio progress: {e}")
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500
