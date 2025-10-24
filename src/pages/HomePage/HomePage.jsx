import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import ExpertVets from "../../components/ExpertVets/ExpertVets";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <PopularServices />
      <WinterCareTips />
      <ExpertVets />
    </div>
  );
};

export default HomePage;
