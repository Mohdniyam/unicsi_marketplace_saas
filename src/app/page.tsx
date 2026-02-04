import Image from "next/image";
import Hero from "@/components/landing/hero"
import CTASection from "@/components/landing/cta-section"
import InventorySection from "@/components/landing/inventory-section"

export default function Home() {
   console.log("API URL:", process.env.NEXT_PUBLIC_API_URL)
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <CTASection />
      {/* <InventorySection /> */}
    </main>
  );
}
