const express=require('express')


const restaurantController=require('../controllers/restaurantcontrollers')

const userController=require('../controllers/userController')

const bookingController=require('../controllers/bookingController')

const AdminController=require('../controllers/adminController')

const router=new express.Router()

// getrestaurant

router.get('/restaurant/all',restaurantController.getAllrestaurant)

// get single restaurant
router.get('/restaurant/view/:id',restaurantController.getaRestaurant)

// add restaurant

router.post('/restaurant/add',restaurantController.addrestaurant)

// bookings

router.post('/booking/add',bookingController.addbooking)

// getallbooking

router.get('/mybookings',bookingController.getAllbookings)

// delete book

router.delete('/deletebook/:id',bookingController.deletebook)



// delete resturant

router.delete('/delete/:id',restaurantController.deleteRest)

// update resturant

router.put('/edit/:_id',restaurantController.editRest)

// register

router.post('/user/register',userController.registerController)



// single with _id

router.get('/user/single/:_id',userController.getuserid)

//  get all user

router.get('/user/all',userController.getAlluser)



// login

router.post('/user/login',userController.loginController)

router.post('/admin/login',AdminController.AdminController)

module.exports=router