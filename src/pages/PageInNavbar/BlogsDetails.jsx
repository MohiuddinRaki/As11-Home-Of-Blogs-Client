// import { useLoaderData, useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
// import CommentsSection from "../CommentsSection";
import CommentSection from "../CommentSection";

const BlogsDetails = () => {
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, shortDescription, longDescription, category, imageUrl } =
    blogs;

  // const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/userComments")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setComments(result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);
  // const specifyblogsComments = comments.filter(
  //   (comment) => comment._id === blogs._id
  // );

  const handleAddComments = (event) => {
    event.preventDefault();
    const form = event.target;
    const comments = form.comments.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const blogId = _id;
    const dateTime = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short",
    };
    const currentTime = dateTime.toLocaleString("en-Us", options);

    const newUserComments = {
      comments,
      userEmail,
      userName,
      userPhoto,
      blogId,
      currentTime,
    };
    console.log(newUserComments);

    //  send data to the server:
    fetch("http://localhost:5000/userComments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUserComments),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Blog Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        event.target.reset();
      });
  };

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
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/userComments")
      .then((response) => response.json())
      .then((result) => {
        setComments(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const specifyblogsComments = comments.filter(
    (comment) => comment.blogId === blogs._id
  );
  return (
    <>
      <div className="card card-compact max-w-5xl bg-gray-500 shadow-xl container mx-auto p-8 md:p-16 lg:p-0">
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
      <div className="bg-base-100 my-12 max-w-5xl mx-auto">
        <form onSubmit={handleAddComments}>
          <div className="container mx-auto p-8 md:p-16 lg:p-0">
            {specifyblogsComments.map((specifyComment) => (
              <CommentSection
                key={specifyComment._id}
                specifyComment={specifyComment}
              ></CommentSection>
            ))}
          </div>
          <div className="text-center">
            <textarea
              // value={text}
              className="bg-base-300 px-5 py-3 rounded-full w-full"
              type="text"
              rows="1"
              cols="80"
              name="comments"
              required
              placeholder="Write Your Comments"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Post"
            className="btn btn-block bg-lime-500"
          />
        </form>
      </div>
    </>
  );
};

export default BlogsDetails;
