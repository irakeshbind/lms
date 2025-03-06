import React from 'react'
import { useEffect, useState } from 'react'
import { Chart, plugins } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import{
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

Chartjs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const Home = () => {
  
    const data ={
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
            label: 'rakesh',
            data: [1200, 19000, 30000, 50000, 20000, 37000,78000,45000,56000,17000,25000,80000],
            backgroundColor: 'rgba(187, 11, 26, 0.2)',
            borderColor: 'rgb(236, 24, 208)',
            borderWidth: 1,
        },
        ],
    };
    // chart option
    const options ={
         responsive: true,
         plugins:{
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthaly Sales Data',
            },
         },
    };
    
    
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
                        <h1>RS. 45216</h1>
                        <p>Total Transaction</p>
                    </div>
                </div>

            </div>
            <div className='seond-row'>
                 <div className='graph-box' id='graph-box'>
                       <Bar data={data} options={options}/>
                 </div>
                 <div className='recent-box'>
                    <div className='r-student-box'>
                         student
                    </div>
                    <div className='r-course-box'>
                          course
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Home