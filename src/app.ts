import { getConfig } from './config.js';
import { checkPrice } from './amazon.js';

async function run(): Promise<void> {
    const config = getConfig();
    const amzn_url = `https://www.amazon.com/dp/${config.amazon_product_id}`;

    while (true) {
        await checkPrice(
            amzn_url,
            config.price_threshold,
            config.discord_webhook_url
        );

        await sleep(config.check_interval_ms);
    }
}

async function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

run().catch((error) => console.error('Error in run():', error));
