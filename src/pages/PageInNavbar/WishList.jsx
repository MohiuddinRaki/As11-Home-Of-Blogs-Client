import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import WishlistAdd from "./WishlistAdd";
import Footer from "../Footer";

const WishList = () => {
  const wishLoader = useLoaderData();
  const { email } = useParams();
  const wishload = wishLoader.filter((wish) => wish.email === email);
  const [wishlists, setWishlists] = useState(wishload);

  if (wishload.length < 1) {
    return (
      <div className="card container mx-auto mt-48">
        <figure>
          <img
            className="rounded-2xl"
            src="https://i.ibb.co/R7VxGBS/holiday-decorations-notebook-wishlist-rustic-wooden-table-gift-boxes-fir-branch-sprinkled-snow-top-v.webp"
          />
        </figure>
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
          {wishlists.map((wish) => (
            <WishlistAdd
              key={wish._id}
              wish={wish}
              wishlists={wishlists}
              setWishlists={setWishlists}
            ></WishlistAdd>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default WishList;
