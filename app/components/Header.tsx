import { useState } from "react";
import FreshAccount from "./FreshAccount";
import HeaderOption from "./HeaderOption";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Theme from "./Theme";

export default function Header() {
  const [account, setAccount] = useState(false);

  return (
    <header className="bg-cover z-100 md:px-30 flex justify-between  w-full py-4 items-center">
      <Logo />
      <Navigation />
      {account ? <HeaderOption /> : <FreshAccount />}
      <Theme />
    </header>
  );
}
