import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import HeaderOption from "./HeaderOption";

export default function Navigation() {
  // const options = ["👤My Account", "🍔Orders", "♥Wishlist"];

  return (
    <section className="w-full ">
      <div className="flex w-full justify-between items-center my-2">
        <Logo />

        <form
          action=""
          className="bg-soft w-full mx-2 sm:w-[50%] hidden sm:flex items-center pl-4 rounded-full"
        >
          <FaSearch />
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className=" p-2 sm:w- w-full focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full items-center primary py-2 px-4 "
          >
            Search
          </button>
        </form>

        <HeaderOption />
      </div>
      <form
        action=""
        className="bg-soft w-full mx-2 flex sm:hidden items-center pl-4 rounded-full"
      >
        <FaSearch />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          className=" p-2 sm:w- w-full focus:outline-none"
        />
      </form>
    </section>
  );
}
