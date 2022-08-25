const express = require('express');
const bodyParser = require("body-parser");
const messageRouterV1 = require("./v1/routes/message.route");
const messageRouteDefinitionV1 = require("./v1/routesDefinitions");
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(messageRouteDefinitionV1.message, messageRouterV1);

app.listen(port, () => console.log('app running'));
