const express = require("express")
const app = express()
const path = require("path")
const staticPath = path.join(__dirname, '/public')
const templatePath = path.join(__dirname, 'templates/views')
const partialsPath = path.join(__dirname, 'templates/partials')
const hbs = require('hbs')
app.use(express.static(staticPath))
//  we hav eto set view engine 
app.set('view engine', 'hbs');
app.set('views', templatePath)
//  here we are using 
hbs.registerPartials(partialsPath)
//  template engine root
app.get('/', (req, res) => {
    res.render('index', {
        anshu: "anshu sharma ",
    })
})
app.get('/about', (req, res) => {
    res.render('about')
})
//  it will not show because the connection was already closed  

app.listen(3000, () => {
    console.log("app is running");
})