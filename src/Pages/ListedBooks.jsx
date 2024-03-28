import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="container mx-auto">
      <div className="bg-[#1313130D] text-center p-8 rounded-xl my-8">
        <h2 className="text-secondary text-3xl font-bold">Books</h2>
      </div>

      <div className="flex items-center justify-center my-8">
        <select className="select  bg-primary text-white">
          <option disabled selected className="bg-zinc-300 text-black">
            Sort By
          </option>
          <option className="bg-zinc-300 text-black">Rating</option>
          <option className="bg-zinc-300 text-black">Number of Pages</option>
          <option className="bg-zinc-300 text-black">Published Year</option>
        </select>
      </div>

      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  text-gray-800">
          <Link
            to={``}
            onClick={() => setTabIndex(0)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0
                ? "border border-b-0 rounded-lg"
                : "border-b-2 rounded-lg"
            }  `}
          >
            <span className="">Read Books</span>
          </Link>
          <Link
            to={`wishlist`}
            onClick={() => setTabIndex(1)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1
                ? "border border-b-0 rounded-lg"
                : "border-b-2 rounded-lg"
            }  `}
          >
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;