import React from "react";
import BannerImg from "../assets/images/banner-1.jpeg";

const Banner = () => {
  return (
    <div className="">
      {/* Banner */}
      <img src={BannerImg} style={{ width: "100%" }} className="image"></img>
      <div className="overlay text-container">
        <div style={{ margin: "auto", width: "400px" }}>
          <h1
            style={{
              margin: "auto",
              color: "#c8a97e",
              fontSize: "100px",
            }}
          >
            Foody.pk
          </h1>
          <h4 style={{ color: "#c8a97e" }}>
            “You don’t need a silver fork to eat good food.” – Paul Prudhomme
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
