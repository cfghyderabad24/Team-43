import React, { useState } from 'react';
import './DummyPaymentPage.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

const DummyPaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const { Total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handlePayment = (e) => {
        e.preventDefault();
        // Dummy payment processing
        // Assuming payment is successful
        toast.success(`Payment of $${amount} was successful!`);
        setTimeout(() => {
            navigate('/track-order');
        }, 2000); // Navigate to track-order route after 2 seconds
    };

    return (
        <div className="payment-container">
            <h2>Payment Information</h2>
            <form className="payment-form" onSubmit={handlePayment}>
                <div className="form-group">
                    <label>Card Number</label>
                    <input 
                        type="text" 
                        value={cardNumber} 
                        onChange={(e) => setCardNumber(e.target.value)} 
                        placeholder="1234 5678 9012 3456"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Expiry Date</label>
                    <input 
                        type="text" 
                        value={expiryDate} 
                        onChange={(e) => setExpiryDate(e.target.value)} 
                        placeholder="MM/YY" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>CVV</label>
                    <input 
                        type="text" 
                        value={cvv} 
                        onChange={(e) => setCvv(e.target.value)} 
                        placeholder="123"
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    ₹{Total}
                </div>
                <button type="submit" className="pay-button">Pay Now</button>
            </form>
            <ToastContainer /> {/* ToastContainer for Toastify */}
        </div>
    );
};

export default DummyPaymentPage;

