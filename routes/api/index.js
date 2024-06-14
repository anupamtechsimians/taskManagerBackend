const router = require("express").Router();

const authRoutes = require("./auth");
const organisationRoute = require("./organisation");
const userRoute = require("./user");
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const boardRoutes = require("./board");

router.use("/auth", authRoutes);
router.use("/organisation", organisationRoute);
router.use("/user", userRoute);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/boards", boardRoutes);

module.exports = router;