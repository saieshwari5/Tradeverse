from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from app import app
from app.models import User, Transaction  # Import necessary models

app = Flask(__name__)
app.config.from_object('app.config.Config')
db = SQLAlchemy(app)

def get_leaderboard_data():
    """
    Fetches and ranks users for the leaderboard.
    Calculates total portfolio value for each user and ranks them using a JOIN.
    This approach is generally more efficient than iterating through users and querying transactions separately.
    """

    # Use a JOIN to efficiently calculate the total portfolio value for each user
    users_with_value = db.session.query(
        User.id,
        User.username,
        db.func.sum(
            db.case(
                [
                    (Transaction.order_type == 'BUY', Transaction.quantity * Transaction.price),
                    (Transaction.order_type == 'SELL', -Transaction.quantity * Transaction.price)
                ],
                else_=0  # Handle other order types if needed
            )
        ).label('total_portfolio_value')
    ).outerjoin(Transaction, User.id == Transaction.user_id)

    users_with_value = users_with_value.group_by(User.id).order_by(db.desc('total_portfolio_value')).all()

    ranked_data = []
    for index, user in enumerate(users_with_value):
        ranked_data.append({
            'rank': index + 1,
            'user_id': user.id,
            'username': user.username,
            'portfolio_value': user.total_portfolio_value or 0  # Handle cases with no transactions
        })

    return ranked_data