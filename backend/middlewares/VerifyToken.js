import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

function VerifyToken(req, res, next) {
    // get bearer token from headers of req
    const bearerToken = req.headers.authorization
    // if bearer Token not available
    if (!bearerToken) {
        return res.send({ message: 'Unauthorized access. Please login to continue' })
    }
    // extract token from bearer token
    const token = bearerToken.split(' ')[1]
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY)
        next()
    }
    catch (err) {
        next(err)
    }
}


export default VerifyToken