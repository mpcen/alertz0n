import * as cheerio from 'cheerio';
import { sendDiscordMessage } from './discord.js';

export async function fetchPage(url: string): Promise<string | null> {
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        if (response.ok) {
            return await response.text();
        } else {
            console.error(
                `Failed to fetch ${url}: ${response.status} ${response.statusText}`
            );
            return null;
        }
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return null;
    }
}

export async function checkPrice(
    amzn_url: string,
    price_threshold: number,
    discord_webhook_url: string
): Promise<void> {
    const html = await fetchPage(amzn_url);

    if (!html) {
        console.error('Failed to fetch the Amazon product page.');
        return;
    }

    const $ = cheerio.load(html);
    const list_price_text = $('#centerCol').find('.a-price-whole').first().text();
    const stripped_price = parseFloat(
        list_price_text.replace('$', '').replace(',', '')
    );

    console.log(
        `[${new Date().toLocaleTimeString()}] - Current Price: ${
            isNaN(stripped_price) ? 'Out of Stock' : `$${stripped_price}`
        }`
    );

    if (!isNaN(stripped_price) && stripped_price <= price_threshold) {
        await sendDiscordMessage(discord_webhook_url, amzn_url);
    }
}
