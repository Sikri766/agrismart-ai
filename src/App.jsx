import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAI from "./components/AboutAI";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import AIUpload from "./components/AIUpload";
import Library from "./components/Library";
import Impact from "./components/Impact";
import Statistics from "./components/Statistics";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans">
      <Navbar />
      <Hero />
      <AboutAI />
      <Features />
      <HowItWorks />
      <AIUpload />
      <Library />
      <Impact />
      <Statistics />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}