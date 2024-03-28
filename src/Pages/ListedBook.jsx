import React, { useState, useEffect } from "react";
import { useParams, useLoaderData, Link, Outlet } from "react-router-dom";

const ListedBook = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      const book = data.find((book) => book.bookId === parseInt(id));
      setSingleData(book);
    }
  }, [data, id]);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleData || {};

  return (
    <>
      <section className="text-gray-800 container mx-auto">
        <div className="container flex flex-col gap-4 lg:gap-20 p-5 mx-auto sm:py-12  lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center bg-[#F3F3F3] rounded-xl p-4">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[43rem] xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col p-4 text-center rounded-sm space-y-5">
            <h1 className="card-title font-serif text-5xl font-bold text-secondary mb-4">
              {bookName}
            </h1>
            <p className="border-b-2 pb-4 text-[#131313CC] text-xl text-left font-medium">
              By: {author}
            </p>
            <p className="border-b-2 pb-6 text-[#131313CC] text-xl text-left font-medium">
              {category}
            </p>
            <h3 className="text-xl font-bold font-serif text-secondary py-3 text-left space-y-2">
              Review:{" "}
              <span className="font-normal text-[#131313B2]">{review}</span>
            </h3>
            <div className="flex gap-10 border-b-2 text-left">
              <h3 className="text-xl font-serif font-bold text-secondary">
                Tag
              </h3>
              <ul className="flex gap-5 flex-col sm:flex-row items-center justify-center pb-4">
                {tags?.map((tag) => (
                  <li
                    key={tag}
                    className="text-primary text-base font-semibold bg-[#23BE0A0D] rounded-full px-3 py-2 text-nowrap"
                  >
                    # {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-left text-xl font-normal text-#131313B2 space-y-2 pt-4">
              <div className="flex gap-20">
                <h3>Number of Pages: </h3>
                <h3 className="text-secondary font-semibold">{totalPages}</h3>
              </div>
              <div className="flex gap-36">
                <h3>Publisher: </h3>
                <h3 className="text-secondary font-semibold">{publisher}</h3>
              </div>
              <div className="flex gap-[4.5rem]">
                <h3>Year of Publishing: </h3>
                <h3 className="text-secondary font-semibold">
                  {yearOfPublishing}
                </h3>
              </div>
              <div className="flex gap-[11.5rem]">
                <h3>Rating: </h3>
                <h3 className="text-secondary font-semibold">{rating}</h3>
              </div>
            </div>
            <div className="flex gap-6 my-3">
              <Link
                to={{
                  pathname: "/books",
                  state: { singleData },
                }}
                className="btn btn-ghost bg-transparent border-black"
              >
                Read
              </Link>

              <Link
                to={`wishlist`}
                className="btn btn-ghost bg-third text-white text-xl font-semibold"
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListedBook;
