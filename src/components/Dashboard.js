import React from "react";
import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
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
                    <Link to='/dashboard/home' className="menu-link">Home</Link>
                    <Link to='/dashboard/my-courses' className="menu-link">My Courses</Link>
                    <Link tp='/dashboard/add-course' className="menu-link">Add New Course</Link>
                </div>
            </div>
            <div className="main-content">
         <Outlet/>
            </div>
        </div>
    )
}
export default Dashboard