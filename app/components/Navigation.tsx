import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import HeaderOption from "./HeaderOption";
import Search from "./Search";

export default function Navigation() {
  // const options = ["👤My Account", "🍔Orders", "♥Wishlist"];

  return (
    <section className="w-full ">
      <div className="flex w-full justify-between items-center my-2">
        <Logo />

        <form
          action=""
          className="bg-soft relative z-70 w-full mx-2 py-1 pr-1 sm:w-[50%] hidden sm:flex items-center pl-4 rounded-full"
        >
          <FaSearch />
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className=" p-2 sm:w-full z-10 focus:outline-none "
          />
          <button
            type="submit"
            className="rounded-full items-center primary py-2 px-4 "
          >
            Search
          </button>
          {/* <div className="absolute bg-white h-45 rounded-2xl w-full top-10 left-0"></div> */}
        </form>

        <HeaderOption />
      </div>
      <Search />
    </section>
  );
}
