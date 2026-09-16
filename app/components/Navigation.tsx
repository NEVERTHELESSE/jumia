import { useState } from "react";
import { FaSearch, FaStar } from "react-icons/fa";
import Logo from "./Logo";
import {
  FiHeart,
  FiMessageSquare,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { accounts, options } from "~/data/navigates";
import HeaderOption from "./HeaderOption";

export default function Navigation() {
  // const options = ["👤My Account", "🍔Orders", "♥Wishlist"];

  return (
    <section className="flex w-full justify-between items-center my-2">
      <Logo />
      <section className="flex items-center">
        <form action="" className="bg-soft flex items-center pl-4 rounded-full">
          <FaSearch />
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className=" p-2 w-140 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full items-center primary py-2 px-4 "
          >
            Search
          </button>
        </form>
      </section>
      <HeaderOption />
    </section>
  );
}
