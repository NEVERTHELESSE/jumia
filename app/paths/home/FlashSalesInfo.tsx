import { FaStar } from "react-icons/fa";
import type { flashSaleType } from "~/types/type";

export default function FlashSalesInfo({
  numberOfItem,
  title,
  price,
  rate,
}: flashSaleType) {
  return (
    <div className="w-full  ">
      {numberOfItem != 0 && (
        <p className="bg-yellow-200 text-center">
          {numberOfItem} items in stock
        </p>
      )}
      <div className="p-2">
        <p>{title}</p>
        <div className="flex items-center">
          <FaStar size={15} className="text-primary" />
          <h4 className="mx-1">{rate}</h4>
          <p>(1848844)</p>
        </div>
        <h4>{price}</h4>
        <div className="flex items-center">
          <h5>$12.23</h5>
          <h6 className="ml-2 bg-green-600 px-2 text-white rounded-lg">-46%</h6>
        </div>
      </div>
    </div>
  );
}
