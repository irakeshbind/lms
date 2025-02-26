import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
const Dashboard = () => {
    const location = useLocation()
    return (
        <div className="dashboard-wrapper">
            <div className="side-nav">
                <div className="profile-box">
                    <img src={require('../assets/img3.png')} />
                    <div className="profile-text">
                        <h3>hellow rakesh</h3>
                        <button>logout</button>
                    </div>
                </div>
                <div className="menu">
                    <Link to='/dashboard/home' className={location.pathname === '/dashboard/home' ? 'menu-active-link' : 'menu-link'}><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
                    <Link to='/dashboard/my-courses' className={location.pathname === '/dashboard/my-courses' ? 'menu-active-link' : 'menu-link'}>My Courses</Link>
                    <Link to='/dashboard/add-course' className={location.pathname === '/dashboard/add-course' ? 'menu-active-link' : 'menu-link'}>Add New Course</Link>
                  
                </div>
            </div>
            <div className="main-content">
         <Outlet/>
            </div>
        </div>
    )
}
export default Dashboard