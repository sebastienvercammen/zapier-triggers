/*
 * WARNING:
 *      This code sends a simple request to your own back-end, which will then trigger Zapier.
 *      Without authentication or validation on the back-end, this can be abused to infinitely
 *      trigger your Zapier webhook, exhausting your account's Zap limit.
 *
 *      Always validate your requests. Only run a Zap when it makes sense (e.g. new payment
 *      validated via Stripe).
 */

// Example URL including a GET parameter for validation on the back-end.
// More info: https://en.wikipedia.org/wiki/Query_string
const BACKEND_URL = 'https://your.domain.com/url-to-trigger-zapier?some-GET-parameter-for-validation=ABC123';


/* Descriptive function names for our events. You can name these yourself.
 *
 * We've separated these from the fetch() request to:
 *      1) make the code more readable
 *      2) make it clear what the function's scope is
 *      3) make it clearer what functions can be moved out to a separate file/module
 *      4) re-use the reference to the same, defined, function - preventing memory leaks
 *          when anonymous functions are misused in loops
 *      5) so we could write code comments longer than the code itself - hi, you! 👋
 */

function onBackendRequestSuccess(response) {
    // Success happens here.
    console.log('Back-end request successful.');
    console.log(response);
}

function onBackendRequestFailure(error) {
    // Failure arrives here.
    console.error('Back-end request failed.');
    throw error;
}

// Do the thing.
// More info on Promises (then/catch): https://scotch.io/tutorials/javascript-promises-for-dummies
fetch(BACKEND_URL)
    .then(onBackendRequestSuccess)
    .catch(onBackendRequestFailure);
