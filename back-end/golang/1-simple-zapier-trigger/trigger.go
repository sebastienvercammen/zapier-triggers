package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	const ZapierWebhookURL = "https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b3/"

	res, err := http.Get(ZapierWebhookURL)
	if err != nil {
		log.Println("Zapier webhook request failed.")
		log.Fatalln(err)
	}

	data, err := ioutil.ReadAll(res.Body)
	res.Body.Close()

	if err != nil {
		log.Println("Zapier webhook request failed.")
		log.Fatalln(err)
	}

	// You can use the response data via:
	fmt.Printf("%s", data)

	log.Println("Zapier webhook request was successful.")
}
