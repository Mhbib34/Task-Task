import React, { useState } from "react";
import AvatarImage from "../components/fragment/AvatarImage";
import { assetsAvatar } from "../assets/assets";
import ButtonNext from "../components/fragment/ButtonNext";

const Avatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(() =>
    localStorage.getItem("avatar")
  );

  const handleAvatarClick = (image) => {
    localStorage.setItem("avatar", image);
    setSelectedAvatar(image);
  };

  return (
    <div className="bg-black h-screen flex justify-center items-center flex-col gap-6">
      <h1 className="text-white text-3xl font-bold">Select Your Avatar</h1>
      <div className="flex gap-3">
        <AvatarImage
          image={assetsAvatar.av1}
          isSelected={selectedAvatar === assetsAvatar.av1}
          onClick={() => handleAvatarClick(assetsAvatar.av1)}
        />
        <AvatarImage
          image={assetsAvatar.av2}
          isSelected={selectedAvatar === assetsAvatar.av2}
          onClick={() => handleAvatarClick(assetsAvatar.av2)}
        />
        <AvatarImage
          image={assetsAvatar.av3}
          isSelected={selectedAvatar === assetsAvatar.av3}
          onClick={() => handleAvatarClick(assetsAvatar.av3)}
        />
      </div>
      <ButtonNext text="Next" />
    </div>
  );
};

export default Avatar;
