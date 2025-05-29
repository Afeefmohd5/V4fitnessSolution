import React, { createContext, useState } from 'react'

export const SegmentCategoryContext = createContext()

export function SegmentCategoryProvider({ children }) {
  const [userCategories, setUserCategories] = useState({})

  const setUserCategory = (userId, category) => {
    setUserCategories((prev) => ({ ...prev, [userId]: category }))
  }

  return (
    <SegmentCategoryContext.Provider value={{ userCategories, setUserCategory }}>
      {children}
    </SegmentCategoryContext.Provider>
  )
}
