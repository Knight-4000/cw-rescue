import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import "./dropdown.css"


export default function DropdownComponent() {
    const [arrowTwoFlip, setArrowTwoFlip] = useState(false);
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    
  return (
    <div>
       <Menu as="div" className="menu relative inline-block text-left">
            <div>
                <Menu.Button className="dropdown inline-flex justify-center w-full px-4 py-2 text-sm font-medium
                 text-gray-700 bg-white border rounded-md shadow-sm hover:bg-gray-50 focus:#fff;"
                 onClick={() => setArrowTwoFlip(!arrowTwoFlip)}>
                    Adopt
                    <svg
                        className={arrowTwoFlip ? "arrowTwoFlip spin w-5 h-5 ml-2 -mr-1" : "arrowTwoFlip w-5 h-5 ml-2 -mr-1"}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    
                   

                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-500"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-250"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                href="/cats"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Cats
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/dogs"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Dogs
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/others"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Others
                                </a>
                            )}
                        </Menu.Item>
                
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

    </div>
  )
}
