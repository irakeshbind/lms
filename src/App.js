import Signup from './components/Signup';
import Login from './components/Login';
import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import AddCourse from './components/AddCourse';
import MyCourses from './components/MyCourses';

const myRouter = createBrowserRouter([
  {path:'/login',Component:Login},
  {path:'/signup',Component:Signup},
  {path:'/dashboard',Component:Dashboard,children:[
    {path:'home',Component:Home},
    {path:'my-courses',Component:MyCourses},
    {path:'add-course',Component:AddCourse},
  ]},

 
])
function App() {
 
  return (
   <div>
    <RouterProvider router={myRouter}/>
   </div>
  );
}

export default App;
