import { lazy, Suspense } from "react";
import Navigation from "./Navigation";
import Categories from "./Categories";
const Advert = lazy(() => import("./Advert"));

export default function Header() {
  return (
    <header className="w-full z-100 ">
      {/* <Suspense fallback="loading">
        <Advert />
      </Suspense> */}
      <Navigation />
      <Categories />
    </header>
  );
}
