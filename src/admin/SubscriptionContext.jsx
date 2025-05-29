import React, { createContext, useState } from 'react'

export const SubscriptionContext = createContext()

export function SubscriptionProvider({ children }) {
  const [subscriptions, setSubscriptions] = useState([])

  const addSubscription = (subscription) => {
    setSubscriptions((prev) => [...prev, subscription])
  }

  const deleteSubscription = (index) => {
    setSubscriptions((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <SubscriptionContext.Provider value={{ subscriptions, addSubscription, deleteSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  )
}
