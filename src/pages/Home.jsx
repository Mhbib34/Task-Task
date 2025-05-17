import { BackgroundBeams } from "../components/ui/background-beams";
import Button from "../components/common/Button";
import { ArrowRight } from "lucide-react";

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
          <h2 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-br from-primary to-tertiary via-secondary animate-text">
            Task-Task
          </h2>
          <Button
            className="px-4 py-2 bg-gray-900 flex items-center rounded-full  gap-1 text-primary"
            text="Get Started"
          >
            <ArrowRight className="text-sm" />
          </Button>
        </div>
      </div>
    </BackgroundBeams>
  );
};

export default Home;
