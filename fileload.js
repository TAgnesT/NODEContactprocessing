const fs = require('fs');


function load(filename, res) {
    fs.readFile(filename, function (err, data) {
        
        try {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        } catch (e) {
            console.error(e);
            res.writeHead(500, {'Content-Type': 'text/html'});
            let errorContent = fs.readFileSync('error.html').toString();
            res.end(errorContent);
            return;
        }

    });
}

exports.load = load;