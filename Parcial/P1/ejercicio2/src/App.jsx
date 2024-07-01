import { useState } from 'react'
import "./App.css"

function App() {
  const [personas, setPersonas] = useState([])
  const [nuevaPersona, setNuevaPersona] = useState({
    nombre: "",
    edad: ""
  })

  const agregarPersona = (e) => {
    e.preventDefault()

    setPersonas([...personas, nuevaPersona])
    setNuevaPersona({
      nombre: "",
      edad: ""
    })
  }

  const checkMayorEdad = () => {
    for (let i = 0; i < personas.length; i++) {
      if (personas[i].edad >= 18) {
        return true
      }
    }
  }

  const calcPromedio = () => {
    let suma = personas.reduce((acc, persona) => acc + parseInt(persona.edad), 0)
    return suma / personas.length
  }

  return (
    <>
    <form>
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" value={nuevaPersona.nombre} onChange={(e) => setNuevaPersona({...nuevaPersona, nombre : e.target.value})} />

      <label htmlFor="edad">Edad</label>
      <input type="number" id="edad" value={nuevaPersona.edad} onChange={(e) => setNuevaPersona({...nuevaPersona, edad : e.target.value})} />

      <button onClick={agregarPersona}>Agregar</button>
    </form>

    <div>
      <span style={{color: checkMayorEdad() ? "green" : "red"}}>
        {checkMayorEdad() ? "Hay al menos un mayor de edad" : "No hay persona mayor de edad"}
      </span>
    </div>

    <div>
      <span style={{color: calcPromedio() ? "green" : "red"}}>
        {calcPromedio() ? `El promedio de edad de las personas de la lista es: ${calcPromedio()}` : "No hay gente en la lista para promediar la edad"}
      </span>
    </div>

    <ul>
      {personas.map((persona, index) => (
        <li key={index}>{persona.nombre} - {persona.edad} años</li>
      ))}
    </ul>
    </>
  )
}

export default App
