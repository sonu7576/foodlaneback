const mongoose = require("mongoose")

const bookingScheema = new mongoose.Schema({

           usermail:{

            type: String,
            required: true

           },
    

            name: {
                type: String,
                require: true,
            },
           
            restaurant: {
                type: String,
                required: true

            },

            restaurantid: {

                type: Number,
                required: true

            },

            restaurantimg: {
                type : String,
                required:true
            },

            mobile: {
                type: String,
                required: true

            },
            date: {
                type: String,
                required: true

            }
        

    


    






})

const bookings = mongoose.model('bookings', bookingScheema)

module.exports = bookings