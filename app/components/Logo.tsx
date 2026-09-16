import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <h2>Jumia</h2>
      <FaStar className="bg-primary rounded-full text-2xl p-1 text-white" />
    </Link>
  );
}
