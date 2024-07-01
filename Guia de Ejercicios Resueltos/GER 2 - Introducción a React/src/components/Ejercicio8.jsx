import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio8() {

  const listaNombres = ["Roberto", "Eduardo", "José"]
  const [nombres, setNombres] = useState(listaNombres)
  const [nuevoNombre, setNuevoNombre] = useState("")

  const handleNombres = (e) => {
    e.preventDefault()
    setNombres([...nombres, nuevoNombre])
  }

  return (
    <div className="contenedor">
      <h1>Ejercicio 8</h1>
      <form>
        <input
          type="text"
          onChange={(e) => setNuevoNombre(e.target.value)}
        />
        <button onClick={handleNombres}>Añadir</button>
      </form>
      <ul>
        {nombres.map((nombre, index) => <li key={index}>{nombre}</li>)}
      </ul>
    </div>
  )
}

export default Ejercicio8