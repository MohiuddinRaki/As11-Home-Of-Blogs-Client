import { useLoaderData } from "react-router-dom";
// import Banner from "./Banner";
// import FeedBack from "./FeedBack";
// import BrandCard from "./BrandCard";
import RecentBlog from "./RecentBlog";
import Footer from "../../pages/Footer";
import NewsLetterSection from "./NewsLetterSection";
// import GoogleMap from "./GoogleMap";
// import Team from "./Team";

const RecentBlogs = () => {
  const recentBlog = useLoaderData();

  return (
    <div>
      {/* <Banner></Banner> */}
      <div>
        <h1 className="text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
          Recent Blogs
        </h1>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {recentBlog.slice(-6).map((blog, idx) => (
            <RecentBlog key={idx} blog={blog}></RecentBlog>
          ))}
        </div>
      </div>
      {/* <FeedBack></FeedBack>
      <Team></Team>
      <GoogleMap></GoogleMap> */}
      <NewsLetterSection></NewsLetterSection>
      <Footer></Footer>
    </div>
  );
};

export default RecentBlogs;
