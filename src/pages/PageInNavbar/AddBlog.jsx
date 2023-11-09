import Swal from "sweetalert2";
import Footer from "../Footer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const handleAddBlog = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const imageUrl = form.imageUrl.value;
    const userEmail = user?.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
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

    const newAddBlog = {
      category,
      title,
      shortDescription,
      longDescription,
      imageUrl,
      userEmail,
      userName,
      userPhoto,
      currentTime,
    };
    console.log(newAddBlog);

    //  send data to the server:
    fetch("https://b8a11-server-side-mohiuddin-raki.vercel.app/addBlog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddBlog),
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

  return (
    <>
      <div className="bg-[#F4F3F0] p-24 my-12">
        <h2 className="text-center text-6xl font-bold mb-10 text-lime-500">Add Blog</h2>
        <form onSubmit={handleAddBlog}>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Category
                </span>
              </label>
              <label className="input-group">
                <select
                  type="text"
                  name="category"
                  placeholder="Category"
                  required
                  className="input input-bordered w-full"
                >
                  <option value="Technology">Technology</option>
                  <option value="Travel">Travel</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Food & Cooking">Food & Cooking</option>
                  <option value="Finance">Finance</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Sports and Recreatio">
                    Sports and Recreatio
                  </option>
                  <option value="Science and Technology">
                    Science and Technology
                  </option>
                  <option value="Gardening and Landscaping">
                    Gardening and Landscaping
                  </option>
                  <option value="Pet Care and Tips">Pet Care and Tips</option>
                  <option value="Art and Creativity">Art and Creativity</option>
                  <option value="Environmental Sustainability">
                    Environmental Sustainability
                  </option>
                  <option value="Career Development">Career Development</option>
                  <option value="Movie and Entertainment">
                    Movie and Entertainment
                  </option>
                  <option value="Book Reviews">Book Reviews</option>
                  <option value="Outdoor Adventures">Outdoor Adventures</option>
                  <option value="Parenting Tips">Parenting Tips</option>
                  <option value="Home Decor & DIY">Home Decor & DIY</option>
                  <option value="Fashion Forward">Fashion Forward</option>
                  <option value="Lifestyle Hacks">Lifestyle Hacks</option>
                </select>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Blog"
            className="btn btn-block text-white bg-lime-500 mt-8"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddBlog;
