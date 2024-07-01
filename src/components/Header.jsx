import React from 'react';
import { Link } from 'react-router-dom';
import Creater from './Creater'; 

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <Link to="/" className='text-black'>
                <h1 className='font-medium'>
                    TransCribe<span className='text-orange-400'>Translation</span>
                </h1>
            </Link>
            <div className='gap-4 flex items-center'>
                <Link to="/creater" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-orange-400'>
                    <p>New</p>
                    <span className='text-amber-600 ml-7 cursor-pointer'>Created Details</span>
                    <i className="fa-solid fa-plus"></i>
                </Link>
            </div>
        </header>
    );
}
