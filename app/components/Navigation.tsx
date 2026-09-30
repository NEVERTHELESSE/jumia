import { FaSearch } from "react-icons/fa";
import Logo from "./Logo";
import HeaderOption from "./HeaderOption";
import Search from "./Search";
import { supabase } from "../lib/supabase";
import { useEffect, useState, type ChangeEvent } from "react";
import FreshAccount from "./FreshAccount";

export default function Navigation() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
      console.log(error);
      return;
    }
    // console.log(data);
  }

  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  function loadSearch(e: ChangeEvent<HTMLInputElement>) {
    e.target.value.length > 2 && setShowSearch(true);
    setSearchText(e.target.value);
  }

  return (
    <section className="px-2 sm:p-0 w-[50vw] ">
      <form
        action=""
        className="bg-soft relative z-70 w-full mx-2 py-1 pr-1  hidden sm:flex items-center pl-4 rounded-full"
      >
        <FaSearch />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          onChange={loadSearch}
          className=" p-2 sm:w-full z-10 focus:outline-none "
        />
        <button
          type="submit"
          className="rounded-full items-center primary py-2 px-4 "
        >
          Search
        </button>
        {showSearch && <Search />}
      </form>
    </section>
  );
}
