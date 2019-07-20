# Zapier Trigger Examples

A series of examples to trigger Zapier webhooks whenever you want. Plug it into your no-code workflow to enhance your no-code options with the full potential of Zapier integrations.

Replace the webhook URLs in the examples with your own.

Every folder and example has its own README file with details.

## Front-end code

1. [Trigger a back-end in the background on a webpage's visit (JavaScript + AJAX)](front-end/js/1-ajax-trigger-back-end-on-visit)

## Back-end languages so far (alphabetical order)

* [PHP](back-end/php)
* [Python](back-end/python)
* [Shell Script](back-end/shell)

## Ideas for future content

Ideas are unordered. You're welcome to pick the one you like most and contribute your own material.

### General

* Back-end validation of GET/POST parameters (to be used w/ [front-end/js]) to avoid abuse ([read code comments here](front-end/js/1-ajax-trigger-back-end-on-visit/index.js)).
* Send GET/POST data to the Zapier webhook.
* In some languages, where web server integration (nginx/apache2) is uncommon or not recommended, add an example on implementing a web server + Zapier trigger w/ the language's best HTTP library/framework.
* [Trigger multiple webhooks in a single webhook request](https://zapier.com/help/webhooks/#triggering-multiple-webhooks-at-once).
* [Trigger multiple Zapier events w/ a single webhook request](https://zapier.com/help/webhooks/#sending-an-array-of-objects).
* [Receive webhook requests from Zapier (i.e. be the receiver, not the sender)](https://zapier.com/help/webhooks/#catching-the-webhooks).
* [Use different Zapier Payload Types](https://zapier.com/help/webhooks/#inspecting-requests-again).

### Shell Scripting

* [Use `cURL` to send POST data to Zapier](https://zapier.com/help/webhooks/#generating-your-own-requests).
