const express = require("express");
const path = require("path");

const APP_NAME = "POC Microfrontend";
const PORT = process.env.PORT || 3000;
const SERVER_RUNNING_MESSAGE = `${APP_NAME} is running on port ${PORT}.`;

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.listen(PORT, () => console.log(SERVER_RUNNING_MESSAGE));
