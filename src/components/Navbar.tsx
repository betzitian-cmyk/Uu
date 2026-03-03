import NavLink from './NavLink';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
        <span className="font-bold text-cyan-300">Velocity Broker House</span>
        <div className="flex gap-1 text-sm flex-wrap justify-end">
          <NavLink to="/" label="Home" />
          <NavLink to="/cars" label="Inventory" />
          <NavLink to="/warranties" label="Warranties" />
          <NavLink to="/financing" label="Financing" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/consignment" label="Consignment" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/admin" label="Admin" />
        </div>
      </nav>
    </header>
  );
}
