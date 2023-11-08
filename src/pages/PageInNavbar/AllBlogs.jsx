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

  return (
    <>
      <div>
        <div>
          <div className="text-center my-5">
            <input
              className="text-xl border font-medium text-center py-2"
              type="text"
              placeholder="search by title..."
              onChange={handleSearch}
            />
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
