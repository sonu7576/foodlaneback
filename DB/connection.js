const mongoose=require('mongoose')

const connectionString=process.env.MONGODB_URI

mongoose.connect(connectionString).then(()=>{
    console.log('restuarant server connected successfully to mongodb atlas');
}).catch((err)=>{
    console.log(`mong db connection failed error:${err}`);
})

