import { useState } from 'react'
import './List.css'
import ItemList from './ItemList'

import { v4 as uuid } from "uuid";

export default function List () {
  const createItem = () => {
    const key = uuid();

    return {
      item: <ItemList id={key} destroy={() => deleteItem(key)}/>,
      id: key
    }
  }

  const deleteItem = (id) => {
    setTasks(old => old.filter(item => item.id !== id));
  }

  const [tasks, setTasks] = useState([createItem()])

  return (
    <div className="List">
      <input className='list-header' type="text" placeholder='New List'/>
      {tasks.map(t => t.item)}
      <button className='add-item-btn' onClick={() => setTasks(old => [...old, createItem()])} type="button">+ Item</button>
    </div>
  )
}