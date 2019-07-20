# Trigger a simple Zapier webhook

To keep it simple, we use [`file_get_contents`](https://php.net/file_get_contents) on an external URL. This requires [`allow_url_fopen = On`](https://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen) in your configuration (default = already enabled).

For security reasons, keep [`allow_url_include = Off`](https://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-include) (default = already disabled).

## Running the script on a webpage visit

You need a working web server that supports PHP. Just upload the trigger.php file to your preferred location, and visit the URL (e.g. `your.domain.com/trigger.php`).

Setting up a web server and PHP is beyond the scope of this repository.

## Running the script from a command line

1. Make sure you're in the right folder w/ your command line.
2. Make sure the `php` command is accessible from the command line.
3. Run the script: `php trigger.php`
