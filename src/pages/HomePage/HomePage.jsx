import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import ExpertVets from "../../components/ExpertVets/ExpertVets";
import "animate.css";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider */}
      <div className="animate__animated animate__slideInDown animate__faster">
        <HeroSlider />
      </div>

      {/* Popular Services */}
      <div className="animate__animated animate__slideInUp animate__delay-500ms">
        <PopularServices />
      </div>

      {/* Winter Care Tips */}
      <div className="animate__animated animate__slideInDown animate__delay-1000ms">
        <WinterCareTips />
      </div>

      {/* Expert Vets */}
      <div className="animate__animated animate__slideInUp animate__delay-1500ms">
        <ExpertVets />
      </div>
    </div>
  );
};

export default HomePage;
