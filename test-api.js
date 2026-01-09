// Test script to verify Massive API connectivity
// Run with: node test-api.js

const API_KEY = 'cbINg5dQvzGW08GFpvr3va920AAepLxH';
const BASE_URL = 'https://api.massive.com';

async function testAPI() {
    console.log('🦔 Testing Massive API connection...\n');

    try {
        // Test SPY using previous close endpoint (available on free tier)
        console.log('Fetching SPY data...');
        const spyResponse = await fetch(`${BASE_URL}/v2/aggs/ticker/SPY/prev?adjusted=true&apiKey=${API_KEY}`);

        if (!spyResponse.ok) {
            const errorText = await spyResponse.text();
            throw new Error(`SPY request failed: ${spyResponse.status} ${spyResponse.statusText}\n${errorText}`);
        }

        const spyData = await spyResponse.json();
        console.log('SPY Response:', JSON.stringify(spyData, null, 2));

        const spyPrice = spyData.results?.[0]?.c; // Close price
        console.log(`\n✅ SPY Price (Previous Close): $${spyPrice}\n`);

        // Test VIX
        console.log('Fetching VIX data...');
        const vixResponse = await fetch(`${BASE_URL}/v2/aggs/ticker/VIX/prev?adjusted=true&apiKey=${API_KEY}`);

        if (!vixResponse.ok) {
            const errorText = await vixResponse.text();
            throw new Error(`VIX request failed: ${vixResponse.status} ${vixResponse.statusText}\n${errorText}`);
        }

        const vixData = await vixResponse.json();
        console.log('VIX Response:', JSON.stringify(vixData, null, 2));

        const vixValue = vixData.results?.[0]?.c; // Close price
        console.log(`\n✅ VIX Value (Previous Close): ${vixValue}\n`);

        console.log('🦔 API test successful!');

    } catch (error) {
        console.error('❌ API test failed:', error.message);
        console.error(error);
    }
}

testAPI();
