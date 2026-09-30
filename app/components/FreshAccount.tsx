import { useState } from "react";
import AnimateButton from "./AnimateButton";

export default function FreshAccount() {
  const [active, setActive] = useState(false);
  function toggleActive() {
    setActive((prev) => !prev);
  }
  return (
    <div className="relative">
      <button
        className="bg-linear-0 from-primary to-tertiary-400 py-2 sm:px-10 text-white  rounded-full shadow cursor-pointer"
        onClick={toggleActive}
      >
        Account
      </button>
      {/* <AnimateButton /> */}
      {active && (
        <div className="absolute p-4 bg-white w-60 shadow-2xl rounded-2xl flex flex-col   text-white">
          <button className="w-full p-3 rounded-lg bg-secondary cursor-pointer hover:bg-primary duration-300">
            Create an Account
          </button>
          <button className="w-full my-3 p-3 rounded-lg bg-primary cursor-pointer hover:bg-secondary duration-300">
            Login{" "}
          </button>
          <p className="text-black border-t py-3">
            Kindly Login or Create an account for a better Account, to get some
            awesome offer
          </p>
        </div>
      )}
    </div>
  );
}
