const mongoose=require('mongoose')

var mongoURL='mongodb+srv://sherine2001:Srisheshi3@cluster0.8pccq.mongodb.net/hotelsherine'


mongoose.connect(mongoURL,{useNewUrlParser: true,
    useUnifiedTopology: true})

var connection=mongoose.connection

connection.on('error',()=>{
    console.log(`Mongo Db connection falied`)


})

connection.on('connected',()=>{
    console.log(`Mongo Db connected successfully`)


})

module.exports=mongoose