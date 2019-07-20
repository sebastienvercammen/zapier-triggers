# A simpler method of triggering a Zapier webhook

This requires the [`request` library on npm](https://www.npmjs.com/package/request).

Can be installed via:
* Locally: `npm install` (installs the dependency via [package.json](package.json))
* Globally: `npm install -g request`

It's recommended to install packages **locally**.

## Running the script on a webpage visit

You have two options:
1. Set up an existing web server to run Node.js code.
2. Run your own web server (or framework) in Node.js (e.g. fastify, koa, express, restify) and implement the example code. _(recommended)_

## Running the script from a command line

1. Make sure you're in the right folder w/ your command line.
2. Make sure the `node` command is accessible from the command line.
3. Run the script: `node trigger.js`
