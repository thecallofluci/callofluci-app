// src/app/_components/_layout/AppWrapper.tsx
import React from 'react'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AppWrapper