// routes/PaymentRoute.js
import paymentController from '../controllers/PaymentController.js'

import express from 'express';

const router = express.Router();


router.get('/braintree/token', paymentController);
router.post('/braintree/payment',VerifyToken)

export default router;
