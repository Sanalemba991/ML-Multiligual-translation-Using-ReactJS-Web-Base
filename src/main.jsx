import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './Apps.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
)