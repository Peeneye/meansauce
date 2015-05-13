var express = require('express');
var app = express(),
    swig = require('swig'),
    path = require('path'),
    routeLdr = require('./route-loader');
    

app.engine('html', swig.renderFile);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.set('view cache', false);
swig.setDefaults({ 
    cache: false ,
    varControls: ['<%=', '%>']
});
routeLdr.load(app);

app.listen(3000);
console.log("Listening on http://localhost:3000/");
