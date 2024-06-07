import NavBar from "@/components/NavBar";

import Hero from "@/components/Hero";

import Premium from "@/components/Premium";
import Collection from '@/components/Collection';
import Services from "@/components/Services";
import Products from '@/components/Products';


export default function Home() {
  return (
    <main className="font-sans">
      <NavBar />
      <Hero/>
      <Premium/>
      <Collection/>
      <Services/>
      <Products/>
    </main>
  );
}
