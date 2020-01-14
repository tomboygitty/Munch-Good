const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/"
router.route("/")
  .get(userController.getUsers)
  .post(userController.signUp);

router.route("/login")
  .post(userController.login);

router.route("/logout")
  .post(userController.logout)

module.exports = router;