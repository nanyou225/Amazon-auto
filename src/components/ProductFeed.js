import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="container px-24 mx-auto">
      <ul className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products
          .slice(0, products.lenght)
          .map(({ id, title, price, description, category, image }) => {
            return (
              <Product
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
              />
            );
          })}
      </ul>
      <img className="md:col-span-full" src="https://links.papareact.com/dyz" />
    </div>
  );
}

export default ProductFeed;
