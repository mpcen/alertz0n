import dotenv from 'dotenv';

dotenv.config();

type AppConfig = {
    price_threshold: number;
    discord_webhook_url: string;
    amazon_product_id: string;
    check_interval_ms: number;
};

export const getConfig = (): AppConfig => {
    if (!process.env.PRICE_THRESHOLD || isNaN(Number(process.env.PRICE_THRESHOLD))) {
        throw new Error('price_threshold must be specified as a number');
    }

    if (!process.env.DISCORD_WEBHOOK_URL) {
        throw new Error('discord_webhook_url must be specified');
    }

    if (!process.env.AMAZON_PRODUCT_ID) {
        throw new Error('amazon_product_id must be specified');
    }

    if (!process.env.CHECK_INTERVAL || isNaN(Number(process.env.CHECK_INTERVAL))) {
        throw new Error('check_interval_ms must be specified as a number');
    }

    return {
        price_threshold: Number(process.env.PRICE_THRESHOLD),
        discord_webhook_url: process.env.DISCORD_WEBHOOK_URL,
        amazon_product_id: process.env.AMAZON_PRODUCT_ID,
        check_interval_ms: Number(process.env.CHECK_INTERVAL),
    };
};
