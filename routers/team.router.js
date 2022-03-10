const team = require.team;
const express = require("express");
const teamRouter = express.Router();

teamRouter.get("/", pendingFixturesregisteredTeamList);
teamRouter.get("/", registeredTeamsAndDetails);

module.exports = teamRouter;
