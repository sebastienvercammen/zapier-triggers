import urllib

zapier_webhook_url = 'https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b3/'

with urllib.request.urlopen(zapier_webhook_url) as response:
    response_code = response.getcode()

    # You can read response data with:
    # data = response.read()

    if response_code == 200:
        print("Zapier webhook request was successful")
    else:
        print("Zapier webhook request failed")
