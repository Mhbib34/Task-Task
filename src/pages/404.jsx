import React from "react";
import { MehIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col gap-2 bg-black">
      <MehIcon className="w-64 h-64 text-primary" />
      <span className="text-4xl text-primary">Not Found Page</span>
    </div>
  );
};

export default NotFound;
