var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone={
    title:'this is my artcle',
    hedding:'Article one',
    par:`<p>This is my article paragraph<p>`
};
function create(data){
    var title=data.title;
    var hedding=data.hedding;
    var par=data.par;
var htmlTemplate=
    `<html>
    <head>
    <link rel="stylesheet" type="text/css" href="ui/style.css">
    <title>${title}</title>
    </head>
    <body>
    <div class="cont">
    <div>
    <h1 class="new">${hedding}</h1>
    </div>
    <div>
    ${par}
    </div>
    </div>
    </body>
    </html>`;
    return(htmlTemplate);
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
    res.send(create(articleone));
});
app.get('/Article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log('IMAD course app listening on port ${port}!');
});
