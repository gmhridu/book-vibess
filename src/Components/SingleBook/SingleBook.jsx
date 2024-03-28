import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

const SingleBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/books.json");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="grid px-2 md:px-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {books.map((book) => (
        <Link
          to={`/book-details/${book.bookId}`}
          key={book.bookId}
          className="card bg-white shadow-xl border-2 p-4"
        >
          <figure className="px-5 pt-5 bg-[#F3F3F3] rounded-xl">
            <div className="bg-[#F3F3F3]">
              <img src={book.image} alt="Books" className="rounded-xl p-3" />
            </div>
          </figure>
          <div className="card-body text-left">
            <ul className="flex gap-3">
              {book.tags.map((tag, index) => (
                <li
                  key={index}
                  className="text-primary text-base font-semibold bg-[#23BE0A0D] rounded-full px-3 py-2 text-nowrap"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <h2 className="card-title font-serif text-xl font-bold text-secondary mb-4">
              {book.bookName}
            </h2>
            <p className="border-b-2 pb-4 border-dashed text-[#131313CC] text-base font-normal">
              By: {book.author}
            </p>
            <div className="card-actions flex justify-between my-3">
              <p className="text-base text-[#131313CC] font-medium">
                {book.category}
              </p>
              <p className="flex gap-3 items-center justify-center text-base text-[#131313CC] font-medium">
                {book.rating} <FaRegStar className="text-xl" />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SingleBook;
