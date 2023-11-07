import Swal from "sweetalert2";
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import { AuthContext } from "../providers/AuthProvider";

const UpdateBlog = () => {
  const { user } = useContext(AuthContext);
  const blogLoader = useLoaderData();
  const { _id } = useParams();
  const blogs = blogLoader.find((blog) => blog._id === _id);

  const handleUpdateBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const imageUrl = form.imageUrl.value;
    const userEmail = user?.email;
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

    const updateBlog = {
      category,
      title,
      shortDescription,
      longDescription,
      imageUrl,
      userEmail,
      currentTime,
    };
    console.log(updateBlog);

    //  send data to the server:
    fetch(`http://localhost:5000/addBlog/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Blog Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        event.target.reset();
      });
  };

  return (
    <>
      <div className="bg-[#F4F3F0] p-24 my-12">
        <h2 className="text-center text-6xl font-bold mb-10">Update Blog</h2>
        <form onSubmit={handleUpdateBlog}>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Category
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  defaultValue={blogs.category}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  defaultValue={blogs.title}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="shortDescription"
                placeholder="Short Description"
                defaultValue={blogs.shortDescription}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Long Description
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="longDescription"
                placeholder="Long Description"
                defaultValue={blogs.longDescription}
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Image Url
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imageUrl"
                required
                placeholder="Image Url"
                defaultValue={blogs.imageUrl}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Update Product"
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateBlog;
