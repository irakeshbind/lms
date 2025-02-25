


function Signup() {
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
          <input placeholder='FullName' />
          <textarea placeholder='About me' style={{ height: 50, borderRadius: 5, padding: 10, fontSize: 15, outline: 'none' }} />
          {/* // <input placeholder='About me'/> */}
          <input placeholder='Highest Qualification' />
          <input placeholder='Experience' />
          <input type='email' placeholder='Email' />
          <input placeholder='Phone' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Confirmpassword' />
          {/* <input type='file'/> */}
          <div className='upload-profile'>
            <button className='upload-profile-btn'>upload profile pic</button>
            <img alt='logo' src={require('../assets/img3.png')} />
          </div>

          <button className='submit-btn' type='submit'>submit</button>
        </div>


      </div>
    </div>
  );
}

export default Signup
