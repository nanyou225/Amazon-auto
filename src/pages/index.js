import Head from "next/head";
import Header from "../components/Header";
import ImmatCarousel from "../components/ImmatCarousel";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Queen-Auto 1.0</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <ImmatCarousel />
        {/*slice*/}
        <ProductFeed products={products} />
        {/*about-video*/}
        {/*slice*/}
        {/*about-video*/}
        {/*contact*/}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (resp) => resp.json()
  );
  return {
    props: {
      products: products,
    }, // will be passed to the page component as props
  };
}

//https://fakestoreapi.com/products
