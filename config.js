// Configuration for Massive API
// NOTE: In production, use environment variables and a backend proxy
// For local development, this works fine but DON'T commit your API key to public repos

const CONFIG = {
    MASSIVE_API_KEY: 'cbINg5dQvzGW08GFpvr3va920AAepLxH',
    MASSIVE_BASE_URL: 'https://api.massive.com',

    // Cache duration in milliseconds (5 minutes)
    CACHE_DURATION: 5 * 60 * 1000,

    // Symbols
    SYMBOLS: {
        SPY: 'SPY',
        VIX: 'VIX'
    }
};
