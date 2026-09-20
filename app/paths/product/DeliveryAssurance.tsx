import { BsTruck } from "react-icons/bs";
import { FaHandsPraying } from "react-icons/fa6";
import { Link } from "react-router";

export default function DeliveryAssurance() {
  return (
    <main>
      <div className="flex my-3 border-b border-b-soft">
        <FaHandsPraying
          size={40}
          className="border min-w-10 p-1 rounded-lg border-soft"
        />
        <div className="ml-3">
          <div className="flex justify-between w-full">
            <h3>Pickup Station </h3>
            <Link to="pickupStation" className="text-right text-secondary">
              Details
            </Link>
          </div>
          <p className="my-1">Delivery Fees N1,200</p>
          <p>
            Ready for delivery between{" "}
            <span>
              23 September and 24 September if you place your order within next
              1hrs 7mins
            </span>
          </p>
        </div>
      </div>
      <div className="flex my-3 border-b border-b-soft">
        <BsTruck
          size={40}
          className="border min-w-10 p-1 rounded-lg border-soft"
        />
        <div className="ml-3">
          <div className="flex justify-between w-full">
            <h3>Door Delivery </h3>
            <Link to="pickupStation" className="text-right text-secondary">
              Details
            </Link>
          </div>
          <p className="my-1">Delivery Fees N2,750</p>
          <p>
            Ready for delivery between
            <span>
              23 September and 24 September if you place your order within next
              1hrs 7mins
            </span>
          </p>
        </div>
      </div>
      <div className="flex my-3 border-b border-b-soft">
        <BsTruck
          size={40}
          className="border min-w-10 p-1 rounded-lg border-soft"
        />
        <div className="ml-3">
          <div className="flex justify-between w-full">
            <h3>Return Policy</h3>
          </div>
          <p className="my-1">
            Free return within 7 days for All eligible items{" "}
          </p>
          <p>
            Ready for delivery between
            <Link to="pickupStation" className="ml-2 text-secondary">
              Details
            </Link>
          </p>
        </div>
      </div>
      <div className="flex my-3 border-b border-b-soft">
        <BsTruck
          size={40}
          className="border min-w-10 p-1 rounded-lg border-soft"
        />
        <div className="ml-3">
          <div className="flex justify-between w-full">
            <h3>Warranty</h3>
          </div>
          <p className="my-1">
            DELTA ULTRA - 5 YEARS WARRANTY After-Sales-Services:
            Support.af@ecoflow.com
          </p>
          <p>
            Ready for delivery between
            <Link to="pickupStation" className="ml-2 text-secondary">
              Details
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
