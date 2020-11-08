import React, { useState } from 'react'

export default function List(editMode) {
  const [localEditMode] = useState(false)

  return (
    <ul className='list'>
      <li className='list__item'>
        <span
          className={`list__item-controls
          ${localEditMode ? 'list__item-controls--visible' : ''}`}
        >
          <input className='list__item-checkbox' type='checkbox' />
        </span>
        <h4 className='list__item-title'>Lorem, ipsum dolor</h4>
        <p className='list__item-preview'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          ipsum repellat nesciunt architecto, dolore exercitationem, quia
          consequatur quibusdam iusto dicta eaque quidem iste omnis quaerat hic
          eius atque, earum fugit?
        </p>
      </li>
    </ul>
  )
}
