import Checkbox from "./Checkbox";

import './ItemList.css'

export default function ItemList ({id, destroy}) {
  return (
    <div key={id} className="ItemList">
      <Checkbox/>
      <input className="task-input" type="text" placeholder="New Todo"/>
      <button onClick={destroy} className="delete-btn" type="button">X</button>
    </div>
  )
}