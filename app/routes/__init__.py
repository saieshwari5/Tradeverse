from flask import Blueprint

# Import all route Blueprints
from app.routes.auth import auth
from app.routes.nse import nse_bp

def register_blueprints(app):
    """Registers all Blueprint routes."""
    app.register_blueprint(auth, url_prefix="/auth")  # Authentication routes
    app.register_blueprint(nse_bp, url_prefix="/nse")
