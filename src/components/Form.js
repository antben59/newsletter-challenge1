import { useRef, useState } from 'react';
import desktopImg from '../images/illustration-sign-up-desktop.svg';
import mobileImg from '../images/illustration-sign-up-mobile.svg';

const Form = ({ setIsValid, setEmail }) => {

    const emailRef = useRef(null);
    const errorLabel = useRef(null);

    const baseScreenWidth = window.innerWidth;
    const [screenWidth, setScreenWidth] = useState(baseScreenWidth);

    const messageList = [
        "Product discovery and building what matters",
        "Measuring to ensure updates are a success",
        "And much more!"
    ]

    const message = messageList.map((item, key) => {
        return (
            <li key={key} className='list-item'><span className='check-icone'></span>{item}</li>
        )
    })

    const handleResizeScreen = () => {
        setScreenWidth(window.innerWidth);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidEmail(emailRef.current.value)) {
            emailRef.current.classList.add('invalid');
            errorLabel.current.classList.add('active');
            setIsValid(false);
        }
        else {
            emailRef.current.classList.remove('invalid');
            errorLabel.current.classList.remove('active');
            setEmail(emailRef.current.value);
            setIsValid(true);
        }
    }

    function isValidEmail(email) {
        // Return true if email is valid, else false.
        return /\S+@\S+\.\S+/.test(email);
    }

    window.addEventListener('resize', handleResizeScreen);

    return (
        <div className='newsletter-container'>
            <div className='form-container'>
                <h1 className='title'>Stay updated!</h1>
                <p className='paragraph'>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul className='list'>
                    {message}
                </ul>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='labels'>
                        <label htmlFor="email">Email address</label>
                        <label ref={errorLabel} className='error-email'>Valid email required</label>
                    </div>
                    <input ref={emailRef} className='email-input' type="email" id="email" placeholder='email@company.com' />
                    <button className='btn'>Subscribe to monthly newsletter</button>
                </form>
            </div >
            <div className='illustration-container'>
                {screenWidth < 700 ? (<img className='bg-image' src={mobileImg} alt="Illustration" />) : <img className='bg-image' src={desktopImg} alt="Illustration" />}
            </div>
        </div>
    )
}

export default Form
