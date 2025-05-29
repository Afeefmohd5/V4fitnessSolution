import React, { createContext, useState } from 'react'

export const TradeContext = createContext()

export const TradeProvider = ({ children }) => {
  const [transactionType, setTransactionType] = useState('BUY')
  const [selectedStock, setSelectedStock] = useState(null)
  const [tradeOrder, setTradeOrder] = useState(null)

  return (
    <TradeContext.Provider value={{ transactionType, setTransactionType, selectedStock, setSelectedStock, tradeOrder, setTradeOrder }}>
      {children}
    </TradeContext.Provider>
  )
}
