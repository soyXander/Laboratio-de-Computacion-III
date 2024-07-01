import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio7() {
  const [nombres] = useState(["Roberto", "Eduardo", "Jose"])

  return (
    <div className="contenedor">
      <h1>Ejercicio 7</h1>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio7
