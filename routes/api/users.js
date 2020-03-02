const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

// User Model
const User = require("../../models/user");

// @route  GET api/users
// @desc   Get All Users
// @access Public

router.get("/", (req, res) => {
  User.find().then(users => res.json(users));
});

// @route  POST api/users
// @desc   Create A User with beta Crypt
// @access Public

router.post("/", (req, res) => {
  const { email, password, typeuser, dataofcreation } = req.body;
  User.findOne({ email }).then(user => {
    if (user) return res.sendStatus(409);
    else {
      const newUser = new User({
        email,
        password,
        typeuser,
        dataofcreation
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then(newuser => res.json(newuser))
            .catch(err => res.send(err));
        });
      });
    }
  });
});



// Get Status :
router.get("/status/:id", (req, res) => {
  const email = req.params.id
  User.findOne({ email }).then(user => res.json(user.typeuser)).catch(err => console.log("err"))
})

// @route  LOGIN api/login
// @desc   Login into an Account
// @access Public

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) res.sendStatus(409);
    else {
      bcrypt
        .compare(password, user.password)
        .then(isMatched => {
          if (isMatched) {
            const payload = { id: user._id, email: user.email , typeuser:user.typeuser };
            jwt.sign(payload, "session", { expiresIn: 3600 }, (err, token) => {
              if (err) res.sendStatus(500);
              else res.json({ token: "Bearer " + token });
            });
          } else res.send(400);
        })
        .catch(err => res.send("server error"));
    }
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
