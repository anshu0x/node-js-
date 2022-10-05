const express = require("express")
const router  = new express.Router()

router.get("/student",(req,res)=>{
    res.send("hello from custom student router")
})


module.exports = router