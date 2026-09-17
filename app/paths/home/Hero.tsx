import { useEffect, useState } from "react";
import Image from "~/components/Image";
import { details } from "~/data/heroData";

export default function Hero() {
  const carousel = Array.from({ length: details.length }, (_, i) => i + 1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev == carousel.length - 1 ? 0 : prev + 1));
      console.log(active);
    }, 5000);
    interval;
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="w-full  relative overflow-hidden flex flex-col my-4 items-center justify-center ">
      <div className="flex w-full">
        <div
          className=" w-full flex duration-150"
          style={{
            transform: `translateX(${active * -100}%)`,
          }}
        >
          {details.map(({ id, imageUrl }) => (
            <div
              key={id}
              className="min-w-full min-h-50 rounded-2xl overflow-hidden"
            >
              <Image src={imageUrl} alt="image" />
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-4 sm:absolute w-max flex  bottom-5 bg-soft p-2 rounded-full">
        {carousel.map((number, index) => (
          <div
            key={number}
            className={`h-2 ${index == active ? "w-6 bg-black" : "w-2 bg-soft"}  mr-2  border-2 rounded-full`}
          ></div>
        ))}
      </div>
    </main>
  );
}
