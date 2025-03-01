from flask import Blueprint

# Import all route Blueprints
from app.routes.auth import auth

def register_blueprints(app):
    """Registers all Blueprint routes."""
    app.register_blueprint(auth, url_prefix="/auth")  # Authentication routes
