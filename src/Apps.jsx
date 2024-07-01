

import App from "./App";


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Creater from "./components/Creater";



// ...



const router = createBrowserRouter([
  {
   
      path:"/",
      element:<App></App>


      }, 
  
  
  
  {
    path:"/creater",
    element:<Creater/>
  }

]);
function Apps() {
  return (
   <div className='app'>
    <div className='container'>
       <RouterProvider router={router}/>
  </div>
   </div>)
}



export default Apps;


