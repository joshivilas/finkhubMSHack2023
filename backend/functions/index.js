const express = require("express");
const functions = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const postRoutes = require("./routes/postRoutes");
const app = express();

admin.initializeApp();
app.use(express.json());
app.use("/post", postRoutes);

exports.api = functions.https.onRequest(app);
