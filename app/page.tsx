import Header from "@/components/header";
import Feature from "@/components/home/feature";
import EarlyBirdForm from "@/components/home/form";
import Hero from "@/components/home/hero";
import About from "@/components/home/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-2 py-8 lg:px-24 lg:py-4 bg-black h-full font-sans gap-y-8">
      <Header />
      <Hero />
      <Feature />
      <About />
      <EarlyBirdForm />
    </main>
  ); 
}
