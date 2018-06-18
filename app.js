const fs = require('fs');
const mime = require('mime');

const baseDir = "C:/Users/Edgar Pierre/Google Drive/";
files = fs.readdir(baseDir, function(err, files) {
    if (err)
        console.log("Reading error!");
    else
        files.forEach(function(file) {
            if (file[0] != ".") {
                console.log(file);
                stats = fs.statSync(baseDir + file)
                if (stats.isDirectory())
                    console.log("dir")
                else
                    console.log(mime.getType(baseDir + file))
            }
        });
});