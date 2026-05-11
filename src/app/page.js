import About from "@/components/About";
import Certificate from "@/components/Certificate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";

export default function Page() {
  return (
    <main className="relative min-h-screen  text-white px-4 md:px-10" >

      <ScrollToTop />

      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Certificate />

      <Contact />
      <Footer />

    </main>
  );
}