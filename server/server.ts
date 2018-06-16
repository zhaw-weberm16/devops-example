import {IngredientDatabase} from "./database/ingredient-database";
import {RecipeDatabase} from "./database/recipe-database";
import {AbstractDatabase} from "./database/abstract-database";
import {TestData} from "./test-data";
import {IngredientRestService} from "./rest/ingredient-rest-service";

import {RecipeRestService} from "./rest/recipe-rest-service";
import {RegionDatabase} from "./database/region-database";
import {RegionRestService} from "./rest/region-rest-service";
import express = require('express');

let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set the port of our application
// process.env.PORT lets the port be set by Heroku
let port = process.env.PORT || 8080;

// serve Frontend
app.use('/', [express.static(__dirname + './../dist')]);

// setup CORS
app.all('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Request-Method", "*");
    res.header("Access-Control-Allow-Headers", req.header["Access-Control-Request-Headers"]);
    res.header("Access-Control-Expose-Headers", "Authorization");
    res.type("application/json");
    next();
});

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.sendStatus(200);
});

// disable Caching
app.get('/*',function(req,res,next) {
    res.header("cache-control", "no-cache, no-store, must-revalidate"); // HTTP 1.1
    res.header("pragma", "no-cache"); // HTTP 1.0
    res.header("expires", "0"); // HTTP 1.0 proxies
    next();
});

// Path ping request
app.get('/services/ping', function(req, res) {
    res.json({ status: 'ok', userId : 'demo', version: '1.0.0' });
});

// Path example entities
AbstractDatabase.initDatabase();
let recipeDatabase = new RecipeDatabase();
let ingredientDatabase = new IngredientDatabase();
let regionDatabase = new RegionDatabase();

new RecipeRestService(app, recipeDatabase).init();
new IngredientRestService(app, ingredientDatabase).init();
new RegionRestService(app, regionDatabase).init();


TestData.init();

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('../index.html');
});

app.listen(port, function() {
    console.log('Recipes server running on http://localhost:' + port);
});