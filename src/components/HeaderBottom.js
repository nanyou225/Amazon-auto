import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

function HeaderBottom() {
  const links = [
    {
      id: 1,
      name: "Catalogue",
      submenu: true,
      sublinks: [
        {
          title: "Freinage",
          sublink: [
            { name: "Freinage" },
            { name: "Suspension" },
            { name: "Kit d'embrayage" },
          ],
        },
      ],
    },
    { id: 2, name: "Balai d'essui glace" },
    { id: 3, name: "Batterie" },
    { id: 4, name: "Huile Moteur" },
    { id: 5, name: "Pneus" },
    { id: 6, name: "Accessoires & Entretien" },
    { id: 7, name: "Outillage" },
    { id: 8, name: "Garage Partenaire" },
  ];
  return (
    <div className=" container mx-auto px-24 p-1 flex items-center bg-queen_blue-blue text-white text-sm">
      <MenuIcon className="h-8" />
      {links &&
        links.map((link) => (
          <div className="mr-16" key={link.id}>
            <p className="link flex items-center lg:inline-flex">{link.name}</p>
          </div>
        ))}
    </div>
  );
}

export default HeaderBottom;
