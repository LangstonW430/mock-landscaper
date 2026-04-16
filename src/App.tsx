import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import CTABanner from './components/CTABanner';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080c08] text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <CTABanner
          headline="Hundreds of Homeowners Trust GreenEdge"
          sub="Join our growing list of satisfied clients. Get a free estimate — no commitment, no pressure."
        />
        <Portfolio />
        <Testimonials />
        <Process />
        <CTABanner
          headline="Your Dream Yard Is One Call Away"
          sub="Don't wait until spring. Book now and lock in your spot on our schedule."
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
