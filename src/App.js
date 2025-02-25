import Signup from './components/Signup';
import Login from './components/Login';

import './style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const myRouter = createBrowserRouter([
  {path:'/login',Component:Login},
  {path:'/signup',Component:Signup}
])
function App() {
 
  return (
   <div>
    <RouterProvider router={myRouter}/>
   </div>
  );
}

export default App;
