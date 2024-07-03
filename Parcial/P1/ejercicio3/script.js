const $ = (elem) => document.getElementById(elem)
const contador = $("contador")
const decrementar2 = $("decrementar2")
const incrementar = $("incrementar")

let cuenta = parseInt(contador.innerHTML)

const btnsActivos = () => {
  decrementar2.disabled = cuenta < 2 ? true : false
  incrementar.disabled = cuenta > 19 ? true : false
}

decrementar2.onclick = () => {
  cuenta -= 2
  contador.innerHTML = cuenta
  btnsActivos()
}

incrementar.onclick = () => {
  cuenta++
  contador.innerHTML = cuenta
  btnsActivos()
}