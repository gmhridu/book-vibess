import React, { useEffect, useState } from "react";
import { getRead } from "../utils";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const fetchedBooks = getRead();
    setReadBooks(fetchedBooks);
  }, []);
  console.log(readBooks)

  return (
    <div>
      <h2>Read Books</h2>
      
    </div>
  );
};

export default ReadBooks;
