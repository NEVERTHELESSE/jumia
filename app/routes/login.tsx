import { FaStar } from "react-icons/fa";
import LoginLoading from "~/loading/LoginLoading";

export default function login() {
  return (
    <main className="flex flex-col  justify-center items-center">
      <div className="w-140 flex flex-col justify-center items-center">
        <div className="size-20 text-white bg-primary flex rounded-full items-center justify-center">
          <FaStar size={60} />
        </div>
        <LoginLoading />
        <h3 className="text-2xl font-bold">Welcome to Jumia</h3>
        <p className="my-4">Use your email or phone to login or sign up</p>
        <form action="" className="w-full my-5 ">
          <input
            type="text"
            className="w-full p-2 text-2xl border border-primary"
          />
          <button className="p-2 w-full bg-soft my-8">Continue</button>
        </form>
        <p>Or log in with</p>
      </div>
    </main>
  );
}
