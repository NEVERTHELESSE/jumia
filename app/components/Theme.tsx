import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Theme() {
  const [isLight, setIsLight] = useState(true);

  function changeTheme() {
    setIsLight(!isLight);
  }

  return (
    <div>
      <button className="cursor-pointer sm:text-2xl" onClick={changeTheme}>
        {isLight ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
}
