import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";
import AboutPage from "@/components/about";
import PageHero from "@/components/PageHero";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import BlogsPage from "@/components/blogPage/BlogsPage";
import BlogDetailPage from "@/components/blogPage/BlogDetailPage";

export default function Home() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogDetailPage />
      <Footer />
    </main>
  );
}
