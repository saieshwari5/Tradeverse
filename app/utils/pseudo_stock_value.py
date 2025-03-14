import time
import random

def pseudo_stock_value(open_price, close_price, high_price, low_price):
    current_time = time.localtime()
    seconds_since_midnight = current_time.tm_hour * 3600 + current_time.tm_min * 60 + current_time.tm_sec
    random.seed(seconds_since_midnight)
    progress = seconds_since_midnight / 86400
    base_price = open_price + (close_price - open_price) * progress
    noise_range = (high_price - low_price) * 0.05  
    noise = random.uniform(-noise_range, noise_range)
    stock_value = max(min(base_price + noise, high_price), low_price)
    
    return round(stock_value, 2)
