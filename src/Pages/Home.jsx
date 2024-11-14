import React from "react";

import NatureVid from "../assets/video/ocean.mp4";
import Hero from "../components/Hero/Hero";



const Home = () => {
  // const [orderPopup, setOrderPopup] = React.useState(false);

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]">
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        {/* <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
    </>
  );
};

export default Home;
