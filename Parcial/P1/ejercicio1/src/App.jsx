import { useState } from "react"
import "./App.css"

function App() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const validarLongitud = () => {
    if (password.length >= 8) {
      return true
    }
  }

  const validarNumero = () => {
    for (let i = 0; i < password.length; i++) {
      if ("0123456789".includes(password[i])) {
        return true
      }
    }
  }

  const validarSigno = () => {
    for (let i = 0; i < password.length; i++) {
      if ("!@$%&#".includes(password[i])) {
        return true
      }
    }
  }

  const validarEspacio = () => {
    for (let i = 0; i < password.length; i++) {
      if (!password.includes(" ")) {
        return true
      }
    }
  }

  const validarCoincidencia = () => {
    if (password === confirmPassword && password) {
      return true
    }
  }

  const validar = () => {
    if (validarLongitud() && validarNumero() && validarSigno() && validarEspacio() && validarCoincidencia()) {
      return false
    }
    return true
  }

  const enviar = (e) => {
    e.preventDefault()
    
    alert("La contraseña es valida")
  }

  return (
    <>
      <form>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="confirm-password">Confirme la contraseña</label>
        <input
          id="confirm-password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button disabled={validar()} onClick={enviar}>Ingresar</button>
      </form>

      {validarLongitud() ? <p style={{ color: "green" }}>La contraseña tiene menos 8 caracteres</p> : <p style={{ color: "red" }}>La contraseña debe tener al menos 8 caracteres</p>}
      {validarNumero() ? <p style={{ color: "green" }}>La contraseña tiene al menos un número</p> : <p style={{ color: "red" }}>La contraseña debe incluir al menos un número</p>}
      {validarSigno() ? <p style={{ color: "green" }}>La contraseña tiene al menos un signo (@, !, $, %, &, #)</p> : <p style={{ color: "red" }}>La contraseña debe incluir al menos un signo (@, !, $, %, &, #)</p>}
      {validarEspacio() ? <p style={{ color: "green" }}>La contraseña no tiene espacios</p> : <p style={{ color: "red" }}>La contraseña no debe contener espacios</p>}
      {validarCoincidencia() ? <p style={{ color: "green" }}>Las contraseñas coinciden</p> : <p style={{ color: "red" }}>Las contraseñas deben coincidir</p>}
    </>
  )
}

export default App
