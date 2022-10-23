import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  LoginIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderBottom from "./HeaderBottom";

function Header() {
  return (
    <header>
      {/*hearder top*/}
      <div className="container px-24 mx-auto flex items-center bg-queen_blue p-1 flex-grow py-4">
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
        <div className="hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer bg-red-500 hover:bg-red-400">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-xl"
            type="text"
            placeholder="Rechercher un produit, une réference ou une marque"
          />
          <SearchIcon className="h-12 p-3" />
        </div>
        {/*right*/}
        <div className=" text-white flex items-center space-x-6 mx-6 whitespace-nowrap ml-28">
          <div className="flex items-center link">
            <p className="md:text-lg">Contact</p>
            <PhoneIcon className="h-5 ml-1" />
          </div>
          <div className="flex items-center link">
            <p className="md:text-lg">Connexion</p>
            <LoginIcon className="h-5 ml-1" />
          </div>
          <div className="relative flex items-center link">
            <p className="hidden md:inline md:text-lg">Panier</p>
            <span className="absolute -top-3 -right-4 rounded-full pr-1 bg-red-500 font-bold">
              10
            </span>
            <ShoppingCartIcon className="h-5 ml-1" />
          </div>
        </div>
      </div>
      {/*hearder bottom*/}

      <HeaderBottom />

      {/*
        <p className="link flex items-center lg:inline-flex"></p>
        <p className="link lg:inline-flex">Balai d'essui glace</p>
        <p className="link lg:inline-flex">Batterie</p>
        <p className="link lg:inline-flex">Huile Moteur</p>
        <p className="link hidden lg:inline-flex">Pneus</p>
        <p className="link hidden lg:inline-flex">Accessoires & Entretien</p>
        <p className="link hidden lg:inline-flex">Outillage</p>
        <p className="link hidden lg:inline-flex">Garage Partenaire</p>*/}
    </header>
  );
}

export default Header;
