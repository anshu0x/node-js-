const express = require("express")
const app = express()
const path = require("path")
const staticPath = path.join(__dirname, '/public')
const hbs = require('hbs');

app.use(express.static(staticPath))
//  we hav eto set view engine 
app.set('view engine', 'hbs');
//  template engine root

app.get('/a', (req, res) => {
    res.render('index',{
        anshu: "anshu sharma "
    })
})
//  it will not show because the connection was already closed  
app.get("/", (req, res) => {
    res.send("hell ofrom ansh")
})

app.listen(3000, () => {
    console.log("app is running");
})