import express from 'express'
const AdminRoute = express.Router()
import User from '../models/admin.js'
import expressAsyncHandler from 'express-async-handler'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

AdminRoute.get('/getdonors',verifyToken, expressAsyncHandler(async (req, res) => {
    try {
        const donors = await User.find({})
        if (!donors) {
            return res.status(404).json({ message: "User not found!" })
        }
        return res.status(200).json({ message: "All donors", donors })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}))


export default AdminRoute