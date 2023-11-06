// import { useLoaderData, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import { useLoaderData } from "react-router-dom";

const BlogsDetails = () => {
  const blogs = useLoaderData();
  const { title, shortDescription, longDescription, category, imageUrl } =
    blogs;
  //   const { user } = useContext(AuthContext);
  //   const email = user.email;
  //   const { category, image  } = useParams();
  //   const product = products.find((product) => product._id === _id);

  //   const handleAddCart = (product) => {
  //     const photo = product.photo;
  //     const name = product.name;
  //     const description = product.description;
  //     const newCart = { photo, name, description, email };

  //     //  send data to the server:
  //     fetch(
  //       `http://localhost:5000/addBlog/${_id}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(newCart),
  //       }
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.insertedId) {
  //           Swal.fire({
  //             title: "Success!",
  //             text: "Product Added to Cart Successfully",
  //             icon: "success",
  //             confirmButtonText: "Cool",
  //           });
  //         }
  //       });
  //   };

  //   useEffect(() => {
  //     Aos.init();
  //   }, []);

  return (
    <>
      <div
        className="card card-compact max-w-5xl bg-gray-500 shadow-xl container mx-auto p-8 md:p-16 lg:p-0"
      >
        <figure>
          <img className="w-full h-72" src={imageUrl} alt={category} />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-4xl font-bold text-orange-500">{category}</h2>
            <h2 className="text-2xl font-medium text-teal-500 ">{title}</h2>
            <h2 className="text-xl text-lime-500">{shortDescription}</h2>
            <h2 className="text-lg text-sky-500">{longDescription}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
