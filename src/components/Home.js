import { useEffect, useState } from 'react'
import { Chart } from 'chart.js'
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
import { data } from 'react-router-dom';
Chartjs.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);
const Home = () => {
    const data ={
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
            labels: 'Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54,162,235,0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        },
        ],
    };
    const options ={
        
    }
    useEffect(()=>{
        const ctx = document.getElementById('graph-box');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });
    },[])
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
                          graph
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