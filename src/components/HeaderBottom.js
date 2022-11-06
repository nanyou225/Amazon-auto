import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
import DropdHovers from "../data/dropdownHover.json";

function HeaderBottom() {
  return (
    <div className=" container mx-auto px-24 p-1 flex items-center bg-queen_blue-blue text-white text-sm">
      <MenuIcon className="h-8" />
      {DropdHovers.map((link) => (
        <div key={link.id} className="mr-16 group">
          <p className="link flex items-center lg:inline-flex">{link.name}</p>
          {link.submenu && (
            <div>
              <div className="absolute top-24 z-30 hidden group-hover:block hover:bloc shadow-lg shadow-indigo-500/40">
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 transform-gpu"></div>
                </div>
                <div className="bg-white p-8 grid grid-cols-4 gap-x-36 gap-y-12">
                  {link.sublinks.map((mysublinks) => (
                    <div>
                      <p className="link text-gray-600 font-semibold">
                        {mysublinks.head}
                      </p>
                      {mysublinks.sublink.map((mylink) => (
                        <p className="link text-gray-600 my-2.5 pl-2">
                          {mylink.name}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default HeaderBottom;
