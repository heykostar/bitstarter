var express = require('express');
var app = express();
app.use(express.logger());

//buf.toString(encoding)
//fs.readFileSync(filename)
//buf.toString(fs.readFileSynch(index.html))

app.get('/', function(request, response) {
var fs = require('fs');
var data = fs.readFileSync('index.html');
  response.send(data.toString('utf-8'));
});

//response.send(buf.toString(fs.readFileSynch(index.html))) });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
