import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  SearchIcon,
  LoginIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderBottom from "./HeaderBottom";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      {/*hearder top*/}
      <div className="container px-24 mx-auto flex items-center bg-queen_blue p-1 flex-grow py-4">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
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
          <div
            onClick={!session ? signIn : signOut}
            className="flex items-center link"
          >
            <p className="md:text-lg">
              {session ? `Bonjour, ${session.user.name}` : "Connectez vous"}
            </p>
            <LoginIcon className="h-5 ml-1" />
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative flex items-center link"
          >
            <p className="hidden md:inline md:text-lg">Panier</p>
            <span className="absolute -top-3 -right-4 rounded-full pr-2 pl-2 bg-red-500 font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-5 ml-1" />
          </div>
        </div>
      </div>
      {/*hearder bottom*/}

      <HeaderBottom />
    </header>
  );
}

export default Header;
