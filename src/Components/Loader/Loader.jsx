import React from 'react';
import {ClipLoader} from 'react-spinners'

const Loader = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <ClipLoader size={85} />
    </div>
  );
};

export default Loader;