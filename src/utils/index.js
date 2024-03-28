import toast from "react-hot-toast";

export const getRead = () => {
  let books = [];
  let storageBooks = localStorage.getItem("books");
  if (storageBooks) {
    books = JSON.parse(storageBooks);
  }
  return books;
};

// save
export const saveBook = (newBook) => {
  try {
    let books = getRead();
    const isExist = books.find((book) => book?.bookId === newBook?.bookId);
    if (isExist) {
      toast.error("Already Bookmarked!");
    } else {
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));
      toast.success("Bookmarked Successfully!");
    }
  } catch (error) {
    console.error("Error saving bookmark:", error);
    toast.error("Failed to bookmark the book!");
  }
};

// delete
export const deleteBook = (id) => {
  try {
    let books = getRead();
    const remaining = books.filter((book) => book?.bookId !== id);
    localStorage.setItem("books", JSON.stringify(remaining));
    toast.success("Bookmark Removed!");
  } catch (error) {
    console.error("Error removing bookmark:", error);
    toast.error("Failed to remove the bookmark!");
  }
};
