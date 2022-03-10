const team = require();
const express = require("express");
const fixtureRouter = express.Router();

fixtureRouter.get("/", fixtures);
fixtureRouter.get("/", pendingFixtures);
fixtureRouter.get("/", completedFixtures);
module.exports = fixtureRouter;
