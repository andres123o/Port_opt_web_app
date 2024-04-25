import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import yfinance as yf
import seaborn as sns
sns.set_style('whitegrid')

from pypfopt import EfficientFrontier
from pypfopt import risk_models
from pypfopt import expected_returns
from pypfopt import objective_functions
from static.Backend.pypfopt_re import plot_covariance, plot_dendrogram, plot_efficient_frontier, plot_weights
from pypfopt import HRPOpt

def optimizador(data):
    tickets = data
    
    df = yf.download(tickets, start = '2023-01-01', end = '2023-12-31', rounding = True, interval = '1mo')
    price = df['Close']
    
    
    
    return price
    