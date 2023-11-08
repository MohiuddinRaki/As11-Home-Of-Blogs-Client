import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";
import Footer from "./Footer";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    setLoginError("");

    signInUser(email, password)
      .then((res) => {
        toast.success("User logged in successfully");
        naviGate(location?.state ? location.state : "/");
        console.log(res.user);
      })
      .catch((error) => {
        setLoginError("password or email doesn't match");
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-center my-16">Please Login</h2>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <p>
              {setLoginError && <p className="text-red-600">{loginError}</p>}
            </p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center px-4 text-lg mb-5">
            Do Not Have An Account? Please
            <Link
              className="text-xl pl-2 font-semibold text-red-600"
              to="/register"
            >
              Register
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
