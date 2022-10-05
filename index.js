const express = require("express")
const app = express()
const path = require("path")
const staticPath = path.join(__dirname,'/public')
app.use(express.static(staticPath))


app.get("/asd",(req,res)=>{
  res.send("hea");
})

app.listen(3000,()=>{
    console.log("app is running");
})