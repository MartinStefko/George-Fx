import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import CurrencyItem from './CurrencyItem'

function App() {
  const [currency, setCurrency] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343')
      .then((res) => {
        console.log(res.data.fx)
        setCurrency(res.data.fx)
        // console.log(currency)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCurrency = currency.filter(
    (currency) => currency.currency.includes(search)

    // currency.nameI18N.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="currency-app">
      <div className="currency-search">
        <h1 className="currency-text">George FE Test</h1>
        <p className="currency-text">Search a currency</p>
        <form>
          <input
            className="currency-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCurrency.map((currency) => {
        // console.log(
        //   'currency.exchangeRate.middle',
        //   toString(currency.exchangeRate.middle)
        // )

        return (
          <CurrencyItem
            key={currency.currency}
            name={currency.nameI18N}
            // price={currency.exchangeRate.buy}
            symbol={currency.currency}
          />
        )
      })}
    </div>
  )
}

export default App