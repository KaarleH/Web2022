'use strict';
const express = require('express');
const cRoute = require("./routes/catRoute");
const uRoute = require("./routes/userRoute")
const app = express();
const port = 3000;

app.use("/cat", cRoute)
app.use("/user", uRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
