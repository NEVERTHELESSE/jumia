import { lazy, Suspense } from "react";
import AdvertLoading from "~/loading/AdvertLoading";

const HomeAdvert = lazy(() => import("../paths/home/HomeAdvert"));
const HomeDeals = lazy(() => import("../paths/home/HomeDeals"));
const Hero = lazy(() => import("../paths/home/Hero"));
const FlashSales = lazy(() => import("../paths/home/FlashSales"));
const Voucher = lazy(() => import("../paths/home/Voucher"));
const SweetDeals = lazy(() => import("../paths/home/SweetDeals"));
const Mosts = lazy(() => import("../paths/home/Most"));
const Brands = lazy(() => import("../paths/home/Brand"));

export function meta() {
  return [
    {
      title:
        "Jumia Nigeria | Online Shopping for Electronics, Fashion, Home, Beauty & Sport",
    },
    { name: "Order Online at Ease", content: "Home Page" },
  ];
}

export default function home() {
  return (
    <section className="my-3">
      <Suspense fallback="loading...">
        <Hero />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <HomeAdvert />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <FlashSales />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <Voucher />
      </Suspense>
      <Suspense>
        <SweetDeals />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <HomeDeals />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <Mosts />
      </Suspense>
      <Suspense fallback={<AdvertLoading />}>
        <Brands />
      </Suspense>
    </section>
  );
}
