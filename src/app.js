const express = require('express');
const userRoutes = require("./routes/user.routes")
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")

app.use("/users", userRoutes)
app.use('/post',postRoutes)

module.exports = app;