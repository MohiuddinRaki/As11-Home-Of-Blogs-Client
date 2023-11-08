import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AllBlog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const { _id, title, category, imageUrl, shortDescription } = blog;

  const handleAddWishlist = (blog) => {
    const category = blog.category;
    const title = blog.title;
    const imageUrl = blog.imageUrl;
    const shortDescription = blog.shortDescription;
    const newWishlist = { title, category, imageUrl, shortDescription, email };

    //  send data to the server:
    fetch("http://localhost:5000/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newWishlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Added to Wishlist Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <div className="card card-compact bg-gray-500 shadow-xl">
        <figure>
          <img className="w-full h-72" src={imageUrl} alt={category} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold text-orange-500">{category}</h2>
            <h2 className="text-xl font-medium text-teal-500 ">{title}</h2>
            <h2 className="text-lg text-lime-500">{shortDescription}</h2>
          </div>
          <div className="flex gap-7">
            <Link to={`/blogDetails/${_id}`} className="btn btn-success">
              Details
            </Link>
            <Link
              onClick={() => handleAddWishlist(blog)}
              className="btn btn-accent"
            >
              Add Wishlist
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlog;

AllBlog.propTypes = {
  blog: PropTypes.object.isRequired,
};
