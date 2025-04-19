import Head from "next/head";
import { useState, useEffect } from "react";
import { translations } from "../translations";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && translations[storedLang]) {
      setLang(storedLang);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
  };

  const t = translations[lang];

  return (
    <>
      <Head>
        <title>{t.title}</title>
      </Head>
      <main className="max-w-screen-xl mx-auto px-6 py-6">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">📈 Scipti AI</h1>
          <div className="flex items-center gap-4">
            <select
              onChange={handleLanguageChange}
              value={lang}
              className="border rounded px-2 py-1 text-sm"
            >
              <option value="da">🇩🇰 Dansk</option>
              <option value="en">🇬🇧 English</option>
              <option value="de">🇩🇪 Deutsch</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="es">🇪🇸 Español</option>
              <option value="no">🇳🇴 Norsk</option>
              <option value="fi">🇫🇮 Suomi</option>
              <option value="sv">🇸🇪 Svenska</option>
            </select>
            <button
              className="text-xl px-3 py-1 border rounded"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </header>

        <p className="text-lg text-gray-600 mb-8">{t.subtitle}</p>

        {menuOpen && (
          <nav className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-1">🔍 {t.search}</h2>
              <p className="text-sm text-gray-700">{t.search_desc}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-1">🤖 {t.ai}</h2>
              <p className="text-sm text-gray-700">{t.ai_desc}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">💼 {t.portfolio}</h2>
              <p className="text-sm text-gray-700">{t.portfolio_desc}</p>
            </div>
          </nav>
        )}

        <footer className="text-center text-gray-500 text-sm mt-20">
          © 2025 Scipti AI. All rights reserved.
        </footer>
      </main>
    </>
  );
}
