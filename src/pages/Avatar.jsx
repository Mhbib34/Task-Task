import React, { useEffect, useState } from "react";
import AvatarImage from "../components/fragment/AvatarImage";
import { assetsAvatar } from "../assets/assets";
import ButtonNext from "../components/fragment/ButtonNext";
import Swal from "sweetalert2";

const Avatar = () => {
  const [selectedAvatar, setSelectedAvatar] = useState(() =>
    localStorage.getItem("avatar")
  );
  // eslint-disable-next-line
  const [name, setName] = useState("");
  const inputName = async () => {
    const { value: name } = await Swal.fire({
      title: "Tell me your name",
      input: "text",
      inputPlaceholder: "Enter your beautiful name",
      confirmButtonColor: "#6344f5",
    });
    if (name) {
      setName(name);
      localStorage.setItem("name", name);
    }
  };
  useEffect(() => {
    inputName();
  }, []);

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
          className="h-20 w-20"
          isSelected={selectedAvatar === assetsAvatar.av1}
          onClick={() => handleAvatarClick(assetsAvatar.av1)}
        />
        <AvatarImage
          image={assetsAvatar.av2}
          className="h-20 w-20"
          isSelected={selectedAvatar === assetsAvatar.av2}
          onClick={() => handleAvatarClick(assetsAvatar.av2)}
        />
        <AvatarImage
          image={assetsAvatar.av3}
          className="h-20 w-20"
          isSelected={selectedAvatar === assetsAvatar.av3}
          onClick={() => handleAvatarClick(assetsAvatar.av3)}
        />
      </div>
      <ButtonNext text="Next" href="/main" />
    </div>
  );
};

export default Avatar;
