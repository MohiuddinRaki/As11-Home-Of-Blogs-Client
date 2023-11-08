import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./../providers/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
import Footer from "./Footer";

const Register = () => {
  const { creatUser, handleUpdateProfile } = useContext(AuthContext);
  const naviGate = useNavigate();
  const [registerError, setRegisterError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      setRegisterError(
        "Your password should have at least one numeric character."
      );
      return;
    } else if (!/[!@#$%^&*()_+{}/:;<>,.?~|-]/.test(password)) {
      setRegisterError("Your password should have a special character");
      return;
    }

    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
        handleUpdateProfile(name, photo).then(() => {
          toast.success("User logged in successfully");
          e.target.reset();
          naviGate("/");
        });
        const newUserBlog = { email };
        //  send data to the server:
        fetch("https://b8a11-server-side-mohiuddin-raki.vercel.app/userBlog", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUserBlog),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User Added Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
            e.target.reset();
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center my-16">
          Please Register
        </h2>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">
                  Photo URL
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder=" Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                required
              />
              {registerError && <p className="text-red-700">{registerError}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center px-4 text-lg mb-5">
            Already Have An Account? Please
            <Link
              className="text-xl pl-2 font-semibold text-red-600"
              to="/login"
            >
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
