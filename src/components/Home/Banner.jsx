import axios from "axios";
import { useEffect, useState } from "react";

const Banner = () => {
  const [subscribe, setSubscribe] = useState([]);
  useEffect(() => {
    axios
      .get("https://b8a11-server-side-mohiuddin-raki.vercel.app/subscribing")
      .then((response) => setSubscribe(response.data))
      //   .then((result) => {
      //     setFeedBacks(result);
      //   })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/2Mzykg7/blog-5648758.webp')`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            welcome to <br />
            <span className="text-amber-500">Home Of Blogs</span>
          </h1>
          <p className="mt-10 px-16 text-3xl font-medium text-emerald-500">
            We are committed to uncompromising quality on Blogs.
          </p>
          <h2 className="text-pink-500 text-5xl font-bold mt-3 border p-5 rounded-lg">
            Subscriber: {subscribe.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
