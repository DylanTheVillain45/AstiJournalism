import React from 'react';
import loadingImage from "../assets/Loading.svg"; 

const Loading = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <img src={loadingImage} alt="Loading..." className='w-[80vw]'/> 
    </div>
  );
}

export default Loading