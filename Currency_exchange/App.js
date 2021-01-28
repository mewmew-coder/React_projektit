import React from "react";
import "./styles.css";

function App() {

  const [currency, setCurrency] = React.useState("EUR");
  const [rates, setRates] = React.useState({});

  React.useEffect(()=> {
    fetch('https://api.ratesapi.io/api/latest?base='+ currency).then(res => res.json()).then(data => {
    setRates(data.rates);
    });
  }, [currency]);

  const setUSD = () => setCurrency("USD");
  const setEUR = () => setCurrency("EUR");
  const setGBP = () => setCurrency("GBP")

  return (
    <div className="App">
      <h1>Currency Exchange API</h1>
      <h2>{currency} Exchange Rates</h2>
      <button onClick={setUSD}>USD</button> <button onClick={setEUR}>EUR</button> <button onClick={setGBP}>GBP</button>
      {Object.keys(rates).map(currency => <li>{currency}: {rates[currency]}</li>)}
    </div>
  );
}

export default App;
