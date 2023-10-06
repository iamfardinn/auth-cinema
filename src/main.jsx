import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children :[
      {
          path : "/",
          element : <Home></Home>
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
