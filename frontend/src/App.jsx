import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowWeWork from './pages/HowWeWork';
import CreditCardIssue from './pages/CreditCardIssue';
import LegalSupport from './pages/LegalSupport';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BusinessLoanIssues from './pages/BusinessLoanIssues';
import AntiHarassment from './pages/AntiHarassment';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/credit-card-issue" element={<CreditCardIssue />} />
            <Route path="/legal-support" element={<LegalSupport />} />
            <Route path="/services" element={<Services />} />
            <Route path="/business-loan-issues" element={<BusinessLoanIssues />} />
            <Route path="/anti-harassment" element={<AntiHarassment />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
