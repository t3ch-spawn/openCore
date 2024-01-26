import Image from "next/image";

import Blogs from "./components/Blogs";

import Hero from "./components/Hero";


export default function Home() {
  return (
    <main className="font-roboto">
      <Hero />
       <Blogs />
    </main>
  );
}
