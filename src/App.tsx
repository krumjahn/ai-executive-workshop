import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Opportunity from './components/Opportunity';
import CoreOffer from './components/CoreOffer';
import Comparison from './components/Comparison';
import Programme from './components/Programme';
import InternScaling from './components/InternScaling';
import Tools from './components/Tools';
import Support from './components/Support';
import Audience from './components/Audience';
import UseCases from './components/UseCases';
import SocialProof from './components/SocialProof';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <CoreOffer />
        <Comparison />
        <Programme />
        <InternScaling />
        <Tools />
        <Support />
        <Audience />
        <UseCases />
        <SocialProof />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
