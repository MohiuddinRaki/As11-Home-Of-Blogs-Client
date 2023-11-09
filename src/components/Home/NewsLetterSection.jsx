import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const NewsLetterSection = () => {
  const [subscribed, setSubscribed] = useState([]);
  const handleSubsCribe = (event) => {
    event.preventDefault();
    const form = event.target;
    const yourEmail = form.yourEmail.value;
    const subscribes = subscribed.find(
      (subscribe) => subscribe?.yourEmail === yourEmail
    );
    const dateTime = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short",
    };
    const currentTime = dateTime.toLocaleString("en-Us", options);

    const newSubscribingEmail = {
      yourEmail,
      currentTime,
    };
    console.log(newSubscribingEmail);

    //  send data to the server:
    if (subscribes) {
      return Swal.fire({
        title: "Done!",
        text: "Already subscribed with this email",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }

    fetch("https://b8a11-server-side-mohiuddin-raki.vercel.app/subscribing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSubscribingEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Done!",
            text: "Thank you for subscribe",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        event.target.reset();
      });
  };

  useEffect(() => {
    axios
      .get("https://b8a11-server-side-mohiuddin-raki.vercel.app/subscribing")
      .then((response) => setSubscribed(response.data))
      //   .then((result) => {
      //     setFeedBacks(result);
      //   })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24 my-12">
        <h2 className="text-2xl md:text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
          Please SubsCribe
        </h2>
        <form className="text-center" onSubmit={handleSubsCribe}>
          <div className="form-control w-full">
            <label className="input-group">
              <input
                type="email"
                name="yourEmail"
                placeholder="Write Your Email"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Subscribe"
            className="btn  w-full lg:w-1/2 bg-lime-500 mt-8"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;

