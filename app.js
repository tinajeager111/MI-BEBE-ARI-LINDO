const express = require("express");
const app = express()
const path = require('path')

//rutas de frontend 

app.use('/',express.static(path.resolve('bebe')))




module.exports = app
