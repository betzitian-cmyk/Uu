import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ to, label }: { to: string; label: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link to={to} className={`px-3 py-2 rounded-md transition ${active ? 'bg-cyan-400/20 text-cyan-300' : 'text-slate-300 hover:text-white'}`}>
      {label}
    </Link>
  );
}
