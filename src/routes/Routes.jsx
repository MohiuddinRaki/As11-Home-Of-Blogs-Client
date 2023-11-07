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
// import CommentsSection from "../pages/CommentsSection";
// import UpdateProduct from "../components/UpdateProduct";
// import MyCart from "../components/MyCart";
// import BrandCards from "../components/BrandCards";
// import BrandProducts from "../components/BrandProducts";
// import BrandUnic from "../components/BrandUnic";
// import ProductsDetails from "../components/ProductsDetails";
// import Team from "../components/Team";

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
        element: <AllBlogs></AllBlogs>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      {
        path: "/featuredBlogs",
        element: <FeaturesBlogs></FeaturesBlogs>,
        loader: () => fetch("http://localhost:5000/addBlog"),
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
        element: <UpdateBlog></UpdateBlog>,
        loader: () => fetch("http://localhost:5000/addBlog"),
      },
      // {
      //   element: <CommentsSection></CommentsSection>,
      //   loader: () => fetch("http://localhost:5000/userComments"),
      // },

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
