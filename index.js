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
        anshu: "anshu sharma",
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        name: req.query.name,
        surname: req.query.surname

    })
    // ? is query string and after that are  parameter 
    // & sign is use to separate  parameters var 
    // http://localhost:3000/about/?name=anshu&surnam=sharma
    console.log(req.query);
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorComment: req.url,
    })
})
//  404 page using hbs page
app.get('*', (req, res) => {
    res.render('404', {
        errorComment: req.url
    })
})
//  it will not show because the connection was already closed  

app.listen(3000, () => {
    console.log("app is running");
})