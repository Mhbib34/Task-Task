import { assetsAvatar } from "../../assets/assets";

const Logo = () => {
  return (
    <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-primary to-tertiary via-secondary animate-text flex items-center justify-center gap-2">
      Task-Task
      <img src={assetsAvatar.logo} alt="" className="w-8 h-8" />
    </h2>
  );
};

export default Logo;
