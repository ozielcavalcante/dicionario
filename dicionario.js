fetch("https://corsproxy.io/?https://www.ime.usp.br/~pf/dicios/br-sem-acentos.txt")
.then(res => res.text())
.then(texto => texto.split('\n'))
.then(palavras => {
  listar(palavras)
  criarFiltro(palavras)
})

function listar(palavras) {
  const ul = document.getElementById('lista')
  ul.innerHTML = palavras.reduce((list, palavra) => list + `<li>${palavra}</li>`, '')
}

function criarFiltro(palavras) {
  const filtroInput = document.getElementById('filtro')
  filtroInput.oninput = () => {
    const inputText = filtroInput.value.toLowerCase()
    const filtrados = palavras.filter(p => p.toLowerCase().startsWith(inputText))
    listar(filtrados)
  }
}
