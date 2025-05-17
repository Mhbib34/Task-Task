import { assetsAvatar } from "../../assets/assets";
import React from "react";

const SplashScreen = () => {
  return (
    <div className="h-screen w-screen  bg-black flex items-center justify-center">
      <img
        src={assetsAvatar.logo}
        alt="Logo"
        className="w-32 h-32 animate-pulse"
      />
    </div>
  );
};

export default SplashScreen;
