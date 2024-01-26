import Image from "next/image";

import Blogs from "./components/Blogs";

import Hero from "./components/Hero";
import Transform from "./components/Transform";

export default function Home() {
  return (
    <main className="font-roboto">
      <Hero />
      <Blogs />
      <Transform />
    </main>
  );
}
