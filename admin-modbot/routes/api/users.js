const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');

/**
 * @route POST api/users/login
 * @desc Signing in the User
 * @access Public
 */
router.post('/signin', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(404).json({
                msg: "Username is not found.",
                success: false
            });
        }
        // If there is user we are now going to compare the password
        bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                // User's password is correct and we need to send the JSON Token for that user
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: "Sign in Succesfully!"
                    });
                })
            } else {
                return res.status(404).json({
                    msg: "Incorrect password.",
                    success: false
                });
            }
        })
    });
});

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */
router.get('/question', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/dashboard', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/chat', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/transport', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/locations', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/design', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/trainbot', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

router.get('/responses', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json({
        user: req.user
    });
});

module.exports = router;