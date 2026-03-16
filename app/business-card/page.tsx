// Importing necessary libraries
import React from 'react';
import QRCode from 'qrcode.react';

const BusinessCard = () => {
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            background: '#F6F0E8',
            padding: '10px',
            margin: '2px',
            border: '1px solid #8F7A67',
            width: '30%',
            height: '150px',
            boxSizing: 'border-box',
            pageBreakInside: 'avoid',
            fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                textAlign: 'left',
                padding: '10px'
            }}>
                <h1 style={{ color: '#5E5146', margin: '0' }}>Jas Wellness</h1>
                <p style={{ margin: '5px 0' }}>Name: Jasbir Kaur</p>
                <p style={{ margin: '5px 0' }}>Phone: 416 845 5203</p>
                <p style={{ margin: '5px 0' }}>Email: wellnessjas@gmail.com</p>
                <p style={{ margin: '5px 0' }}>Website: jas-wellness-website.vercel.app</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <QRCode value={'https://calendly.com/wellnessjas/30min'} size={50} />
            </div>
        </div>
    );
};

export default BusinessCard;