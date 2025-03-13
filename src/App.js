import Signup from './components/Signup';
import Login from './components/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

import MyCourses from './components/MyCourses';
import AddCourse from './components/AddCourse';
import CourseDetails from './components/CourseDetails';
import Content from './components/Content';
import CourseStudent from './components/CourseStudent';
import StudentProfile from './StudentProfile';
import { ToastContainer } from 'react-toastify';

const myRouter = createBrowserRouter([
  {path:'/login',Component:Login},
  {path:'/signup',Component:Signup},
  {path:'/dashboard',Component:Dashboard,children:[
    {path:'',Component:Home},
    {path:'home',Component:Home},
    {path:'my-courses',Component:MyCourses},
    {path:'add-course',Component:AddCourse},
    {path:'course-detail/:id',Component:CourseDetails},
    {path:'content/:id',Component:Content},
    {path:'student-list/:id',Component:CourseStudent},
    {path:'student-profile/:studentId',Component:StudentProfile}
    
   
  ]}

 
])
function App() {
 
  return (
   <div>
    <RouterProvider router={myRouter}/>
    <ToastContainer />
   </div>
  );
}

export default App;
