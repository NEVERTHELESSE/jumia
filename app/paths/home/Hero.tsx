import { useEffect, useState } from "react";
import { Link } from "react-router";
import Image from "~/components/Image";
import { supabase } from "~/lib/supabase";
import HeroLoading from "~/loading/HeroLoading";

export default function Hero() {
  const [products, setProducts] = useState([]);

  const carousel = Array.from({ length: products.length }, (_, i) => i + 1);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev == carousel.length - 1 ? 0 : prev + 1));
    }, 5000);
    interval;
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    getProduct();
  }, []);
  type d = { data: any; error: any };
  async function getProduct() {
    const { data, error }: d = await supabase.from("hero").select("*");
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(data);
      setProducts(data);
    }
  }

  return (
    <section className="w-full">
      {products.length > 1 ? (
        <main className="w-full  relative overflow-hidden flex flex-col my-4 items-center justify-center ">
          <div className="flex w-full">
            <div
              className=" w-full bg-primary flex duration-150"
              style={{
                transform: `translateX(${active * -100}%)`,
              }}
            >
              {products.map(({ id, imageUrl, link }) => (
                <Link
                  to={link}
                  key={id}
                  className="min-w-full h-120 rounded-4xl overflow-hidden"
                >
                  <Image src={imageUrl} alt="image" />
                </Link>
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
      ) : (
        <HeroLoading />
      )}
    </section>
  );
}
