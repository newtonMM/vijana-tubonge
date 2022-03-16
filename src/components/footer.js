import React from "react";
import Logo from "../assets/logo.jpg";
import Facebook from "../assets/icons/facebook.png";
import Instagram from "../assets/icons/instagram.png";
import Twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-white relative pt-1 border-b-2 border-teal-700">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
              <div className="flex flex-col">
                <span className="font-bold text-teal-600 uppercase mb-2">
                  Vijana Tubonge
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-pink-500"
                  >
                    Blog
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-pink-500"
                  >
                    Login
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-pink-500"
                  >
                    Sign up
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-teal-600 uppercase mt-4 md:mt-0 mb-2">
                  Social Media
                </span>
                <span className="my-2">
                  <a
                    href="https://www.facebook.com/pages/category/Charity-Organization/Vijana-Tubonge-114715516901517/"
                    className="text-teal-700 text-xl hover:text-pink-500"
                  >
                    <img
                      className="h-10 w-12 mr-20  text-teal-400"
                      src={Facebook}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://twitter.com/vtubonge"
                    className="text-teal-700  text-xl hover:text-teal-500"
                  >
                    <img
                      className="h-10 w-12 mr-20  text-teal-400"
                      src={Twitter}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="https://www.instagram.com/vijana_tubongeke/"
                    className="text-teal-700 text-xl hover:text-teal-500"
                  >
                    <img
                      className="h-10 w-12 mr-20  text-teal-400"
                      src={Instagram}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  <a
                    href="#"
                    className="flex items-center  text-gray-700 hover:text-gray-900"
                  >
                    <img
                      className="h-30 w-36 mr-20  text-teal-400"
                      src={Logo}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-teal-500 "
                  >
                    Home
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-teal-500"
                  >
                    About Us
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-teal-500"
                  >
                    Service
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-teal-500"
                  >
                    Contact
                  </a>
                </span>
                <span className="my-2">
                  <a
                    href="#"
                    className="text-teal-700  text-xl hover:text-teal-500"
                  >
                    Blog
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
              <p className="text-sm text-teal-600 font-bold mb-2">
                © 2022 by Newton Muthigani
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
