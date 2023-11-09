import { useLoaderData } from "react-router-dom";
import Footer from "../../pages/Footer";
import AllBlog from "./AllBlog";
import { useState } from "react";

const AllBlogs = () => {
  const recentBlog = useLoaderData();
  const [filterBlogs, setFilterBlogs] = useState(recentBlog);
  const handleSearch = (event) => {
    const filteringBlog = filterBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterBlogs(filteringBlog);
  };
  const handleSearchCaetegory = (event) => {
    const filteringBlogs = filterBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterBlogs(filteringBlogs);
  };

  return (
    <>
      <div>
        <div>
          <div className="container mx-auto my-5 flex flex-col md:flex-row items-center md:justify-center gap-5">
            <div>
              <form onChange={handleSearchCaetegory}>
                <select type="text" className="input input-bordered">
                  <option value={recentBlog}>All</option>
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
              </form>
            </div>
            <div>
              <input
                className="text-xl input input-bordered font-medium text-center py-2"
                type="text"
                placeholder="search by title..."
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {filterBlogs.map((blog, idx) => (
              <AllBlog key={idx} blog={blog}></AllBlog>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default AllBlogs;
