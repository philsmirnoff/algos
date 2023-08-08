# Solve this HackerRank question highly profitable months using python3 . Highly Profitable Months
# +
# The stocks of a company are being surveyed to analyze the net profit of the company over a period.
# For an analysis parameter k, an interval of k consecutive months is said to be highly profitable if the values of the stock prices are strictly increasing for those months.
# Given the stock prices of the company for n months and the analysis parameter K, find the number of highly profitable intervals.
# Example
# stockPrices = [5, 3, 5, 7, 8]
# k = 3
# These are the intervals of k months in which the stock prices are strictly increasing:
# You sent
# Hence the answer is 2.
# Note: If the interval length is 1, each subarray of length 1 is highly profitable.
# Function Description
# Complete the function countHighlyProfitablelntervalsinthe editor below.
# countHighlyProfitableintervals has the following parameters:
# int stockPrices[n]: the stock prices for n months int k: the analysis parameter
# ん
# Returns
# int: the number of highly profitable intervals

# Complete the function countHighlyProfitablelntervalsinthe editor below.
# countHighlyProfitableintervals has the following parameters:
# int stockPrices[n]: the stock prices for n months int k: the analysis parameter
# ん
# Returns
# int: the number of highly profitable intervals

def countHighlyProfitableIntervals(stockPrices, k):
    # Write your code here
    count = 0
    for i in range(len(stockPrices) - k + 1):
        if stockPrices[i] < stockPrices[i + k - 1]:
            count += 1
    return count