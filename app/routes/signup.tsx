import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaApple,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router";
import Logo from "~/components/Logo";
import { supabase } from "~/lib/supabase";

export default function signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  function togglePasswordShow() {
    setHidePassword((prev) => !prev);
  }
  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    e.preventDefault();

    const { data, error } = await supabase
      .from("user")
      .insert({
        username,
        email,
        password,
      })
      .select();
    if (error) {
      console.log(error);
      return;
    }
    console.log("insertId:", data);

    console.log(username, email, password, confirmPassword);
  }

  return (
    <main className="w-screen flex-col flex items-center justify-center h-screen -ml-20  ">
      <div className="w-100 flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl sm:p-6 my-4">
        <Logo />
        <form action="" className="w-full" onSubmit={createAccount}>
          <h2 className="text-center">Kindly Create an Account</h2>
          <div className="relative w-full flex items-center">
            <input
              required

              type="text"
              minLength={3}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }

              placeholder="Username"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg"
            />
            <FaUser
              title="Create a username"
              className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
            />
          </div>
          <div className="relative w-full flex items-center">
            <input
              type="email"
              required

              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }

              placeholder="Email address"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg"
            />
            <FaEnvelope
              title="Enter your email address"
              className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
            />
          </div>
          <div className="relative w-full flex items-center">
            <input
              type={hidePassword ? "password" : "text"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              minLength={6}
              required

              placeholder="Password"
              className="w-full border-soft shadow border my-3 p-4 rounded-lg  "
            />
            {hidePassword ? (
              <FaEye
                title="Show Password"

                className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
                onClick={togglePasswordShow}
              />
            ) : (
              <FaEyeSlash
                title="Hide Password"

                className="absolute right-4 cursor-pointer hover:scale-150 duration-500"
                onClick={togglePasswordShow}
              />
            )}
          </div>
          <input
            required
            type={hidePassword ? "password" : "text"}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            minLength={6}

            placeholder="Confirm Password"
            className="w-full border-soft shadow border my-3 p-4 rounded-lg  "
          />
          <button className="bg-primary rounded-2xl p-4 text-white w-full my-3 hover:bg-secondary duration-500 ">
            Create Account
          </button>
        </form>

        <div className="flex items-center flex-col justify-center w-full">
          <div className="flex w-full items-center justify-between">
            <div className="w-35 border-b-2 border-primary h-2 "></div>
            <p>Or</p>
            <div className="w-35 border-b-2 border-primary h-2 "></div>
          </div>
          <button className="flex w-full my-3 items-center rounded-2xl p-4 cursor-pointer bg-soft">
            <FaGoogle />
            <p className="ml-2">Signup with Google Account</p>
          </button>
          <button className="flex w-full mt-3 items-center rounded-2xl p-4 cursor-pointer bg-soft">
            <FaApple />
            <p className="ml-2">Signup with Apple Account</p>
          </button>
        </div>
      </div>
      <div className="flex">
        <p>Already have an account </p>
        <Link to="/login" className="ml-3 text-primary">
          Login
        </Link>
      </div>
    </main>
  );
}
