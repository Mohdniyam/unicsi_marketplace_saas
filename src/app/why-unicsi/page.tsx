import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";
import WhyUnicsi from "@/components/WhyUnicsiPage";

export default function Home() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <WhyUnicsi />
      <Footer />
    </main>
  );
}
