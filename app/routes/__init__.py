from flask import Blueprint

# Import all route Blueprints
from app.routes.auth import auth
from app.routes.nse import nse_bp
from app.routes.leaderboard import leaderboard_bp
from app.routes.buysell import buysell
from app.routes.progress import progress_bp 
from app.routes.portfolio import portfolio_bp

def register_blueprints(app):
    """Registers all Blueprint routes."""
    app.register_blueprint(auth, url_prefix="/auth")  # Authentication routes
    app.register_blueprint(nse_bp, url_prefix="/nse")
    app.register_blueprint(leaderboard_bp, url_prefix="/leaderboard")
    app.register_blueprint(buysell, url_prefix="/buysell")
    app.register_blueprint(progress_bp, url_prefix="/progress")
    app.register_blueprint(portfolio_bp, url_prefix="/portfolio")
    