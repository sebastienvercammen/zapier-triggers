# Trigger a simple Zapier webhook

## Running the script manually

1. Make sure you're in the right folder. When listing the files (e.g. with `ls`), you should see [`trigger.sh`](trigger.sh).
2. Make the script executable: `chmod +x trigger.sh`
3. Run it with `./trigger.sh`.

## Setting up a scheduled task on Unix-like systems

Want to trigger a Zapier webhook on a fixed schedule?

**To make this simpler for you, we use the text editor `nano`.** If this isn't installed on your system by default, you can install it via `apt-get update && apt-get install nano`.

1. Run a shell (command line) on your server.
2. Edit your [crontab](https://en.wikipedia.org/wiki/Cron) by running (as a single line): `EDITOR=nano crontab -e`
3. Use [this webpage](https://crontab.guru/) to figure out the right cron schedule expression.
4. Add your schedule at the bottom of the file: e.g. every morning at 5am: `0 5 * * *   /home/MY-USERNAME/zapier-triggers/shell/1-simple-zapier-trigger/trigger.sh`
5. Exit and save by:
    1. Pressing **CTRL+X** to quit + prompt for save.
    2. When asked _"Save modified buffer?"_, press **Y**.
    3. When asked _"File name to write"_, just press **Enter** without changing the filename.
6. If done successfully, your screen should say _"crontab: installing new crontab"_ without errors after it.
