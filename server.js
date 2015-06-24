var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var zoneStuff = require('./serverassets/plantmaps');
var wikiStuff = require('./serverassets/wikistuff');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'))

app.get('/api/hardiness', zoneStuff.getZoneData);

app.get('/api/intro', wikiStuff.getWikiExtract);

app.listen(8989, function(){
    console.log("listening on 8989");
});