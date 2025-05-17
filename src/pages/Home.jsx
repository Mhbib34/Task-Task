import { BackgroundBeams } from "../components/ui/background-beams";
import ButtonNext from "../components/fragment/ButtonNext";
import { assetsAvatar } from "../assets/assets";

const Home = () => {
  return (
    <BackgroundBeams className="bg-black">
      <div className="md:px-10 px-5 pb-5 pt-10 flex flex-col justify-between w-full h-full">
        <div className="text-white w-full flex flex-col gap-2">
          <h1 className="font-bold text-6xl text-secondary">Welcome</h1>
          <p className="text-gray-400 text-2xl">
            Manage your task <br /> very easily!
          </p>
        </div>
        <div className=" flex justify-between w-full items-center">
          <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-primary to-tertiary via-secondary animate-text flex items-center justify-center gap-2">
            Task-Task
            <img src={assetsAvatar.logo} alt="" className="w-8 h-8" />
          </h2>
          <ButtonNext text="Get Started" />
        </div>
      </div>
    </BackgroundBeams>
  );
};

export default Home;
