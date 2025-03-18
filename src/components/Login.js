import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isloading,setLoading] = useState(false)
     
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        // console.log(email, password);

        axios.post('http://localhost:4200/auth/admin/login',{
            email:email,
            password:password
        })
        .then(res=>{
            setLoading(false)
          console.log(res);
          toast('welcome to sbs online classes')
          
          navigate('/dashboard')
          
        })
        .catch(err=>{
          setLoading(false)
          toast.error('something is wrong')
          console.log(err)
         
        })
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
                    <button className='submit-btn' type='submit'>{isloading &&   <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse"></i>}submit</button>
                    <Link to='/signup' className='link'>i dont account</Link>
                </form>


            </div>
        </div>
    );
}

export default Login
