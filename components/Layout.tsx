export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">📈 Scipti</h1>
        <nav className="space-x-6 text-sm">
          <a href="/" className="hover:underline">Forside</a>
          <a href="/markets" className="hover:underline">Verdens aktier</a>
          <a href="/portfolio" className="hover:underline">Min portefølje</a>
        </nav>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
