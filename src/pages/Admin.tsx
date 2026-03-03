import { useQuery } from '@tanstack/react-query';
import { listSubmissions } from '../lib/api';

export default function Admin() {
  const { data = [] } = useQuery({ queryKey: ['submissions'], queryFn: () => listSubmissions() });

  return (
    <main className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl mb-4">Admin Dashboard</h1>
      <section className="glass p-4">
        <h2 className="text-xl mb-3">All widget submissions</h2>
        <ul className="grid gap-2">
          {data.map((row) => (
            <li key={row.id} className="border border-white/10 rounded p-3">
              <p className="text-cyan-300 text-sm uppercase">{row.widget_type.replaceAll('_', ' ')}</p>
              <p className="font-semibold">{row.name} ({row.email})</p>
              <pre className="text-xs whitespace-pre-wrap text-slate-300">{JSON.stringify(row.payload, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
