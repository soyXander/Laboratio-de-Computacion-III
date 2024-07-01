import { useState } from 'react'

function Ejercicio2() {
  const [text, setText] = useState('')
  return (
    <div className='contenedor'>
      <h1>Ejercicio 2</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  )
}

export default Ejercicio2