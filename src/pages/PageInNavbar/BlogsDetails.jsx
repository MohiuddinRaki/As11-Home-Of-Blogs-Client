import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import CommentSection from "../CommentSection";
import axios from "axios";
import { motion } from "framer-motion";

const BlogsDetails = () => {
  const blogs = useLoaderData();
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    shortDescription,
    longDescription,
    category,
    imageUrl,
    userEmail,
  } = blogs;

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
    fetch("https://b8a11-server-side-mohiuddin-raki.vercel.app/userComments", {
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
            text: "Comment Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        event.target.reset();
      });
  };

  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get("https://b8a11-server-side-mohiuddin-raki.vercel.app/userComments")
      .then((response) => setComments(response.data))
      // .then((result) => {
      //   setComments(result);
      // })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const specifyblogsComments = comments.filter(
    (comment) => comment.blogId === blogs._id
  );
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
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
      </motion.div>
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
          {user?.email === userEmail ? (
            <div className="my-5">
              <h2 className="text-center text-5xl font-bold my-10 text-red-500">
                Can not comment on own blog
              </h2>
              <Link to={`/updateBlog/${_id}`}>
                <button className="btn bg-lime-500 w-full">Update</button>
              </Link>
            </div>
          ) : (
            <div>
              <div className="text-center">
                <textarea
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
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default BlogsDetails;
