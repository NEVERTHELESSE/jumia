import { useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FiMessageSquare, FiShoppingCart, FiUser } from "react-icons/fi";
import { accounts, options } from "~/data/navigates";

export default function HeaderOption() {
  const [showAccountDetail, setShowAccountDetail] = useState(false);
  const [showHelpDetail, setShowHelpDetail] = useState(false);

  function toggleAccountDetail() {
    setShowAccountDetail(!showAccountDetail);
    setShowHelpDetail(showHelpDetail && !showHelpDetail);
  }

  function toggleHelpDetails() {
    setShowHelpDetail(!showHelpDetail);
    setShowAccountDetail(showAccountDetail && !showAccountDetail);
  }

  const buttonStyle =
    "items-center flex relative ml-2 cursor-pointer hover:bg-soft p-1  rounded-lg ";
  return (
    <section className="flex">
      <main className={buttonStyle}>
        <button onClick={toggleAccountDetail} className={buttonStyle}>
          <FiUser className="text-2xl sm:text-1xl" />

          <span className="ml-2 hidden sm:flex">Account</span>
        </button>

        <section
          className={`absolute   bg-white top-10 w-50 shadow p-2 rounded-lg ${showAccountDetail ? "flex " : "hidden"}`}
        >
          <div className="w-full">
            <button className="primary w-full p-2 rounded-lg shadow ">
              Sign In
            </button>
            <ul>
              {accounts.map(({ id, title, icon }) => (
                <li
                  key={id}
                  className="p-2 flex cursor-pointer hover:bg-soft rounded-lg  items-center"
                >
                  <span className=" mr-3">{icon}</span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <main className={buttonStyle}>
        <button
          onClick={toggleHelpDetails}
          className="flex items-center hidden sm:flex cursor-pointer"
        >
          <AiFillQuestionCircle />
          <span className="ml-2 ">Help</span>
        </button>
        <section
          className={`absolute top-10 w-50 shadow p-2 rounded-lg ${showHelpDetail ? "flex " : "hidden"}`}
        >
          <ul className="w-full p-2 my-2 rounded-lg bg-white">
            {options.map((option) => (
              <li
                key={option}
                className="p-2 flex cursor-pointer hover:bg-soft rounded-lg  items-center"
              >
                {option}
              </li>
            ))}
            <button className="primary w-full p-2 rounded-lg shadow my-2 flex justify-center items-center ">
              <FiMessageSquare />
              <span className="ml-2 ">Live Chat</span>
            </button>
            <button className="border-green-400 border w-full p-2 rounded-lg shadow flex text-green-400 justify-center items-center ">
              <BsWhatsapp />
              <span className="ml-2">Whatsapp</span>
            </button>
          </ul>
        </section>
      </main>
      <button className={buttonStyle}>
        <FiShoppingCart className="text-2xl sm:text-1xl" />
        <span className="ml-2 hidden sm:flex">Cart</span>
      </button>
    </section>
  );
}
