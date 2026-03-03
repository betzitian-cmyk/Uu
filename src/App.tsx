import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Index from './pages/Index';
import Cars from './pages/Cars';
import CarDetail from './pages/CarDetail';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Warranties from './pages/Warranties';
import Services from './pages/Services';
import Consignment from './pages/Consignment';

export default function App() {
  return (
    <div className="page-wrap">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetail />} />
        <Route path="/warranties" element={<Warranties />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/consignment" element={<Consignment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}
