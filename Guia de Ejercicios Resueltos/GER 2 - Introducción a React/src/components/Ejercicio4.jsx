import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio4() {
  const [base, setBase] = useState(0)
  const [altura, setAltura] = useState(0)

  const calcPerimetro = (base, altura) => {
    const perimetro = (base + altura) * 2
    alert(`Perimetro del rectangulo: ${perimetro}`)
  }

  const calcSuperficie = (base, altura) => {
    const superficie = base * altura
    alert(`Superficie del rectangulo: ${superficie}`)
  }

  return (
    <div className="contenedor">
      <h1>Ejercicio 4</h1>
      <p>Base:</p>
      <input
        type="number"
        value={base}
        onChange={(e) => setBase(Number(e.target.value))}
      />

      <p>Altura:</p>
      <input
        type="number"
        value={altura}
        onChange={(e) => setAltura(Number(e.target.value))}
      />

      <button onClick={() => calcPerimetro(base, altura)}>Perimetro</button>
      <button onClick={() => calcSuperficie(base, altura)}>Superficie</button>
    </div>
  )
}

export default Ejercicio4
