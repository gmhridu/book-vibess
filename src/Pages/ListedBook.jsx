import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

const ListedBook = () => {
  const { id } = useParams();
  console.log("ID from useParams:", id);

  const data = useLoaderData();
  console.log("Data from useLoaderData:", data);

  const [details, setDetails] = useState(null);

  
  const singleData = data?.find((item) => item.id === id);
  console.log("Single data:", singleData);

  if (singleData) {
    setDetails(singleData);
    console.log("Details:", singleData);
  } else {
    console.log("No matching data found for id:", id);
  }

  return (
    <div>
      <h1>okkkkkkk</h1>
    </div>
  );
};

export default ListedBook;
