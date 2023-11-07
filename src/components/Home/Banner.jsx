const Banner = () => {
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
            <p className="mt-10 px-16 text-2xl font-medium text-emerald-500">
              We are committed to uncompromising quality on Blogs.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;