import React from 'react';
import Creater from './Creater'; // Make sure to import Creater component if you are using it

import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
  } from "react-router-dom";
export default function Header() {
    const router=createBrowserRouter([{
        path:"/creater",
        element:<Creater/>

    }])
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>TransCribe<span className='text-orange-400 bold'>Translation</span></h1></a>
            <div className='gap-4 flex items-center'>
                
                <a href="/creater" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-orange-400'>
                    <button onClick={router}></button>
                    <p>New</p>
                    <a href="/creater" target='_blank' className='text-amber-600 ml-7 cursor-pointer' rel="noreferrer">Created Detais</a>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    );
}
