const router = require("express").Router();

const authRoutes = require("./auth");
const organisationRoute = require("./organisation");
router.use("/auth", authRoutes);
router.use("/organisation", organisationRoute);
module.exports = router;