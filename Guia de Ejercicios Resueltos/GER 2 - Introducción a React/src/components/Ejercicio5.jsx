import { useState } from "react"
import "./Ejercicios.css"

function Ejercicio5() {
  const [txtColor, setTxtColor] = useState("")
  const [bgColor, setBgColor] = useState("")

  const handleTxtColor = (e) => {
    setTxtColor(e.target.value)
  }

  const handleBgColor = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <div className="contenedor">
      <h1>Ejercicio 5</h1>
      <p>Color de texto</p>
      <select value={txtColor} onChange={handleTxtColor}>
        <option value="black">Negro</option>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
        <option value="yellow">Amarillo</option>
        <option value="white">Blanco</option>
        <option value="purple">Morado</option>
        <option value="pink">Rosa</option>
        <option value="orange">Naranja</option>
        <option value="brown">Marrón</option>
      </select>

      <p>Color de fondo</p>
      <select value={bgColor} onChange={handleBgColor}>
        <option value="white">Blanco</option>
        <option value="black">Negro</option>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="blue">Azul</option>
        <option value="yellow">Amarillo</option>
        <option value="purple">Morado</option>
        <option value="pink">Rosa</option>
        <option value="orange">Naranja</option>
        <option value="brown">Marrón</option>
      </select>

      <p style={{ color: txtColor, backgroundColor: bgColor }}>Hola mundo!</p>
    </div>
  )
}

export default Ejercicio5
