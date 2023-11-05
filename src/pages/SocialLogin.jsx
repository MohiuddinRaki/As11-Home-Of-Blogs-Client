import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLoginUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = () => {
    googleLoginUser()
      .then(() => {
        toast.success("User logged in successfully");
        naviGate(location?.state ? location.state : "/");

        const newUser = { googleLoginUser };
        //  send data to the server:
        fetch(
          "https://b8a10-brandshop-server-side-mohiuddin-raki-6bicgiy8b.vercel.app/user",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
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
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="mx-auto">
        <button
          onClick={() => handleSocialLogin()}
          className="btn btn-primary btn-sm"
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;