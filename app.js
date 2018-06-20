const fs = require('fs');
const mime = require('mime');
const path = require('path');

function getDirContent (pa, callback) {
    var res = [];
    fs.readdir(pa, function(err, files) {
        if (!err) {
            for (var i = 0; i < files.length; i++) {
                file = files[i];
                if (file[0] != ".") {
                    stats = fs.statSync(path.join(pa, file));
                    if (stats.isDirectory())
                        res.push({name: file, type: "dir"});
                    else
                        res.push({name: file, type: mime.getType(path.join(pa, file))});
                }
            }
            callback(undefined, res);
        } else callback(new Error("Bad path"), []);
    });
}
exports.getDirContent = getDirContent;