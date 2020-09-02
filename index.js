const fs = require("fs"),
    downloadVideos = require("./modules/downloadVideos.js"),
    { file, videos_path } = require("./config/config.json");

downloadVideos(fs.readFileSync(file, "utf8").split("\n"),
        videos_path,
        title => console.log(`Downloaded ${title}`),
        title => console.log(`Error downloading ${title}`))
    .then(() => console.log("Downloading finished"));