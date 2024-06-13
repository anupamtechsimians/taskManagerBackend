const router = require("express").Router();

const authRoutes = require("./auth");
const organisationRoute = require("./organisation");
const userRoute = require("./user");
router.use("/auth", authRoutes);
router.use("/organisation", organisationRoute);
router.use("/user", userRoute);
module.exports = router;