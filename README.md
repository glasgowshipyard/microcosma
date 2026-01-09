# Microcosma: ReTail Risk Hedgehog 🦔

A lightweight, automated web application for managing a systematic "black swan" insurance strategy for retail investors.

## What is This?

**Microcosma** is a tool for implementing a disciplined, retail-scale **tail-risk hedging strategy** inspired by the philosophy of **Nassim Nicholas Taleb** and the explosive crisis-era returns of **Mark Spitznagel's Universa Investments**.

Instead of trying to time market crashes, you continuously pay a small, predefined annual premium—like insurance—to buy extremely cheap, far out-of-the-money (OTM) put options on the S&P 500 (via SPY). If a severe crash (-30%, -50%) occurs, these options are designed to pay out exponentially, offsetting portfolio losses.

## Core Features

- **Hedge Sizing Calculator**: Determines how many put contracts you need to hedge your portfolio exposure
- **Exposure Capacity Calculator**: Calculates the maximum portfolio size your hedge budget can protect
- **VIX-Based Budget Adjustment**: Automatically scales your hedge budget based on market volatility
  - VIX < 20: Use 100% of budget (buy when insurance is cheap)
  - VIX 20-30: Use 75% of budget
  - VIX > 30: Use 50% of budget (reduce when insurance is expensive)

## The Strategy

1. Define your annual hedge budget (e.g., $1,500)
2. Select target crash levels (-30%, -50%)
3. Choose what % of losses you want to offset (e.g., 50%)
4. The app calculates optimal position sizing for deep OTM SPY puts
5. Adjust purchases based on VIX to avoid overpaying during panic

**The Hedgehog has one powerful defense; this is yours.**

## Tech Stack

- HTML with Tailwind CSS
- Vanilla JavaScript
- Bunny Fonts (monospace)
- Serverless-ready architecture
- Financial data APIs (Twelve Data, Yahoo Finance)

## Getting Started

1. Clone the repository
2. Open `index.html` in a browser
3. Configure your portfolio exposure and hedge budget
4. Let the hedgehog do the math

## Disclaimer

This tool is for educational purposes only. Options trading carries substantial risk of total loss. Deep OTM puts often expire worthless. This is not financial advice. You can and will lose money. Consult a qualified financial advisor before implementing any options strategy.

## Philosophy

This is a personal strategic tool, not a real-time trading platform. Accuracy for strategic planning is prioritized over sub-second latency. The hedgehog is patient, disciplined, and systematic.

## License

MIT

---

Built with conviction. Hedged with discipline. 🦔
