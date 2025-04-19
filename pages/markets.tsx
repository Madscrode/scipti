import Head from "next/head";
import Link from "next/link";

const markets = {
  "USA": ["AAPL", "TSLA", "NVDA", "MSFT"],
  "Danmark": ["DANSKE.CO", "MAERSK-B.CO"],
  "Tyskland": ["BMW.DE", "SAP.DE"],
  "Sverige": ["ERIC-B.ST", "VOLV-B.ST"],
};

export default function MarketsPage() {
  return (
    <>
      <Head>
        <title>Verdens aktiemarkeder | Scipti</title>
      </Head>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6">🌍 Opdag aktier fra hele verden</h1>
        {Object.entries(markets).map(([country, stocks]) => (
          <div key={country} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">🇺🇳 {country}</h2>
            <ul className="flex flex-wrap gap-4">
              {stocks.map((symbol) => (
                <li key={symbol}>
                  <Link href={`/stock/${symbol}`} className="bg-white shadow px-4 py-2 rounded-lg border hover:bg-gray-50 inline-block">
                    {symbol}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
