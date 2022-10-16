import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/*hearder top*/}
      <div className="flex items-center bg-queen_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit={"contain"}
            className="cursor-pointer"
          />
        </div>
        {/*search*/}
        <div className="hidden sm:flex items-center rounded h-10 flex-grow cursor-pointer bg-red-500 hover:bg-red-600">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Rechercher un produit, une réference ou une marque"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/*right*/}
        <div className="text-white  flex items-center text-xl space-x-6 mx-6 whitespace-nowrap">
          <div>
            <p>Contact</p>
          </div>
          <div>
            <p>Connexion</p>
          </div>
          <div className="flex items-center">
            <p>Panier</p>
            <ShoppingCartIcon className="h-8" />
          </div>
        </div>
      </div>
      {/*hearder bottom*/}
      <div>
        <h1>My header Bottom</h1>
      </div>
    </header>
  );
}

export default Header;
