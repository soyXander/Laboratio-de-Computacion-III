import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio10() {
  const [personas, setPersonas] = useState([
    { nombre: "Roberto", apellido: "Perez", edad: 20 },
    { nombre: "Eduardo", apellido: "Gonzalez", edad: 21 },
    { nombre: "Jose", apellido: "Lopez", edad: 22 },
  ])
  const [nuevaPersona, setNuevaPersona] = useState("")

  const agregarPersona = (e) => {
    e.preventDefault()
    setPersonas([...personas, nuevaPersona])
  }

  const eliminarPersona = (index) => {
    const nuevaLista = personas.filter((_, i) => i !== index)
    setPersonas(nuevaLista)
  }

  return (
    <div className="contenedor">
      <h1>Ejercicio 10</h1>
      <form>
        <label>Nombre:</label>
        <input
          type="text"
          onChange={(e) =>
            setNuevaPersona({ ...nuevaPersona, nombre: e.target.value })
          }
        />
        <label>Apellido:</label>
        <input
          type="text"
          onChange={(e) =>
            setNuevaPersona({ ...nuevaPersona, apellido: e.target.value })
          }
        />
        <label>Edad:</label>
        <input
          type="number"
          onChange={(e) =>
            setNuevaPersona({ ...nuevaPersona, edad: e.target.value })
          }
        />
        <button onClick={agregarPersona}>Añadir</button>
      </form>
      <ul>
        {personas.map((persona, index) => (
          <li key={index}>
            {persona.nombre} {persona.apellido} {persona.edad}{" "}
            <button
              onClick={() => eliminarPersona(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Ejercicio10
