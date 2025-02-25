import { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
  const [fullName, setFullName] = useState('');
  const [about, setAbout] = useState('');
  const [qualification, setQualification] = useState('');
  const [exp, setExp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [profilepic,setProfilePic] = useState(null);
  const [imageUrl,setImageURl] = useState(null);

  const submitHandler = () => {
    console.log(fullName, about, qualification, exp, email, password, confirmpassword, phone);
  }
  
  const fileHandler = (e)=>{
    // console.log(e.target.files[0])
    setProfilePic(e.target.files[0])
     setImageURl(URL.createObjectURL(e.target.files[0]))
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
          <h2>Create Your Account</h2>
          <input onChange={(e) => { setFullName(e.target.value) }} placeholder='FullName' />
          <textarea onChange={(e) => { setAbout(e.target.value) }} placeholder='About me' style={{ height: 50, borderRadius: 5, padding: 10, fontSize: 15, outline: 'none' }} />
          {/* // <input placeholder='About me'/> */}
          <input onChange={(e) => { setQualification(e.target.value) }} placeholder='Highest Qualification' />
          <input onChange={(e) => { setExp(e.target.value) }} placeholder='Experience' />
          <input onChange={(e) => { setEmail(e.target.value) }} type='email' placeholder='Email' />
          <input onChange={(e) => { setPhone(e.target.value) }} placeholder='Phone' />
          <input onChange={(e) => { setPassword(e.target.value) }} type='password' placeholder='Password' />
          <input onChange={(e) => { setConfirmPassword(e.target.value) }} type='password' placeholder='Confirmpassword' />
          {password.length>0 && confirmpassword.length>0 && confirmpassword !== password && <p className='error-msg-lines'>password and confirm password is not same</p>}
          <input id='input-file' onChange={fileHandler} type='file'/>
          <div className='upload-profile'>
            <button onClick={()=>{document.getElementById("input-file").click()}} className='upload-profile-btn'>upload profile pic</button>
            {imageUrl == null ? <img alt='logo' src={require('../assets/img3.png')} />
            :<img alt='logo' src={imageUrl} />}
          </div>

          <button onClick={submitHandler} className='submit-btn' type='submit'>submit</button>
          <Link to='/login' className='link'>i have already account</Link>
        </div>


      </div>
    </div>
  );
}

export default Signup
