const express = require('express')
const { mwfn1, mwfn2 } = require('./middilewares/myMiddileware')

const app = express()

require('dotenv').config()
// console.log(process.env.PORT)
// app.get(routename,middlewarefn1,middlewarefn1,middlewarefn1,....,cbfn)
app.use(express.json())
app.post('/student',mwfn1,mwfn2,(req,res)=>{
    let name= req.body.name
    let surname = req.body.surname
    res.json({"msg":`Helloo ${name} ${surname}`})
})


let PORT =  process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})