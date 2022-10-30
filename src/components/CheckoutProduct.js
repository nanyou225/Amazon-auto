import { StarIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-red-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency
          quantity={price}
          currency="GBP"
          locale="fr_FR"
          pattern="##,### !"
          decimal=","
          group="."
        />
        {hasPrime && (
          <div>
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Livraison GRATUITE</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Ajouter au panier
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Supprimer du panier
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
