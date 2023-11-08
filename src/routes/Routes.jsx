import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Root from "../components/Root";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "../pages/PageInNavbar/AddBlog";
import RecentBlogs from "../components/Home/RecentBlogs";
import BlogsDetails from "../pages/PageInNavbar/BlogsDetails";
import WishList from "../pages/PageInNavbar/WishList";
import AllBlogs from "../pages/PageInNavbar/AllBlogs";
import UpdateBlog from "../pages/UpdateBlog";
import FeaturesBlogs from "../pages/PageInNavbar/FeaturesBlogs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <RecentBlogs></RecentBlogs>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/allBlogs",
        element: (
          <PrivateRoute>
            <AllBlogs></AllBlogs>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/featuredBlogs",
        element: (
          <PrivateRoute>
            <FeaturesBlogs></FeaturesBlogs>
          </PrivateRoute>
        ),
        // loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/blogDetails/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addBlog/${params._id}`),
        element: (
          <PrivateRoute>
            <BlogsDetails></BlogsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateBlog/:_id",
        element: (
          <PrivateRoute>
            <UpdateBlog></UpdateBlog>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/addBlog"),
      },

      {
        path: "/addBlog",
        element: (
          <PrivateRoute>
            <AddBlog></AddBlog>
          </PrivateRoute>
        ),
      },

      {
        path: "/wishlist/:email",
        loader: () => fetch("http://localhost:5000/wishlist"),
        element: (
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Routes;
