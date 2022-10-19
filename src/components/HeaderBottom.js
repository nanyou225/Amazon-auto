import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
// import { Link } from "react-router-dom";

function HeaderBottom() {
  const links = [
    {
      id: 1,
      name: "Catalogue",
      submenu: true,
      sublinks: [
        {
          head: "Freinage",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
          ],
        },
        {
          head: "Pièces moteur",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
          ],
        },
        {
          head: "Filtres et huile",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
          ],
        },
        {
          head: "Direction / Suspension / Train",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
          ],
        },
        {
          head: "Démarrage électrique",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
          ],
        },
        {
          head: "Embrayage et Boîte de vitesse",
          sublink: [
            { name: "Disque de frein", link: "/" },
            { name: "Plaquettes de frein", link: "/" },
            { name: "Etrier de frein", link: "/" },
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
          <div className="mr-16 group" key={link.id}>
            <p className="link flex items-center lg:inline-flex">{link.name}</p>
            {link.submenu && (
              <div>
                <div className="absolute top-24 z-10 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div class="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 transform-gpu"></div>
                  </div>
                  <div className="bg-white p-8 grid grid-cols-4 gap-32">
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
