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
    const courses = [
        {
            id:0,
            courseName:'c++ master course',
            price:500,
            discount:20,
            thumbnail:'https://gogetgpt.com/files/img/1beb834ea28aa4d66bfd3852aea26c51.png',
            description:'AddCourse.js:22  What is C++ used for? Over time, C++ has become a choice language for building fast and reliable software. Its versatility makes it an excellent option for complex applications, embedded systems, and Internet of Things (IoT) devices. A few common areas where you may opt for C++ include:  Software engineering. A few applications you might use daily that utilize C++ include Netflix and Amazon.  Operating system (OS) development uses C++. Examples of OSs that use C++ include Microsoft Windows, Mac OS X, and iOS.  Graphical user interfaces. C++ is often useful for graphical user interface design or GUI.  Virtual reality (VR). C++ can be an excellent language to learn if you want to develop VR applications.  Blockchain technology. The well-known cryptocurrency Bitcoin was developed in C++. You can also use it to create smart contracts.  Game development. You can develop games and gaming consoles with C++. For example, the game World of Warcraft and the Xbox console utilize C++'
        },
        {
            id:1,
            courseName:'python master course',
            price:3999,
            discount:10,
            thumbnail:'https://thecodex.me/static/52b74df4524162e8807bea5fb094d53c/ee604/Python_Thumbnail_b6e99c74df.png',
            description:'AddCourse.js:22  What is C++ used for? Over time, C++ has become a choice language for building fast and reliable software. Its versatility makes it an excellent option for complex applications, embedded systems, and Internet of Things (IoT) devices. A few common areas where you may opt for C++ include:  Software engineering. A few applications you might use daily that utilize C++ include Netflix and Amazon.  Operating system (OS) development uses C++. Examples of OSs that use C++ include Microsoft Windows, Mac OS X, and iOS.  Graphical user interfaces. C++ is often useful for graphical user interface design or GUI.  Virtual reality (VR). C++ can be an excellent language to learn if you want to develop VR applications.  Blockchain technology. The well-known cryptocurrency Bitcoin was developed in C++. You can also use it to create smart contracts.  Game development. You can develop games and gaming consoles with C++. For example, the game World of Warcraft and the Xbox console utilize C++'
        },
        {
            id:2,
            courseName:'iot basic to advance',
            price:7999,
            discount:50,
            thumbnail:'https://static.vecteezy.com/system/resources/thumbnails/009/288/681/small/iot-internet-of-things-logo-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-everything-connectivity-device-concept-network-and-business-with-internet-illustration-vector.jpg',
            description:'AddCourse.js:22  What is C++ used for? Over time, C++ has become a choice language for building fast and reliable software. Its versatility makes it an excellent option for complex applications, embedded systems, and Internet of Things (IoT) devices. A few common areas where you may opt for C++ include:  Software engineering. A few applications you might use daily that utilize C++ include Netflix and Amazon.  Operating system (OS) development uses C++. Examples of OSs that use C++ include Microsoft Windows, Mac OS X, and iOS.  Graphical user interfaces. C++ is often useful for graphical user interface design or GUI.  Virtual reality (VR). C++ can be an excellent language to learn if you want to develop VR applications.  Blockchain technology. The well-known cryptocurrency Bitcoin was developed in C++. You can also use it to create smart contracts.  Game development. You can develop games and gaming consoles with C++. For example, the game World of Warcraft and the Xbox console utilize C++s'
        }
    ]
    const studentlist = [
        {

            id: 125,
            fullName: 'rakesh',
            phone: '9326827804',
            email: 'rakesh@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEpKvJ-2mw_38DdZLgdwmmCgjpu3RvKGHqkA&s'
        },
        {

            id: 165,
            fullName: 'ajit',
            phone: '8354063869',
            email: 'ajit@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBdl1Qi4s61DFzf292IYutoG5QU9JxE4YxFA&s'
        },
        {

            id: 170,
            fullName: 'amar',
            phone: '9592784519',
            email: 'amar@gmail.com',
            profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqpXqhUvAxSKy5POIO9WXcy_QdF81eVLSqQ&s'
        }
     

    ]
  
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
                    <table className='recent-box-table'>
                        <tbody>
                            {
                                studentlist.map((student)=>{
                                    return(
                                        <tr key={student.id}>
                                           <td><img src={student.profilePic}/></td>
                                           <td>{student.fullName}</td>
                                           <td>{student.phone}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                    <div className='r-course-box'>
                    <table className='recent-box-table'>
                        <tbody>
                            {
                                courses.map((course)=>{
                                    return(
                                        <tr key={course.id}>
                                           <td><img src={course.thumbnail}/></td>
                                           <td>{course.courseName}</td>
                                           <td>{course.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                 </div>
            </div>
        </div>
    )
}
export default Home