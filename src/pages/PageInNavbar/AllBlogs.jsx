import { useLoaderData } from "react-router-dom";
// import Banner from "./Banner";
// import FeedBack from "./FeedBack";
// import BrandCard from "./BrandCard";
import Footer from "../../pages/Footer";
import AllBlog from "./AllBlog";
// import GoogleMap from "./GoogleMap";
// import Team from "./Team";

const AllBlogs = () => {
  const recentBlog = useLoaderData();

  return (
    <div>
      {/* <Banner></Banner> */}
      <div>
        <h1 className="text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
          All Blogs
        </h1>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {recentBlog.map((blog, idx) => (
            <AllBlog key={idx} blog={blog}></AllBlog>
          ))}
        </div>
      </div>
      {/* <FeedBack></FeedBack>
      <Team></Team>
      <GoogleMap></GoogleMap> */}
      <Footer></Footer>
    </div>
  );
};

export default AllBlogs;
