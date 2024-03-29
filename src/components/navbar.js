import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/logo.jpg";
import { useLocation } from "react-router-dom";

const data = [
  {
    name: "Home",
    link: "#home",
    current: true,
  },
  {
    name: "About us ",
    link: "#about_us",
    current: false,
  },
  { name: "Events", link: "#events", current: false },
  { name: "Gallery", link: "#gallery", current: false },
  {
    name: "Contact",
    link: "#contacts",
    current: false,
  },
  // {
  //   name: "Blog",
  //   link: "#blog",
  //   current: false,
  // },
];

const Navbar = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.hash);
  }, [location]);

  return (
    <Disclosure as="nav" className="h-24 bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex ">
                <a
                  href="/#"
                  className="flex items-center  text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="h-20 w-20 mr-20  text-blue-400"
                    src={Logo}
                    alt="logo"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                </a>

                <div className="hidden md:flex items-center lg:space-x-20 md:space-x-5">
                  {data.map((itms, index) => (
                    <a
                      key={index}
                      href={itms.link}
                      className={classNames(
                        activeLink === itms.link
                          ? "text-teal-600 underline decoration-blue-600 underline-offset-8	decoration-4"
                          : "text-teal-700 font-sans hover:underline no-underline decoration-blue-600 hover:underline-offset-8 hover:decoration-4 transition duration-700 ease-in-out",
                        "px-4 py-3  ml-5 md:px-1 font-bold lg:text-xl md:text-base whitespace-nowrap"
                      )}
                      aria-current={activeLink === itms.link ? "page" : undefined}
                    >
                      {itms.name.toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>

              {/* <div className="hidden md:flex items-center space-x-1">
                <a href="/#" className="py-5 px-3 text-teal-700">
                  Login
                </a>
                <a
                  href="/#"
                  className="py-2 px-3 bg-Emerald-700 hover:bg-Emerald-700 text-teal-700 hover:text-Emerald-700 rounded transition duration-300"
                >
                  Signup
                </a>
              </div> */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="bg-teal-700 px-2 pt-2 pb-3 space-y-1">
              {data.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-300 text-blue-700"
                      : "text-pink-500 hover:bg-gray-700 hover:text-pink",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
