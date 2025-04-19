
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

type LanguageCode = 'da' | 'en' | 'sv' | 'no' | 'de' | 'fr' | 'fi';

const translations: Record<LanguageCode, {
  title: string;
  subtitle: string;
  search: string;
  search_desc: string;
  ai: string;
  ai_desc: string;
  portfolio: string;
  portfolio_desc: string;
}> = {
  da: {
    title: "Scipti AI",
    subtitle: "Din AI-drevne platform til aktiemarkedet",
    search: "🔍 Søg Aktier",
    search_desc: "Find aktier og se realtidsdata",
    ai: "🤖 SciptiBot",
    ai_desc: "Stil spørgsmål og få AI-vurderinger på aktier",
    portfolio: "💼 Min Portefølje",
    portfolio_desc: "Log ind og se dine aktier, performance og fordeling",
  },
  en: {
    title: "Scipti AI",
    subtitle: "Your AI-powered stock market platform",
    search: "🔍 Search Stocks",
    search_desc: "Find stocks and view real-time data",
    ai: "🤖 SciptiBot",
    ai_desc: "Ask questions and get AI insights on stocks",
    portfolio: "💼 My Portfolio",
    portfolio_desc: "Log in and view your stocks, performance, and breakdown",
  },
  sv: {
    title: "Scipti AI",
    subtitle: "Din AI-drivna aktieplattform",
    search: "🔍 Sök Aktier",
    search_desc: "Hitta aktier och se realtidsdata",
    ai: "🤖 SciptiBot",
    ai_desc: "Ställ frågor och få AI-bedömningar på aktier",
    portfolio: "💼 Min Portfölj",
    portfolio_desc: "Logga in och se dina aktier, prestation och fördelning",
  },
  no: {
    title: "Scipti AI",
    subtitle: "Din AI-drevne aksjeplattform",
    search: "🔍 Søk Aksjer",
    search_desc: "Finn aksjer og se sanntidsdata",
    ai: "🤖 SciptiBot",
    ai_desc: "Still spørsmål og få AI-analyser av aksjer",
    portfolio: "💼 Min Portefølje",
    portfolio_desc: "Logg inn og se dine aksjer, ytelse og fordeling",
  },
  de: {
    title: "Scipti AI",
    subtitle: "Deine KI-gestützte Aktienplattform",
    search: "🔍 Aktien suchen",
    search_desc: "Finde Aktien und sieh Echtzeitdaten",
    ai: "🤖 SciptiBot",
    ai_desc: "Stelle Fragen und erhalte KI-Bewertungen zu Aktien",
    portfolio: "💼 Mein Portfolio",
    portfolio_desc: "Melde dich an und sieh deine Aktien, Performance und Aufteilung",
  },
  fr: {
    title: "Scipti AI",
    subtitle: "Votre plateforme boursière alimentée par l'IA",
    search: "🔍 Rechercher des Actions",
    search_desc: "Trouvez des actions et consultez les données en temps réel",
    ai: "🤖 SciptiBot",
    ai_desc: "Posez des questions et obtenez des analyses IA sur les actions",
    portfolio: "💼 Mon Portefeuille",
    portfolio_desc: "Connectez-vous pour voir vos actions, performances et répartitions",
  },
  fi: {
    title: "Scipti AI",
    subtitle: "Tekoälyllä toimiva osakealusta",
    search: "🔍 Etsi osakkeita",
    search_desc: "Löydä osakkeita ja tarkastele reaaliaikatietoja",
    ai: "🤖 SciptiBot",
    ai_desc: "Kysy kysymyksiä ja saat tekoälyarvioita osakkeista",
    portfolio: "💼 Salkkuni",
    portfolio_desc: "Kirjaudu sisään ja tarkastele osakkeitasi, tuottoja ja jakaumaa",
  },
};

export default function Home() {
  const [lang, setLang] = useState<LanguageCode>("en");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && Object.keys(translations).includes(storedLang)) {
      setLang(storedLang as LanguageCode);
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as LanguageCode;
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
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2">🚀 {t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </header>

        <div className="mb-6">
          <label htmlFor="language" className="mr-2 font-semibold">🌐 Language:</label>
          <select
            id="language"
            onChange={handleLanguageChange}
            value={lang}
            className="border px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="da">Dansk</option>
            <option value="sv">Svenska</option>
            <option value="no">Norsk</option>
            <option value="de">Deutsch</option>
            <option value="fr">Français</option>
            <option value="fi">Suomi</option>
          </select>
        </div>

        <section className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">{t.search}</h2>
            <p>{t.search_desc}</p>
            <Link href="/stock/TSLA" className="text-blue-600 underline mt-2 inline-block">
              Gå til eksempel: TSLA
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">{t.ai}</h2>
            <p>{t.ai_desc}</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">{t.portfolio}</h2>
            <p>{t.portfolio_desc}</p>
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
