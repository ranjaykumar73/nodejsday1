// in js you can  save function inside  a variable  

let mwfn1= (req,res,next)=>{
    console.log(req.body)
    req.body.name = req.body.name.toUpperCase();
    req.body.surname = req.body.surname.toUpperCase();
    next()
    }


    let mwfn2 = (req,res,next)=>{
    
        next()
    }

// there are two type of export in node js

//1. Default export 
//2. Named export
       // object.property
       //module.exports ={}


       module.exports ={mwfn1,mwfn2}