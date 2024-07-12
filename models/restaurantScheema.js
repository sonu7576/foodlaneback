const mongoose = require("mongoose")

const restaurantSchema=new mongoose.Schema({
    id:{
        type:Number,
        require:true,
        unique:true
    },
    title:{
        type:String,
        required:true
       
    },
    price:{
        type:String,
        required:true
        
    },
    description:{
        type:String,
        required:true
        
    },
    
    image:{
        type:String,
        required:true
        
    },
    
    

})

const restaurants=mongoose.model('restaurants',restaurantSchema)

 module.exports=restaurants