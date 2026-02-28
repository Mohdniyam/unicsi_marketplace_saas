import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";
import AboutPage from "@/components/about";
import PageHero from "@/components/PageHero";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import BlogsPage from "@/components/blogPage/BlogsPage";

export default function Home() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blog" },
        ]}
        // Optional – defaults to an Unsplash laptop photo
        imageUrl="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3N8ZW58MHx8MHx8fDA%3D"
      />
      <BlogsPage />
      <Footer />
    </main>
  );
}
