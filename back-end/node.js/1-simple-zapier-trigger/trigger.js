const https = require('https');

const zapier_webhook_url = 'https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b3/';

/*
 * Node.js handles simple requests differently. To keep things simple, a
 * dependency is needed to wrap the unnecessary complexity.
 *
 * Example "2-simpler-zapier-trigger-with-dependency" shows how to do this.
 */
https.get(zapier_webhook_url, (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    response.on('end', () => {
        console.log('Zapier webhook request was successful.');
    });
}).on('error', (error) => {
    console.error('Zapier webhook request failed.');
    throw error;
});
