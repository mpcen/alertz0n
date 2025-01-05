# Alertz0n

This is a simple Amazon price tracker built in TypeScript that monitors the price of an Amazon product and sends a notification to a Discord server via a webhook if the price drops below a specified threshold. I used it to acquire a Ryzen 7 9800x3d CPU. You can use it for w/e you want.

![Screenshot](screenshot.png 'Screenshot')

## Features

-   Scrapes product prices from Amazon using `cheerio`.
-   Uses `fetch` for HTTP requests.
-   Sends price drop alerts to a Discord channel via a webhook.
-   Configurable price threshold, product ID, and check interval.
-   Written in TypeScript for type safety and maintainability.

### Prerequisites

-   **Node.js**: Install [Node.js](https://nodejs.org/) (v20 or higher).
-   **npm or yarn**: Included with Node.js, required for managing dependencies.
-   **Discord Webhook**: Create a webhook in your Discord server:
    1. Navigate to your Discord server.
    2. Go to **Server Settings > Integrations > Webhooks**.
    3. Create a new webhook and copy the URL.
-   **Amazon Product ID**: Identify the Amazon Standard Identification Number (ASIN) for the product you want to track. The ASIN can be found in the product URL, e.g., `https://www.amazon.com/dp/B0DKFMSMYK` (ASIN: `B0DKFMSMYK`). This is the `AMAZON_PRODUCT_ID` in the `.env` file.

---

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/alertz0n.git
    cd alertz0n
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Config**:

    - Copy the `.env.example` file in the project root directory and paste it as `.env`.
    - Replace the environment variables to the `.env` file to your configuration:
        ```env
        DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-id/your-webhook-token
        AMAZON_PRODUCT_ID=your-amazon-asin
        PRICE_THRESHOLD=your-threshold
        CHECK_INTERVAL=your-interval
        ```
    - Replace the placeholder values with your Discord webhook URL, Amazon ASIN, price threshold, and check interval (in milliseconds).

4. **Run the tracker**:

    ```bash
    npm start
    ```

## License

```
MIT
```

## Issues and Contributions

Feel free to submit issues and pull requests to this repository. Contributions are welcome!
