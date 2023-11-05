import Swal from "sweetalert2";
import Footer from "../Footer";

const AddBlog = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const imageUrl = form.imageUrl.value;
    const dateTime = new Date();
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true, 
      timeZoneName: 'short',
    };
    const currentTime = dateTime.toLocaleString("en-Us", options)

    const newAddBlog = {
      category,
      title,
      shortDescription,
      longDescription,
      imageUrl,
      currentTime,
    };
    console.log(newAddBlog);

    //  send data to the server:
    fetch("http://localhost:5000/addBlog", {
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
        <h2 className="text-center text-6xl font-bold mb-10">Add Blog</h2>
        <form onSubmit={handleAddProduct}>
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
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddBlog;
