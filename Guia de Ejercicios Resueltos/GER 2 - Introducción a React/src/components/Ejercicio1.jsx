import { useState } from 'react'
import "./Ejercicios.css"

function Ejercicio1() {
  const [cont, setCont] = useState(0)

  const incrementar = () => {
    setCont(cont + 1)
  }

  return (
    <div className="contenedor">
      <h1>Ejercicio 1</h1>
      <p>Contador: {cont}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={() => setCont(cont - 1)}>Decrementar</button>
    </div>
  )
}

export default Ejercicio1
