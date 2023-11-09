import DataTable from "react-data-table-component";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Footer from "../Footer";
// import "./featured.css";

const customStyles = {
  headRow: {
    style: {
      backgroundColor: "green",
      color: "white",
    },
  },
  headCells: {
    style: {
      fontSize: "20px",
      fontWeight: "600px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
      margin: "10px 0px 10px 0px",
    },
  },
};

const FeaturesBlogs = () => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    axios
      .get("https://b8a11-server-side-mohiuddin-raki.vercel.app/addBlog")
      .then((response) => {
        const featured = response.data;

        // Calculate word count for each blog post
        featured.forEach((blog) => {
          blog.wordCount = blog.longDescription.split(" ").length;
        });

        // Sort the blog posts by word count in descending order
        featured.sort((a, b) => b.wordCount - a.wordCount);

        // Set the top 10 posts in the state
        setFeaturedData(featured.slice(0, 10));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const column = [
    {
      name: "Serial",
      selector: (featured, index) => index + 1,
      sortable: true,
    },
    {
      name: "Name",
      selector: (featured) => featured.userName,
      sortable: true,
    },
    {
      name: "Picture",
      selector: (featured) => (
        <img
          className="w-16 h-16 rounded-full"
          src={featured.userPhoto}
          alt={featured.userName}
        />
      ),
    },
    {
      name: "Blog Title",
      selector: (featured) => featured.title,
      sortable: true,
    },
  ];
  return (
    <>
      <section>
        <div
          className="container mx-auto"
          style={{ padding: "md:50px md:10%", backgroundColor: "gray" }}
        >
          <DataTable
            columns={column}
            data={featuredData}
            customStyles={customStyles}
            pagination
            selectableRows
            responsive
          ></DataTable>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default FeaturesBlogs;
