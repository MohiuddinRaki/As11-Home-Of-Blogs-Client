import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const WishlistAdd = ({ wish, wishlists, setWishlists }) => {
  const { _id, category, imageUrl, shortDescription } = wish;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b8a11-server-side-mohiuddin-raki.vercel.app/wishlist/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = wishlists.filter(
                (wishlst) => wishlst._id !== _id
              );
              setWishlists(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="card bg-gray-500 shadow-xl"
        data-aos="fade-right"
      >
        <figure>
          <img className="h-96" src={imageUrl} alt={category} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl text-amber-500">
            {category}
          </h2>
          <p className=" font-medium text-emerald-500">{shortDescription}</p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WishlistAdd;

WishlistAdd.propTypes = {
  wish: PropTypes.object.isRequired,
  wishlists: PropTypes.object.isRequired,
  setWishlists: PropTypes.object.isRequired,
};
