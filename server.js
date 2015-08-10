express = require('express');
app = express();
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.sendFile('index.html');
});

app.get('/admin', function(req,res){
  res.sendFile(__dirname + '/public/admin.html');
});

app.listen('8080');

console.log('http://localhost:8080');