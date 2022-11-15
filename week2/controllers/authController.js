'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const {httpError} = require("../utils/errors");

const login = (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info)=> {
        console.log('info:', info);
        console.log('err1', err);
        if (err || user) {
            next(httpError('Kirjautumiserhe', 403));
            return;
        }
        req.login(user, {session: false}, (err)=>{
            if (err) {
                console.log('err2', err);
                next(httpError('Kirjautumiserhe 2', 500));
                return;
            }
            const token = jwt.sign(user, 'nhjmuyg');
            return res.json({user, token});
        })
    })
    // TODO: add passport authenticate
};

module.exports = {
    login,
};