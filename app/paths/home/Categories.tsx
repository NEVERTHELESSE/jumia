import { FiHome } from "react-icons/fi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoBagAddOutline } from "react-icons/io5";
import { PiCookingPotLight } from "react-icons/pi";

export default function Categories() {
  const categories = [
    {
      id: "1",
      title: "OfficialStore",
      icon: <IoBagAddOutline />,
    },
    {
      id: "2",
      title: "Computer",
      icon: <HiOutlineComputerDesktop />,
    },
    {
      id: "3",
      title: "Phone&Tablets",
      icon: <IoIosPhonePortrait />,
    },
    {
      id: "4",
      title: "Appliance",
      icon: <PiCookingPotLight />,
    },
    {
      id: "5",
      title: "HomeOffice",
      icon: <FiHome />,
    },
    {
      id: "7",
      title: "Fashion",
      icon: <FiHome />,
    },
    {
      id: "8",
      title: "Supermarket",
      icon: <FiHome />,
    },
    {
      id: "6",
      title: "Electronic",
      icon: <FiHome />,
    },
  ];
  return (
    <main className="w-full overflow-hidden flex-nowrap border-b-5 border-b-primary hidden sm:flex">
      {categories.map(({ icon, id, title }) => (
        <button
          key={id}
          className="flex m-2 md:mr-8 my-2 items-center cursor-pointer hover:bg-soft p-1 rounded-lg"
        >
          {icon} <span className="ml-1">{title}</span>
        </button>
      ))}
    </main>
  );
}
