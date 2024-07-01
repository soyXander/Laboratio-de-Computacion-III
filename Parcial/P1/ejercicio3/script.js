const $ = (elem) => document.getElementById(elem)
const contador = $("contador")
const decrementar = $("decrementar")
const decrementar2 = $("decrementar2")
const incrementar = $("incrementar")
const incrementar2 = $("incrementar2")

let cuenta = parseInt(contador.innerHTML)

const btnsActivos = () => {
  decrementar.disabled = cuenta > 0 ? false : true
  decrementar2.disabled = cuenta > 1 ? false : true
  incrementar.disabled = cuenta < 20 ? false : true
  incrementar2.disabled = cuenta < 19 ? false : true
}

decrementar.onclick = () => {
  cuenta--
  contador.innerHTML = cuenta
  btnsActivos()
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

incrementar2.onclick = () => {
  cuenta += 2
  contador.innerHTML = cuenta
  btnsActivos()
}