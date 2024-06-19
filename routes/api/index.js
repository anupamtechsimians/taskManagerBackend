const router = require("express").Router();

const authRoutes = require("./auth");
const organisationRoute = require("./organisation");
const userRoute = require("./user");
const projectRoutes = require("./projects");
const taskRoutes = require("./tasks");
const boardRoutes = require("./board");
const taskCommentRoutes = require("./taskComments");
const conversation = require("./conversation");
const status = require("./status");

router.use("/auth", authRoutes);
router.use("/organisation", organisationRoute);
router.use("/users", userRoute);
router.use("/projects", projectRoutes);
router.use("/tasks", taskRoutes);
router.use("/boards", boardRoutes);
router.use("/comments", taskCommentRoutes);
router.use("/conversation", conversation);
router.use("/status", status);

module.exports = router;