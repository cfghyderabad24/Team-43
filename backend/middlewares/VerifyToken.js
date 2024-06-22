import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const VerifyToken = (req, res, next) => {
    // Get bearer token from headers
    const bearerToken = req.headers.authorization;
    
    // Check if bearer token is not available
    if (!bearerToken) {
        return res.status(401).json({ message: 'Unauthorized access. Please login to continue.' });
    }

    // Extract token from bearer token
    const token = bearerToken.split(' ')[1];
    
    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decoded; // Optionally store the decoded token payload in the request object for use in other middleware/routes
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token. Please login again.' });
    }
};

export default VerifyToken;
