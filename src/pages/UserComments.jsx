// import { useContext } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../providers/AuthProvider";
// import CommentsSection from "./CommentsSection";

// const UserComments = () => {
//   const { user } = useContext(AuthContext);
//   const handleAddComments = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const comments = form.comments.value;
//     const userEmail = user?.email;
//     const userName = user?.displayName;
//     const userPhoto = user?.photoURL;
//     const dateTime = new Date();
//     const options = {
//       year: "numeric",
//       month: "numeric",
//       day: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//       timeZoneName: "short",
//     };
//     const currentTime = dateTime.toLocaleString("en-Us", options);

//     const newUserComments = {
//       comments,
//       userEmail,
//       userName,
//       userPhoto,
//       currentTime,
//     };
//     console.log(newUserComments);

//     //  send data to the server:
//     fetch("http://localhost:5000/userComments", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newUserComments),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.insertedId) {
//           Swal.fire({
//             title: "Success!",
//             text: "Blog Added Successfully",
//             icon: "success",
//             confirmButtonText: "Cool",
//           });
//         }
//         event.target.reset();
//       });
//   };

//   return (
//     <>
//       <CommentsSection></CommentsSection>
//       <div className="bg-[#F4F3F0] pt-24 my-12 max-w-6xl mx-auto rounded-2xl">
//         <h2 className="text-center text-6xl font-bold mb-10">
//           Please Write Your Comments
//         </h2>
//         <form onSubmit={handleAddComments}>
//           <div className="text-center">
//             {" "}
//             <textarea
//               // value={text}
//               className="rounded-2xl py-7 px-11"
//               type="text"
//               rows="8"
//               cols="80"
//               name="comments"
//               required
//               placeholder="Write Your Comments"
//             ></textarea>
//           </div>
//           <input
//             type="submit"
//             value="Post"
//             className="btn btn-block text-white bg-black mt-8"
//           />
//         </form>
//       </div>
//     </>
//   );
// };

// export default UserComments;
