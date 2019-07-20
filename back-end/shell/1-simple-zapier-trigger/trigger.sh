#!/bin/bash

# A variable to make this easier to read/edit.
zapier_webhook_url="https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b/"

# This line sends the request to the Zapier webhook.
wget -q $zapier_webhook_url

# Success or failure? - more info: https://askubuntu.com/questions/29370/how-to-check-if-a-command-succeeded
if [ $? -eq 0 ]; then
    echo "Zapier webhook request was successful"
else
    echo "Zapier webhook request failed"
fi
