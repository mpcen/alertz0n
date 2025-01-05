export async function sendDiscordMessage(
    webhook_url: string,
    amzn_url: string
): Promise<void> {
    const content = `A product you are watching has dropped in price: ${amzn_url}`;

    try {
        const response = await fetch(webhook_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });

        if (response.ok) {
            console.log('Message sent to Discord!');
        } else {
            console.error(
                `Failed to send message to Discord: ${response.status} ${response.statusText}`
            );
        }
    } catch (error) {
        console.error('Error sending message to Discord:', error);
    }
}
