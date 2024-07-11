import React from 'react'
import { CartProvider } from '../contexts'
import { LeftPanel } from '../components/leftPanel'

export const HomePage = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row">
      <div className="lg:w-3/4">
        <LeftPanel />
      </div>
    </div>
  )
}
