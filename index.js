require('dotenv').config()

require('./DB/connection')

const express=require ('express')

const router=require('./Routes/router')

const cors=require ('cors')


// server creation 

const restaurantServer=express()




restaurantServer.use(cors())


restaurantServer.use(express.json())

restaurantServer.use(router)

const PORT=3000||process.env.PORT

restaurantServer.listen(PORT,()=>{
    console.log(`restuarant server running${PORT}`);
})

