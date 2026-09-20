import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <section className="w-full">
      <form
        action=""
        className="bg-soft w-full mx-2 py-2  flex sm:hidden items-center pl-4 rounded-full"
      >
        <FaSearch />
        <input
          type="text"
          placeholder="Search products, brands and categories"
          className=" p-2 sm:w- w-full focus:outline-none"
        />
      </form>
      {/* <main className="w-full h-full bg-black opacity-50 absolute z-50 top-0 left-0"></main> */}
    </section>
  );
}
