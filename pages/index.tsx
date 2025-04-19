import Head from "next/head";
import { useState, useEffect } from "react";
import { translations } from "../translations";

export default function Home() {
  const [lang, setLang] = useState("en");

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
      <main className="max-w-screen-xl mx-auto px-6 py-10">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">📈 Scipti AI</h1>
            <p className="text-lg text-gray-600">{t.subtitle}</p>
          </div>
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
        </header>

        <section className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">🔍 {t.search}</h2>
            <p>{t.search_desc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">🤖 {t.ai}</h2>
            <p>{t.ai_desc}</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">💼 {t.portfolio}</h2>
            <p>{t.portfolio_desc}</p>
          </div>
        </section>
        <footer className="text-center text-gray-500 text-sm mt-16">
          © 2025 Scipti AI. All rights reserved.
        </footer>
      </main>
    </>
  );
}
