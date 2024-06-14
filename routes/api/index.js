const router = require("express").Router();

const authRoutes = require("./auth");
const organisationRoute = require("./organisation");
const userRoute = require("./user");
const projectRoutes = require("./projects");

router.use("/auth", authRoutes);
router.use("/organisation", organisationRoute);
router.use("/user", userRoute);
router.use("/projects", projectRoutes);

module.exports = router;