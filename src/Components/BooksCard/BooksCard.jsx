import React from 'react';
import SingleBook from '../SingleBook/SingleBook';

const BooksCard = () => {
  return (
    <>
      <div className='mt-6 md:mt-10 lg:mt-24 container mx-auto'>
        <div>
          <h1 className="text-4xl text-center font-bold font-serif mb-8">Books</h1>
        </div>
        <div>
          <SingleBook/>
        </div>
      </div>
      
    </>
  );
};

export default BooksCard;