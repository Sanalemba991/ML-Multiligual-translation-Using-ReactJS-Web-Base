import React from 'react';
import saImage from './sa.jpg'; // Import the image using relative path

function Creater() {
  return (
    <div className="flex flex-col items-center justify-center mt-56 ml-20  pt-90">
      <img className="h-80 rounded-full mb-4" src={saImage} alt="Creator" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Created by</h1>
      <h2 className="text-xl text-gray-600 mb-1">Laitonjam Sanalemba Meitei (MCA)</h2>
      <h2 className="text-xl text-gray-600">NIELIT IMPHAL</h2>
    </div>
  );
}

export default Creater;
