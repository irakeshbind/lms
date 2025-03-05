const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="header">
                <div className="box-1">
                 <img src={require('../assets/img66.png')}/>
                    <div className='sp-home'>
                        <h1>125</h1>
                        <p>courses</p>
                    </div>
                </div>
                <div className="box-2">
                    <img src={require('../assets/img55.png')} />
                    <div className='sp-home'>
                        <h1>1456</h1>
                        <p>student</p>
                    </div>

                </div>
                <div className="box-3">
                    <img src={require('../assets/img44.png')} />
                    <div className='sp-home'>
                        <h1>RS. 452163</h1>
                        <p>Total Transaction</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home