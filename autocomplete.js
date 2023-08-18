fetch("https://corsproxy.io/?https://www.ime.usp.br/~pf/dicios/br-sem-acentos.txt")
.then(res => res.text())
.then(texto => texto.split('\n'))
.then(palavras => {
  listarFiltrados(palavras)
  filtrar(palavras)
})

const autocompleteInput = document.getElementById('autocomplete');

function filtrar(palavras) {
  autocompleteInput.oninput = () => {
    const inputText = autocompleteInput.value.toLowerCase();
    const filtrados = palavras.filter(p => p.toLowerCase().startsWith(inputText));
    listarFiltrados(filtrados);
  };
}

function listarFiltrados(opcoes) {
  const dropdown = document.getElementById('autocomplete-dropdown');
  if (dropdown) {
    dropdown.remove();
  }

  if (opcoes.length > 0) {
    const dropdownList = document.createElement('ul');
    dropdownList.id = 'autocomplete-dropdown';

    opcoes.forEach(option => {
      const listItem = document.createElement('li');
      listItem.textContent = option;
      listItem.addEventListener('click', function() {
        autocompleteInput.value = option;
        dropdownList.remove();
      });

      dropdownList.appendChild(listItem);
    });

    autocompleteInput.parentNode.appendChild(dropdownList);
  }
}
