module.exports = (ids, path, success, error) => {
    var ytdl = require("ytdl-core"),
        downloadVideo = require("./downloadVideo.js");
    return new Promise(async(resolve, reject) => {
        for (var i = 0;  i < ids.length; i++) {
            var info = await ytdl.getBasicInfo(ids[i]);

            await downloadVideo(ids[i],
                    `${path + info.videoDetails.title}.mp4`)
                .then(() => {
                    if (success) success(info.videoDetails.title);
                })
                .catch(() => {
                    if (error) error(info.videoDetails.title);
                });
        }
        resolve();
    });
};