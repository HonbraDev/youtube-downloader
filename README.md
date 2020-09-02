# youtube-downloader
Batch YouTube Downloader in node.js

## Setup

### Download node.js

You can download node.js from [nodejs.org](https://nodejs.org/en/) (select LTS)

#### How to tell if you have node.js

Open terminal (or your OS' counterpart) and type this command:

    node -v
    
If you have node.js this command will show you its version.

### Install modules

Open terminal (or your OS' counterpart), navigate to where you downloaded youtube-downloader and type this command:

    npm install

## Downloading videos

### Step 1

Paste the videos you want to download into ```config/videos.txt```.

*Note: one video per line*

### Step 2

Open terminal (or your OS' counterpart), navigate to where you downloaded youtube-downloader and type this command:

    npm start

The downloaded videos will be in ```videos/```

## Further configuration

### Changing the videos directory or input file

Both options are located in ```config/config.json```.
