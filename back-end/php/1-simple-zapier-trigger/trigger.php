<?php

$zapier_webhook_url = 'https://hooks.zapier.com/hooks/catch/YOUR-ZAPIER-WEBHOOK/oxZ7q6b3/';

// file_get_contents on an external URL requires "allow_url_fopen".
// More info: https://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen
$data = file_get_contents($zapier_webhook_url);

// Output result as text. Just for testing purposes.
if ($data === FALSE) {
    echo 'Zapier webhook request failed.';
} else {
    echo 'Zapier webhook request was successful.';
}

?>
