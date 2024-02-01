import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Nav() {
  return (
    <>
      <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex gap-4">
            <Link href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Citify
              </span>
            </Link>
            <div className="flex items-center gap-3 whitespace-nowrap rounded-full cursor-pointer bg-gray-300/50 hover:bg-gray-300/70 text-secondary-100 py-1 px-4 text-xs leading-5 font-medium">
              👨‍💻 1.2.0-dev
            </div>
          </div>
          <div className="flex items-center lg:order-2">
            <Link href="https://twitter.com/jonniermartinez" target="_blank">
              <Button variant="link">Twitter (X)</Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
