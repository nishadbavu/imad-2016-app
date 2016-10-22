var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone=
{
    title:'article one for nishad',
    hedding:'article one',
    date: 'Oct 20 2016',
    content: `
            <p>
                This is a content of my first article.This is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first article
            </p>
            <p>
                This is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first article
            </p>
            <p>
                This is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first articleThis is a content of my first article
            </p>`,
            
     
};
function createTemplate(data)
{
    var title=data.title;
    var hedding=data.hedding;
    var date=data.date;
    var content=data.content;
var htmlTemplate=
`
<html>
    <head>
        <meta name="viewport" content="width=device-width initial-scale=1">
        <title>${title} </title>
        <link rel="stylesheet" type="text/css" href="ui/style.css">
    </head>
    <body>
        <div class="cont">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h1 class="new">${hedding}</h1>
        <div>
            <div>
                ${date}
            </div>
           
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>
`;
return(htmlTemplate);
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article-one',function(req,res){
    res.send(createTemplate(artilceone));
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
