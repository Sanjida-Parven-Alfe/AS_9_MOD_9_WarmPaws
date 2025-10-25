import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import PopularServices from "../../components/PopularServices/PopularServices";
import WinterCareTips from "../../components/WinterCareTips/WinterCareTips";
import ExpertVets from "../../components/ExpertVets/ExpertVets";
import "animate.css";

const HomePage = () => {
  const location = useLocation();
  const hasShownToast = useRef(false); 

  useEffect(() => {
    if (location.state?.toastMessage && !hasShownToast.current) {
      toast.success(location.state.toastMessage);
      hasShownToast.current = true; 
      window.history.replaceState({}, document.title); 
    }
  }, [location.state]);

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
