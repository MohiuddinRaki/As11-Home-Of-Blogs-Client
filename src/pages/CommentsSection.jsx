// import { useEffect, useState } from "react";

// const CommentsSection = () => {
//   const [comments, setComments] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/userComments")
//       .then((response) => response.json())
//       .then((result) => {
//         setComments(result);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   return (
//     <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
//         {
//             comments.map
//         }
      
//     </div>
//   );
// };

// export default CommentsSection;
