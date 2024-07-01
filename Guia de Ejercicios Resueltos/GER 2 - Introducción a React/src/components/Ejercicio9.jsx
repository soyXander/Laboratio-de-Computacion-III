import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio9() {
  const [personas] = useState([
    { nombre: "Roberto", apellido: "Perez", edad: 20 },
    { nombre: "Eduardo", apellido: "Gonzalez", edad: 21 },
    { nombre: "José", apellido: "Lopez", edad: 22 },
  ])

  return (
    <div className="contenedor">
      <h1>Ejercicio 9</h1>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} {persona.apellido} {persona.edad}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio9
