import listIcon from '/list.svg'
import './Topbar.css'

export default function Topbar () {
  return (
    <div className="Topbar">
      <img src={listIcon} alt="list icon"/>
      <h1>Simple Todo List!</h1>
      <button type="button">Clean All</button>
    </div>
  )
}