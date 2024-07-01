import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio3() {
  const [number, setNumber] = useState(0)

  const numeroInvertido = number.toString().split("").reverse().join("") == number.toString()

  return (
    <div className="contenedor">
      <h1>Ejercicio 3</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <p>{number > 0 ? "Positivo" : number < 0 ? "Negativo" : "Cero"}</p>
      <p>{number % 2 === 0 ? "Par" : "Impar"}</p>
      <p>{number % 7 === 0 ? "Multiplo de 7" : "No es multiplo"}</p>
      <p>{numeroInvertido ? "Es capicua" : "No es capicua"}</p>
    </div>
  )
}

export default Ejercicio3
