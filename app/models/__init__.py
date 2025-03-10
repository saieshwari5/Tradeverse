from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
#keep all the models defined together 
# whenver defining new model, put it here
from .user import User
from .bhavcopy import BhavCopy
