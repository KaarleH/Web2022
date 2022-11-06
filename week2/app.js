'use strict';
const express = require('express');
const cors = require("cors");
const cRoute = require("./routes/catRoute");
const uRoute = require("./routes/userRoute")
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'));



app.use("/cat", cRoute)
app.use("/user", uRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
