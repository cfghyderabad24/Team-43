import express from 'express'
const AdminRoute = express.Router()
import Admin from '../models/admin.js'
import expressAsyncHandler from 'express-async-handler'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import Event from '../models/addEvent.js'

AdminRoute.get('/events', expressAsyncHandler(async (req, res) => {
    try {
        const events = await Event.find({})
        if (!events) {
            return res.status(404).json({ message: "User not found!" })
        }
        return res.status(200).json({ message: "All events", events })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}))

AdminRoute.post('/event',expressAsyncHandler(async(req,res)=>{
    try {
        let event= await req.body
        const addedevent= await Event.create(event)
        res.send({message:"Event added successfully",addedevent})
    } catch (error) {
        console.log("error in adding event",error);
    }
}))


export default AdminRoute