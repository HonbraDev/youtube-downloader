module.exports = (id, key) => {
    return new Promise((resolve) => {
        var fetch = require("node-fetch");
        fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${key}`)
            .then(response => response.json())
            .then(response => {
                if (response.kind == "youtube#playlistItemListResponse") {
                    var ids = [];
                    response.items.forEach(function(elem) {
                        ids.push(elem);
                    });
                    resolve(ids);
                } else {
                    throw new Error(response.error.message);
                }
            });
    });
};