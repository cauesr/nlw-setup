const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

/* essa tag é utilizada para ficar na tela de navegação para ficar ouvindo o estelepectador para adicionar alguma informação "addEventListener são os eventos que ocorrem no navegador, desde um click a uma movimentação do mouse. /* todos os eventos dispara uma função. A palavra change segnifica mudança*/
button.addEventListener("click", add)
form.addEventListener("change", save) 

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🛑")
    return
  }

  alert("Adicionado com Sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
} /*Todos os dados da minha aplicação estão sendo guardados na biblioteca "nlwsetup.data"*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
