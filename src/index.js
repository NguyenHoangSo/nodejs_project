const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const handlebars = require("express-handlebars"); 
const path = require("path");
app.use(express.static(path.join(__dirname,'public')))
//Template engine app.engine("handlebars", handlebars.engine()); app.set("view engine", "handlebars");
app.use(morgan('combined'))
//app.set("views", path.join(__dirname, "resources", "views"));
// app.engine('handlebars', handlebars({
//     extname: 'hbs'
// }).engine());
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "resources", "views"));
app.get("/", (req, res) => { res.render("home"); }); 
app.get("/news", (req, res) => { res.render("news"); });
app.get("/search", (req, res) => res.render("search"))

app.listen(3000)