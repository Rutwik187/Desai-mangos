import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";

const NavbarDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 ">
        Products
        <ChevronDownIcon className="ml-2 h-5 w-5" />
      </Menu.Button>
      <Transition
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="flex w-max flex-col space-y-2 px-6 py-3 text-[#696969] md:absolute md:-left-16 md:mt-2 md:rounded-lg  md:bg-white md:drop-shadow-md">
          <Menu.Item>
            <Link
              to="/ratnagari"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Ratnagiri
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/pawas"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Pawas
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/devgad"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Devgad
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/amrut-pairi"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Amrut Pairi
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/faral"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Faral
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/ganesh-murti"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Ganesh Murti
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link
              to="/modak"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Modak
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarDropdown;
