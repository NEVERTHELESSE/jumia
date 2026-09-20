import { lazy, Suspense } from "react";
import Navigation from "./Navigation";
import Categories from "~/paths/home/Categories";
const Advert = lazy(() => import("./Advert"));

export default function Header() {
  return (
    <header className="bg-white z-100 md:px-30  w-full py-2">
      {/* <Suspense fallback="loading">
        <Advert />
      </Suspense> */}
      <Navigation />
    </header>
  );
}
