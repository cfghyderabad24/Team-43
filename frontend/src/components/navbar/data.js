import React from 'react';

const Card = () => {
    const cardStyle = {
        backgroundColor: '#ffffff',
        border: '1px solid #dddddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '600px', // Increased the maxWidth
        width: '100%',
        margin: '20px auto',
    };

    const paragraphStyle = {
        margin: '0 0 10px 0',
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#333333',
    };

    const bodyStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0',
    };

    return (
        <div style={bodyStyle}>
            <div style={cardStyle}>
                <p style={paragraphStyle}>
                    We are a group of like-minded individuals who gather to address the fallouts of climate change, gender inequalities, and detrimental health practices that exist in our urban and rural communities, by engaging different social strata in a comprehensive manner.
                </p>
                <p style={paragraphStyle}>
                    We take every individual act as a collaborative means to create a collective that stands together to eradicate social inequalities and existing detrimental practices that affect our climate, families/communities, and bodies.
                </p>
                <p style={paragraphStyle}>
                    We strongly and efficiently support and encourage our individuals and communities to take informed decisions that will benefit their lives and create a holistic society where everyone is treated equally with respect, care, and effort.
                </p>
                <p style={paragraphStyle}>
                    We believe that the vulnerable communities would continue to suffer in existent conditions as a muted population if their foundational concerns aren’t addressed keeping their struggles for basics at the forefront.
                </p>
                <p style={paragraphStyle}>
                    For a sustainable and all-pervasive ecosystem of support, we at Good Universe pledge to counter the conditions plagued by indifferent policy-making and situational non-interventions.
                </p>
            </div>
        </div>
    );
}

export default Card;
