const bookings = require("../models/bookingScheema")



// booking

exports.addbooking=async(req,res)=>{
    const{ usermail,name,restaurant,restaurantid,restaurantimg,mobile,date }=req.body
    try{
        // const BookingDetails=await bookings.findOne({name})
        // if (BookingDetails) {

        //     res.status(406).json('already add')
            
        // } else {

        const newBookings=new bookings({
                
            usermail,name,restaurant,restaurantid,restaurantimg,mobile,date
          })

          await newBookings.save()
          res.status(200).json(newBookings)

            
            
        // }
    }

    catch(err){
        res.status(401).json(err)
    }
}

// view add booking

exports.getAllbookings=async(req,res)=>{

    try{

        const allbookings=await bookings.find()
        res.status(200).json(allbookings)

    }
    catch(err){
        res.status(401).json(err)

    }

}

// delete booking
exports.deletebook = async (req,res) => {

    const { id } = req.params
    try {
        const removebook = await bookings.findByIdAndDelete({ _id:id })
        res.status(200).json(removebook)
    } catch (err) {
        res.status(401).json(err)
    }
}