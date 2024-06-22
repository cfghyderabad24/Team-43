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

AdminRoute.post('/event', expressAsyncHandler(async (req, res) => {
    try {
      const { avatar, pin, eventname, date, address } = req.body;
  
      // Create a new Event instance with the data received
      const addedevent = new Event({
        avatar,
        pin,
        eventname,
        date,
        address
      });
  
      // Save the event to the database
      await addedevent.save();
  
      // Respond with success message and added event details
      res.status(201).send({ message: "Event added successfully", addedevent });
    } catch (error) {
      // Handle any errors and send a 500 status code with an error message
      console.error("Error adding event:", error);
      res.status(500).send({ message: "Failed to add event" });
    }
  }));



export default AdminRoute