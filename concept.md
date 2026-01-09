+++

// Microcosma: ReTail Risk Hedgehog 🦔

/// 🎯 Core Purpose
A lightweight, automated web application designed to manage a defined-budget, "black swan" insurance strategy for retail investors. It calculates optimal position sizing for deep out-of-the-money (OTM) SPY put options to hedge equity portfolios against severe market crashes (-30% to -50%), incorporating volatility-based cost averaging.

/// 📥 Inputs & Data Requirements
The application must accept or fetch the following data:

/// 1. User-Provided Inputs (Configurable)
- PORTFOLIO EXPOSURE ($): The total dollar value of S&P 500 (SPY/SPX) holdings to be hedged.
- **Annual Hedge Budget ($):** The maximum annual premium the user is willing to pay for insurance (e.g., $1,500).
- TARGET CRASH LEVELS (%): The specific market decline percentages to hedge against (e.g., -30%, -50%).
- TARGET HEDGE (% OF LOSS): The percentage of the portfolio's potential loss the hedge should aim to offset (e.g., 50%).

/// 2. Live Financial Data (Fetched via APIs)
- SPY REAL-TIME PRICE: The current trading price of the SPDR S&P 500 ETF.
- VIX INDEX VALUE: The current CBOE Volatility Index reading.
- SPY OPTIONS CHAIN DATA: Premiums (last/ask price) for specific deep OTM put contracts, based on the user's target strike prices and chosen expiration dates.

/// ⚙️ Core Functional Logic
The application performs two primary, interlinked calculations:

/// 1. Hedge Sizing ("How much insurance do I need?")
- INPUT: `Portfolio Exposure`, `Target Crash Level`, `Target Hedge %`, `Put Premium`.
- LOGIC: Calculates the potential portfolio loss for the given crash. Determines the number of put option contracts required so that the estimated payout from those contracts covers the desired percentage (`Target Hedge %`) of that loss.
- OUTPUT: The exact NUMBER OF CONTRACTS TO BUY and the TOTAL CAPITAL REQUIRED to fund that hedge.

/// 2. Exposure Capacity ("How much can I insure with my budget?")
- INPUT: `Annual Hedge Budget`, `Target Crash Level`, `Target Hedge %`, `Put Premium`.
- LOGIC: Works in reverse. Calculates the maximum portfolio exposure the user's fixed budget can hedge effectively, based on the cost of the required put contracts and the desired protection level.
- OUTPUT: The maximum RECOMMENDED PORTFOLIO EXPOSURE ($) that aligns with the user's risk budget and hedging goals.

/// 3. VIX-Based Budget Adjustment
- RULE: Automatically adjusts the effective hedge budget based on prevailing market fear to improve cost efficiency.
--- VIX < 20: Use 100% of standard budget (buy "insurance" when it's cheap).
--- VIX 20-30: Use 75% of standard budget.
--- VIX > 30: Use 50% of standard budget (reduce size when "insurance" is expensive).
- INTEGRATION: This multiplier is applied to the `Annual Hedge Budget` before performing the HEDGE SIZING or EXPOSURE CAPACITY calculations.

/// 🎛️ User Interface & Interaction
- A simple web form for users to input their configuration (Exposure, Budget, Targets).
- Clear display of the two core calculation results.
- A "REFRESH DATA" button to manually trigger fetching the latest market prices and VIX.
- DATA FRESHNESS NOTE: The app should automatically fetch new market data at a conservative interval (e.g., hourly) to manage API costs. The "Refresh" button allows for on-demand updates.

/// 🛠️ Non-Functional & Implementation Notes
- HOSTING: Designed to be deployed as a serverless application (e.g., on Cloudflare Workers).
- DATA STRATEGY: Will need to integrate with financial data APIs (e.g., Twelve Data for quotes, Yahoo Finance for VIX/options data). A caching layer is recommended to respect rate limits.
- PHILOSOPHY: This is a personal strategic tool, not a real-time trading platform. Accuracy for strategic planning is prioritized over sub-second latency.

This conceptual summary provides the complete blueprint for the application's functionality. The implementation can now proceed based on these specifications.
                                                                                                                            +++