import { FiHome } from "react-icons/fi";

export default function Categories() {
  const categories = [
    {
      id: "1",
      title: "Official Store",
      icon: <FiHome />,
    },
    {
      id: "2",
      title: "Applications",
      icon: <FiHome />,
    },
    {
      id: "3",
      title: "Phone & Tablets",
      icon: <FiHome />,
    },
    {
      id: "4",
      title: "Health & Beauty",
      icon: <FiHome />,
    },
    {
      id: "5",
      title: "Home & Office",
      icon: <FiHome />,
    },
    {
      id: "6",
      title: "Electronic",
      icon: <FiHome />,
    },
  ];
  return (
    <main className=" border-b-5 border-b-primary flex">
      {categories.map(({ icon, id, title }) => (
        <button
          key={id}
          className="flex mr-8 my-2 items-center cursor-pointer hover:bg-soft p-2 rounded-lg"
        >
          {icon} <span className="ml-1">{title}</span>
        </button>
      ))}
    </main>
  );
}
