import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer aria-label="Site Footer">
      <div className="text-center sm:text-left  flex-col md:flex gap-5 items-center justify-center my-8">
        <p className="text-lg font-medium text-gray-900">Our Locations</p>

        <nav aria-label="Footer About Nav">
          <ul className=" text-sm flex gap-5 items-center justify-center">
            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75"
                href="https://maps.app.goo.gl/5iB4Ynm586vzPGbK9?g_st=iw"
              >
                Shanipar
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 m-0"
                href="https://maps.app.goo.gl/wRpP7gBZeLKvWs36A?g_st=iw"
              >
                Karve Road
              </a>
            </li>

            <li>
              <a
                className="text-gray-700 transition hover:text-gray-700/75 m-0"
                href="https://maps.app.goo.gl/nbBxobS7EB9HEHRj9?g_st=iw"
              >
                Baner
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx md:m-0 m-auto max-w-screen-xl px-4  pb-6 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              className="w-32  xl:m-0 m-auto flex justify-center text-textColorYellow sm:justify-start"
              src={logo}
              alt="logo"
            />

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Desai Mangoes - Naturally ripened best quality mangoes.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100090495678847&mibextid=LQQJ4d"
                  rel="noreferrer"
                  target="_blank"
                  className="text-textColorYellow transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/desaibandhu?igshid=YmMyMTA2M2Y="
                  rel="noreferrer"
                  target="_blank"
                  className="text-textColorYellow transition hover:text-teal-700/75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Products</p>

              <nav aria-label="Footer Services Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      to="/devgad"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      Devgad
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/ratnagari"
                    >
                      Ratnagiri{" "}
                    </a>
                  </li>

                  <li>
                    <Link
                      to="/pawas"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      Pawas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/amrut-pairi"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      Amrut Pairi
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>

              <nav aria-label="Footer Helpful Nav" className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      className="text-gray-700 transition hover:text-gray-700/75"
                      href="/"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <Link
                      to="/about-us"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/gallery"
                      className="text-gray-700 transition hover:text-gray-700/75"
                    >
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="https://wa.me/919822052638"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat Shanipar
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="https://wa.me/919850000093"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat At Karve Road
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start"
                      href="https://wa.me/919850000093"
                    >
                      <span className="text-gray-700 transition group-hover:text-gray-700/75">
                        Live Chat At Baner
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="text-gray-700">
                      <a href="mailto:desaibandhuambewale@gmail.com"></a>
                      desaibandhuambewale@gmail.com
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    className="flex items-center justify-center gap-1.5 sm:justify-start"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 shrink-0 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-gray-700">
                      <a href="tel:9850000093"></a>9822052638,
                    </span>
                    <span className="text-gray-700">
                      <a href="tel:9850000093"></a>9850000093,
                    </span>
                    <span className="text-gray-700">
                      <a href="tel:9850000093"></a>9422100093
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-lg text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="https://www.priyamit.co.in/home"
              >
                {"   "}
                Priyam IT Services Private Limited
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
