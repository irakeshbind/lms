import { useState } from 'react';



function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = () => {
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
                <div className="signup-right-box">
                    <h2>Login with Your Account</h2>
                    <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email' />
                    <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
                    <button onClick={submitHandler} className='submit-btn' type='submit'>submit</button>
                </div>


            </div>
        </div>
    );
}

export default Login
