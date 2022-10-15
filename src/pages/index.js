import Head from "next/head";
import Header from "../components/Header";
import ImmatCarousel from "../components/ImmatCarousel";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Queen-Auto 1.0</title>
      </Head>
      <Header />
      <main>
        {/*immat and carousel*/}
        <ImmatCarousel />
        {/*slice*/}
        {/*productFeed*/}
        {/*about-video*/}
        {/*slice*/}
        {/*about-video*/}
        {/*contact*/}
      </main>
    </div>
  );
}
