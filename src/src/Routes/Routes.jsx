import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesRead from "../Pages/PagesRead";
import ListedBook from "../Pages/ListedBook";
import ErrorMessage from "../Components/Error/ErrorMessage";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import WishlistBooks from "../Components/WishlistBooks/WishlistBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <ListedBooks />,
        children: [
          {
            index: true,
            element: <ReadBooks />,
            loader: ({}) => fetch("/books.json"),
          },
          {
            path: "wishlist",
            element: <WishlistBooks />,
            loader: ({}) => fetch("/books.json"),
          },
        ],
      },
      {
        path: "/book-details/:id",
        element: <ListedBook />,
        loader: ({}) => fetch("/books.json"),
      },

      {
        path: "/pages",
        element: <PagesRead />,
      },
    ],
    errorElement: <ErrorMessage />,
  },
]);

export default router;
