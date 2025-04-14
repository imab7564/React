import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json()) // ✅ FIXED .json() call
      .then((res) => setData(res[currency]))
      .catch((err) => {
        console.error("Currency fetch failed:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
