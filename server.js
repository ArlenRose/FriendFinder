const express = require('express')
const app = express()
const port = 3000

var bodyParser = require("body-parser");
var path = require("path")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static("app.public"));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.get('/', (req, res) => res.send('Hello World!'))
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/survey.html"))
})
app.listen(port, () => console.log(`listening on port ${port}!`));