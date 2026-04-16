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
    <div className="min-h-screen bg-[#08080a] text-[#f0ebe2]">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <CTABanner
          headline="Grounds Maintained to a Standard You Can Rely On"
          sub="Our annual maintenance programmes are designed for properties where consistency matters."
          ctaText="Request a Consultation"
        />
        <Portfolio />
        <Testimonials />
        <Process />
        <CTABanner
          headline="Let's Discuss Your Property"
          sub="We welcome enquiries from homeowners looking for a long-term landscape partner, not a one-time crew."
          ctaText="Begin the Conversation"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
