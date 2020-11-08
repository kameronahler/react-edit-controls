import React from 'react'
import ListItem from '../ListItem/ListItem'

export default function List({ editMode }) {
  return (
    <ul className='list'>
      <ListItem editMode={editMode} />
      <ListItem editMode={editMode} />
      <ListItem editMode={editMode} />
      <ListItem editMode={editMode} />
      <ListItem editMode={editMode} />
      <ListItem editMode={editMode} />
    </ul>
  )
}
