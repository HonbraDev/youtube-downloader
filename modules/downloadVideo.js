module.exports = (id, path) => {
    var ytdl = require("ytdl-core"),
        fs = require("fs");
    return new Promise((resolve, reject) => {
        var dl = ytdl(id);
        dl.on("error", e => {
            reject(e);
        });
        dl.pipe(fs.createWriteStream(path))
            .on("finish", () => {
                resolve();
            });
    });
};