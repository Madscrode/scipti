
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <header className="mb-12 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-600">📈 Scipti AI</h1>
        <nav className="space-x-6 text-lg">
          <a href="/" className="hover:underline">Forside</a>
          <a href="/markets" className="hover:underline">Verdens aktier</a>
          <a href="/portfolio" className="hover:underline">Min portefølje</a>
        </nav>
      </header>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-600">Markedsover­sigt</h2>

        <p className="text-gray-700">Her kommer grafer, aktier i fokus, indeks og AI-analyse.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📰 Seneste nyheder</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>“Tesla stiger 4% efter AI-event”</li>
          <li>“Nvidia lancerer ny chip”</li>
          <li>“Novo Nordisk overhaler LVMH i værdi”</li>
        </ul>
      </section>
    </div>
  );
}
