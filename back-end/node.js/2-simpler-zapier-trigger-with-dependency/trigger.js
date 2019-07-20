const request = require('request');

const zapier_webhook_url = 'https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b3/';

// A simpler version for a GET request (but requires a third party dependency).
request(zapier_webhook_url, function onResponse(error, response, body) {
    if (error) {
        console.error('Zapier webhook request failed.');
        throw error;
    }

    console.log('Zapier webhook request was successful.');
});
