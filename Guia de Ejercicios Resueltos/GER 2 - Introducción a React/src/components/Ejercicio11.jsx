import { useState, useEffect } from "react"
import "./Ejercicios.css"

function Ejercicio11() {
  const [personas, setPersonas] = useState([])

  useEffect(() => {
    const fetchPersonas = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!res.ok) {
        console.log(`Error: ${res.status}`)
        return
      }
      const datos = await res.json()
      setPersonas(datos)
    }
    fetchPersonas()
  }, [])

  return (
    <div className="contenedor">
    <h1>Ejercicio 11</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            {personas.map((persona) => (
              <tr key={persona.id}>
                <td>{persona.id}</td>
                <td>{persona.name}</td>
                <td>{persona.email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Ejercicio11
