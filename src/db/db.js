const mongoose = require('mongoose')


function connect(){
    mongoose.connect("mongodb://localhost:27017/day8")
    .then(()=>{
        console.log("DB connect")
    }).catch((err)=>{
        console.log("Error Occurred")
    })
}


module.exports = connect;