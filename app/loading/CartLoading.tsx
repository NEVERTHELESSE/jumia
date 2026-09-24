import { FaStar } from "react-icons/fa";

export default function CartLoading() {
  const lists = Array.from({ length: 7 }, (_, number) => number + 1);
  return (
    <div className="flex overflow-hidden">
      {lists.map((list) => (
        <div
          key={list}
          className="w-50 sm:min-w-55 mr-2 sm:mr-4 h-92 bg-soft  rounded-2xl overflow-hidden"
        >
          <div className="size-50  sm:size-60 bg-gray-400 flex justify-center items-center ">
            <FaStar size={50} className="bg-white p-2 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
