import { useLoaderData } from "react-router-dom";
import DataTable from "react-data-table-component";

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
      margin: "10px 0px 10px 0px"
    },
  },
};

const FeaturesBlogs = () => {
  const featuredLoader = useLoaderData();
//   const featuredLongDes = featuredLoader.filter()
//   const featuredunic = featuredLongDes < 11
  const column = [
    {
      name: "Serial",
      selector: (featured, index) => index + 1,
      sortable: true
    },
    {
      name: "Name",
      selector: (featured) => featured.userName,
      sortable: true
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
      sortable: true
    },
  ];
  return (
    <div style={{ padding: "50px 10%", backgroundColor: "gray" }}>
      <DataTable
        columns={column}
        data={featuredLoader}
        customStyles={customStyles}
        pagination
        selectableRows
      ></DataTable>
    </div>
  );
};

export default FeaturesBlogs;
