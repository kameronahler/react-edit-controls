import React, { useState } from 'react'
import List from '../List/List'

export default function App() {
  const [editMode, setEditMode] = useState(false)

  return (
    <main>
      <div className='app'>
        <div className='container'>
          <header className='header'>
            <h1 className='header__title'>Title</h1>
            <div className='header__controls'>
              <button className='header__edit'>Edit</button>
            </div>
          </header>
          <List editMode={editMode} />
        </div>
      </div>
    </main>
  )
}
