import React, { useState } from 'react'
import List from '../List/List'

export default function App() {
  const [editMode, setEditMode] = useState(false)
  return (
    <main>
      <div className='app'>
        <div className='container'>
          <header className='header'>
            <h1 className='header__title'>
              {editMode ? '0 selected' : 'Title'}
            </h1>
            <div className='header__controls'>
              <button
                onClick={() => {
                  setEditMode(!editMode)
                }}
                className='header__edit'
              >
                {editMode ? 'Cancel' : 'Edit'}
              </button>
            </div>
          </header>
          <List editMode={editMode} />
        </div>
      </div>
    </main>
  )
}
