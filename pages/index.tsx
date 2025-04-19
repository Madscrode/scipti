import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="bg-white p-4 rounded-2xl shadow col-span-2">
        <h2 className="text-xl font-semibold mb-2">📊 Markedsoversigt</h2>
        <p>Her kommer grafer, aktier i fokus, indeks og AI-analyse.</p>
      </section>

      <section className="bg-white p-4 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">📰 Seneste nyheder</h2>
        <ul className="text-sm list-disc ml-4">
          <li>“Tesla stiger 4% efter AI-event”</li>
          <li>“Nvidia lancerer ny chip”</li>
          <li>“Novo Nordisk overhaler LVMH i værdi”</li>
        </ul>
      </section>
    </Layout>
  );
}
