import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/Navbar";
import PageHero from "@/components/PageHero";
import ContactInfoSection from "@/components/ContactInfoSection";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";

export default function Home() {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero
        title="Contact"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        // Optional – defaults to an Unsplash laptop photo
        imageUrl="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1600&q=80"
      />
      <ContactInfoSection />
      <ContactForm />
      <MapSection />
      {/* <AboutPage /> */}
      <Footer />
    </main>
  );
}
