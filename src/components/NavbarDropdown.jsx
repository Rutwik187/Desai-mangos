import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/solid";
import ProductsDropDown from "./ProductsDropdown";

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
          <ProductsDropDown />

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
              to="/faral"
              className="inline-flex py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            >
              Diwali Faral
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavbarDropdown;
