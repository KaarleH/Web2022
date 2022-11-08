'use strict';
const {getUser, getAllUsers, addUser} = require('../models/userModel');



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

};

const user_post = async (req, res) => {
    console.log('user_post', req.body, req.file);
    const data = [
        req.body.name,
        req.body.email,
        req.body.passwd,
        0,
    ];

    const result = await addUser(data);
    if(result.length > 0) {
        res.json({
            message: 'user added',
            user_id: result.insertId,
        });
    } else {
        res.send('virhe')
    }
};

module.exports = {
    user_list_get,
    user_get,
    user_post,
};