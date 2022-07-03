const { deletePost } = require("../controllers/deletePost");
const { deleteUser } = require("../controllers/deleteUser");
const { likePost } = require("../controllers/likePost");
const { login } = require("../controllers/loginControl");
const { newPost } = require("../controllers/newPost");
const { register } = require("../controllers/registerControl");
const { updatePost } = require("../controllers/updatePost");
const { updateUser } = require("../controllers/updateUser");
const { verifyToken } = require("../jwt");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.delete("/deleteUser/:id", verifyToken, deleteUser);
router.put("/updateUser/:id", verifyToken, updateUser);
router.post("/newPost/:id", verifyToken, newPost);
router.delete("/deletePost/:id", verifyToken, deletePost);
router.put("/updatePost/:id", verifyToken, updatePost);
router.put("/likePost/:id", verifyToken, likePost);

module.exports = router;
