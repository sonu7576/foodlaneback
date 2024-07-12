const restaurants=require('../models/restaurantScheema')



// get all 

exports.getAllrestaurant=async(req,res)=>{

    try{

        const allrestaurant=await restaurants.find()
        res.status(200).json(allrestaurant)

    }
    catch(err){
        res.status(401).json(err)

    }

}

// add resturant


exports.addrestaurant=async(req,res)=>{
    const {id,title,price,description,image}=req.body
    try{
        const restaurantDetails=await restaurants.findOne({id})

        if (restaurantDetails) {

            res.status(406).json('already add')
            
        } else {

            const newrestaurant=new restaurants({
                id,title,price,description,image
            })

            await newrestaurant.save()
            res.status(200).json(newrestaurant)
            
        }
    }

    catch(err){
        res.status(401).json(err)
    }
}

// delete resturant


// delete 
exports.deleteRest = async (req, res) => {

    const { id } = req.params
    try {
        const removeRest = await restaurants.findByIdAndDelete({ _id: id })
        res.status(200).json(removeRest)
    } catch (err) {
        res.status(401).json(err)
    }
}


// get single restuarant
exports.getaRestaurant=async(req,res)=>{
    const{id}=req.params
    try{
        const restaurant=await restaurants.findOne({id})
        res.status(200).json(restaurant)
    }
    catch(err){
        res.status(401).json(err)
    }
}


// edit resturant

exports.editRest=async(req,res)=>{
    const{_id}=req.params

    const {id,title,price,description,image } = req.body

    try{

        const updateRest=await restaurants.findByIdAndUpdate({_id:_id},{
            id,title,price,description,image
        },{new:true})
        await updateRest.save()
        res.status(200).json(updateRest)

    }catch(err){
        res.status(401).json(err)
    }






}
