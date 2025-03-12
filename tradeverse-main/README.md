make the env file containing, db password, db username, db hostname, db name accordingly according to the config.py 
include your secret key too in env file
the __init__.py files are to ensure all the subdirectories are placed together


the model for user, is defined directly on flask , if done flask migrate the table would be created automatically in your specified db 
