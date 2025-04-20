import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function StockPage() {
  const router = useRouter();
  const { symbol } = router.query;
  const [stockData, setStockData] = useState<any>(null);
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    if (!symbol) return;

    // Eksempeldata – senere skifter vi til live Finnhub API
    const fakeData = {
      name: "Tesla Inc.",
      price: 172.34,
      change: +1.23,
      currency: "USD",
    };
    const fakeNews = [
      {
        headline: "Tesla reveals new robot at AI Day",
        source: "Reuters",
        date: "2025-04-18",
        url: "https://example.com/tesla-news",
      },
      {
        headline: "Analysts raise price target on TSLA",
        source: "Yahoo Finance",
        date: "2025-04-17",
        url: "https://example.com/tesla-news-2",
      },
    ];

    setStockData(fakeData);
    setNews(fakeNews);
  }, [symbol]);

  return (
    <>
      <Head>
        <title>{symbol} | Scipti</title>
      </Head>
      <div className="max-w-3xl mx-auto p-6">
        {stockData ? (
          <>
            <h1 className="text-3xl font-bold mb-2">
              {symbol} – {stockData.name}
            </h1>
            <p className="text-xl mb-4">
              {stockData.price} {stockData.currency} ({stockData.change > 0 ? "+" : ""}
              {stockData.change})
            </p>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Seneste nyheder</h2>
              <ul className="space-y-3">
                {news.map((n, i) => (
                  <li key={i} className="border-b pb-2">
                    <a href={n.url} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                      {n.headline}
                    </a>
                    <p className="text-sm text-gray-600">
                      {n.source} – {n.date}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Indlæser aktiedata...</p>
        )}
      </div>
    </>
  );
}
