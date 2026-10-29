import { useState } from 'react';
import Hero from './components/Hero';
import StickyNav from './components/StickyNav';
import ProductOverview from './components/ProductOverview';
import KeyBenefits from './components/KeyBenefits';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import PromoCards from './components/PromoCards';
import Footer from './components/Footer';

const navItems = ['About', 'Key benefits', 'Real-life impact', 'Your questions answered'];

export default function App() {
  const [activeSection, setActiveSection] = useState(navItems[0]);

  return (
    <>
      <Hero />
      <StickyNav items={navItems} active={activeSection} onChange={setActiveSection} />
      <main>
        <section id="about">
          <ProductOverview />
        </section>
        <section id="key-benefits">
          <KeyBenefits />
        </section>
        <section id="real-life-impact">
          <CaseStudies />
        </section>
        <section id="your-questions-answered">
          <FAQ />
        </section>
        <PromoCards />
      </main>
      <Footer />
    </>
  );
}
