import Image from "next/image";

import Blogs from "./components/Blogs";

import Footer from "./components/Footer";

import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="font-roboto">
      <Hero />
       {/* <Blogs /> */}
       <Footer />
    </main>
  );
}
