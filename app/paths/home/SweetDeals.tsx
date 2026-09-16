import Image from "~/components/Image";

export default function SweetDeals() {
  return (
    <main className="bg-tertiary-500 flex rounded-2xl h-80 p-4 mb-5">
      <div className="mr-4 w-[calc(100%/6)] h-full rounded-2xl overflow-hidden">
        <Image src="deal/DEALS.gif" alt="deals-of-the-day-HMD" />
      </div>
      <div className="mr-4 w-[calc(100%/6)] h-full rounded-2xl overflow-hidden">
        <Image src="deal/deals-of-the-day-HMD.jpg" alt="deals-of-the-day-HMD" />
      </div>
      <div className="mr-4 w-[calc(100%/6)] h-full rounded-2xl overflow-hidden">
        <Image src="deal/DEALS.gif" alt="deals-of-the-day-HMD" />
      </div>
      <div className="mr-4 w-[calc(100%/6)] h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center flex-col ">
        <div className="w-full h-50 rounded-full bg-primary"></div>
        <h3>N26, 900</h3>
      </div>
    </main>
  );
}
