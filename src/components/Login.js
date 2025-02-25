import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email, password);
    }

    return (
        <div className="signup-wrapper">
            <div className="signup-box">
                <div className="signup-left-box">
                    <img alt='logo' src={require('../assets/img1.jpeg')} />
                    <h1>SBS Online Classes</h1>
                    <p>Learn Coding in Easy Way..</p>
                </div>
                <form onSubmit={submitHandler} className="signup-right-box">
                    <h2>Login with Your Account</h2>
                    <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email' />
                    <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                    <button className='submit-btn' type='submit'>submit</button>
                    <Link to='/signup' className='link'>i dont account</Link>
                </form>


            </div>
        </div>
    );
}

export default Login
