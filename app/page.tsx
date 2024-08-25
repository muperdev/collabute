import Feature from "@/components/home/feature";
import EarlyBirdForm from "@/components/home/form";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black h-full font-sans bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Hero />
      <Feature />
      <EarlyBirdForm />
    </main>
  );
}
