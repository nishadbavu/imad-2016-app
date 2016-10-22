var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
var articleone: { title:'this is my artcle',  hedding:'Article one', par:`<p>This is my article paragraph</p>`},
var articletwo:{
     title:'this is my 2nd artcle',
    hedding:'Article two',
    par:`<p>This is my article two paragraph</p>`
},
var articlethree:{
    title:'this is my 3rd artcle',
    hedding:'Article three',
    par:`<p>This is my article three paragraph<p>`}
};
function create(data){
    var t=data.title;
    var hedd=data.hedding;
    var p=data.par;
var htmlTemplate=
    `<html>
    <head>
    <link rel="stylesheet" type="text/css" href="ui/style.css">
    <title>${t}</title>
    </head>
    <body>
    <div class="cont">
    <div>
    <h1 class="new">${hedd}</h1>
    </div>
    <div>
    ${p}
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
