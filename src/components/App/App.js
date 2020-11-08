import React from 'react'
import Header from '../Header/Header'
import List from '../List/List'

export default function App() {
  return (
    <main>
      <div className='app'>
        <div className='container'>
          <Header />
          <List />
        </div>
      </div>
    </main>
  )
}
