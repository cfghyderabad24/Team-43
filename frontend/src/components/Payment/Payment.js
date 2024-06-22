import React, { useState } from 'react';
import './DummyPaymentPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMoneyCheckAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcMastercard, faCcAmex, faCcDiscover, faGooglePay, faApplePay, faPaypal } from '@fortawesome/free-brands-svg-icons';

const DummyPaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Dummy payment processing
        setMessage(`Payment of $${amount} was successful!`);
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
                    <input 
                        type="text" 
                        value={amount} 
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="50.00"
                        required 
                    />
                </div>
                <button type="submit" className="pay-button">Pay Now</button>
            </form>
            {message && <p className="payment-message">{message}</p>}
            <div className="payment-options">
                <h3>Other Payment Options</h3>
                <div className="icons">
                    <FontAwesomeIcon icon={faCcVisa} size="2x" />
                    <FontAwesomeIcon icon={faCcMastercard} size="2x" />
                    <FontAwesomeIcon icon={faCcAmex} size="2x" />
                    <FontAwesomeIcon icon={faCcDiscover} size="2x" />
                    <FontAwesomeIcon icon={faPaypal} size="2x" />
                    <FontAwesomeIcon icon={faGooglePay} size="2x" />
                    <FontAwesomeIcon icon={faApplePay} size="2x" />
                    <FontAwesomeIcon icon={faCreditCard} size="2x" />
                    <FontAwesomeIcon icon={faMoneyCheckAlt} size="2x" />
                    <FontAwesomeIcon icon={faWallet} size="2x" />
                </div>
            </div>
        </div>
    );
};

export default DummyPaymentPage;

