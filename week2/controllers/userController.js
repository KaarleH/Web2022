'use strict';
const {getUser, getAllUsers} = require('../models/userModel');


const user_list_get = async(req, res) => {
    const users = await getAllUsers();
    res.json(users);
};

const user_get = async (req, res) => {
    const user = await getUser(req.params.id);
    if (user.length > 0)  {
        res.json(user.pop());
    } else {
        res.send("virhe");
    }
}

const user_post = (req, res) => {
    console.log(req.body)
    res.send("Add user route");
}

module.exports = {
    user_list_get,
    user_get,
    user_post,
};