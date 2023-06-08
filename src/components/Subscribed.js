import React from 'react'
import successImg from '../images/icon-success.svg';

const Subscribed = ({ email, setIsValid }) => {
    return (
        <div className='subscribed-container'>
            <img className='subscribe-img' src={successImg} alt='Success' />
            <h1 className='title'>Thanks for subscribing!</h1>
            <p className='paragraph'>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscrition.</p>
            <button className='btn' onClick={() => setIsValid(false)}>Dismiss message</button>
        </div>
    )
}

export default Subscribed
