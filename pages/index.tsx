import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Scipti AI – Din Aktie Sidekick</title>
      </Head>
      <main className="max-w-screen-xl mx-auto px-6 py-10">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">📈 Scipti AI</h1>
          <p className="text-lg text-gray-600">Din AI-drevne platform til aktiemarkedet</p>
        </header>

        <section className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">🔍 Søg Aktier</h2>
            <p>Find aktier og se realtidsdata</p>
            <Link href="/stock/TSLA" className="text-blue-600 underline mt-2 inline-block">
              Gå til eksempel: TSLA
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">🤖 SciptiBot</h2>
            <p>Stil spørgsmål og få AI-vurderinger på aktier</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">💼 Min Portefølje</h2>
            <p>Log ind og se dine aktier, performance og fordeling</p>
            <Link href="/portfolio" className="text-blue-600 underline mt-2 inline-block">
              Gå til portefølje
            </Link>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm mt-16">
          © 2025 Scipti AI. Alle rettigheder forbeholdes.
        </footer>
      </main>
    </>
  );
}
