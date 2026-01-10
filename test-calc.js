// Test script to verify calculator math is correct
// Based on Deepseek's analysis and options profit formulas

console.log('🦔 Testing Microcosma Calculator Math\n');

// Test Scenario from Deepseek
console.log('=== DEEPSEEK TEST SCENARIO ===');
const spyAtTrade = 500;
const strikeDistance = 30; // 30% OTM
const strikePrice = Math.floor(spyAtTrade * (1 - strikeDistance / 100));
const premiumPerShare = 0.64;
const spyAtCrash = 300; // 40% drop

console.log(`SPY at trade: $${spyAtTrade}`);
console.log(`Strike: $${strikePrice} (${strikeDistance}% OTM)`);
console.log(`Premium: $${premiumPerShare}/share = $${premiumPerShare * 100}/contract`);
console.log(`SPY at crash: $${spyAtCrash} (${((spyAtTrade - spyAtCrash) / spyAtTrade * 100).toFixed(0)}% drop)`);

// Calculate profit
const intrinsicValue = strikePrice - spyAtCrash;
const profitPerShare = intrinsicValue - premiumPerShare;
const profitPerContract = profitPerShare * 100;

console.log(`\nIntrinsic value: $${intrinsicValue}/share`);
console.log(`Profit per share: $${intrinsicValue} - $${premiumPerShare} = $${profitPerShare}`);
console.log(`Profit per contract: $${profitPerShare} × 100 = $${profitPerContract}`);

// Test with portfolio
console.log('\n=== USER EXAMPLE TEST ===');
const portfolio = 100000;
const perPurchaseBudget = 250;
const buyFrequency = 4; // quarterly
const spyPrice = 600;
const strike30pct = Math.floor(spyPrice * 0.7); // 30% OTM
const premium = 0.64;

const costPerContract = premium * 100;
const contractsPerPurchase = Math.floor(perPurchaseBudget / costPerContract);
const activeContractsInCrash = contractsPerPurchase;
const totalAnnualCost = (contractsPerPurchase * costPerContract) * buyFrequency;

console.log(`Portfolio: $${portfolio.toLocaleString()}`);
console.log(`Budget per purchase: $${perPurchaseBudget}`);
console.log(`Buy frequency: ${buyFrequency}x/year`);
console.log(`SPY price: $${spyPrice}`);
console.log(`Strike (30% OTM): $${strike30pct}`);
console.log(`Premium: $${premium}/share = $${costPerContract}/contract`);

console.log(`\nContracts per purchase: ${contractsPerPurchase}`);
console.log(`Active contracts in crash: ${activeContractsInCrash}`);
console.log(`Annual cost: $${totalAnnualCost}`);

// Calculate payout at strike using volatility-based approximation
// OLD (WRONG): intrinsicAtStrike = spyPrice - strike30pct = $210/share
// NEW (CORRECT): At strike, intrinsic = $0. Value comes from implied volatility.
const estimatedOptionPrice = strike30pct * 0.12; // 12% of strike during high-vol crash
const profitAtStrike = (estimatedOptionPrice - premium) * 100;
const totalProfit = profitAtStrike * activeContractsInCrash;

const portfolioLoss30pct = portfolio * 0.30;
const coverage = (totalProfit / portfolioLoss30pct) * 100;

console.log(`\nAt 30% crash (SPY reaches strike $${strike30pct}):`);
console.log(`Intrinsic value at strike: $0/share (ATM put has no intrinsic value)`);
console.log(`Estimated option value (from volatility): $${estimatedOptionPrice.toFixed(2)}/share`);
console.log(`Profit per contract: ($${estimatedOptionPrice.toFixed(2)} - $${premium}) × 100 = $${profitAtStrike.toFixed(0)}`);
console.log(`Total profit from ${activeContractsInCrash} contracts: $${totalProfit.toLocaleString()}`);
console.log(`Portfolio loss: $${portfolioLoss30pct.toLocaleString()}`);
console.log(`Coverage: ${coverage.toFixed(1)}%`);

console.log('\n✅ If calculator shows ~45-50% coverage, math is now correct!');
