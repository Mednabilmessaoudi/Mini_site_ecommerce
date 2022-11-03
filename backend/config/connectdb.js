const mongoose = require('mongoose')




const connectdb = ()=>{
    try{
mongoose.connect("mongodb+srv://iskall:nabil@cluster0.xl2ehak.mongodb.net/?retryWrites=true&w=majority")

console.log("you are connected");

    }catch(err) {
console.log(err);
    }
}

module.exports = connectdb;