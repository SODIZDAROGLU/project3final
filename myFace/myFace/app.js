const express = require ("express")
const app = express()
const PORT = 5000
const {MONGOURI} = require('./keys')
const mongoose = require("mongoose")

require('./models/user')

app.use(express.json())
app.use(require('./routes/auth'))


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
//iivVzT9WFgtQdHaX
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo baby...!!!")
})

mongoose.connection.on('error',(err)=>{
    console.log("err connecting body", err)
})

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})