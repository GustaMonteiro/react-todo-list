import { useState } from "react";

import './Checkbox.css'

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  const content = checked && <p>V</p>;

  const styles = {
    backgroundColor: checked ? '#1ca0ec' : 'white'
  }

  return (
    <div className="Checkbox" onClick={() => setChecked(old => !old)} style={styles}>
      {content} 
    </div>
  )
}