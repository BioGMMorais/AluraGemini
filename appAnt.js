function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa')
  console.log(section) // Loga a seção no console para fins de depuração

  let campoPesquisa = document.getElementById('campo-pesquisa').value
  console.log(campoPesquisa)

  if (!campoPesquisa) {
    section.innerHTML = 'Nada foi encontrado! Digite no campo de pesquisa.'
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = '';
  let genero = '';
  let altitudes = '';
  let abundancia = '';

  // Itera sobre os dados e constrói o HTML para cada resultado
  for (let dado of formigasMA) {
    genero = dado.genero.toLowerCase();
    altitudes = dado.altitudes;
    abundancia = dado.abundancia.toLowerCase();

    if (genero.includes(campoPesquisa) || altitudes.includes(campoPesquisa) || abundancia.includes(campoPesquisa)) {
      // Cria um novo elemento HTML para cada resultado
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${genero}</a>
        </h2>
        <p class="descricao-meta">Altitudes (m): ${altitudes}</p>
        <p class="descricao-meta">Abundâmcia: ${abundancia}</p>
        <img src="./Captura_de_tela_2022-03-31_111243-removebg-preview.png"></img>
      </div>
    `
    }
  }

  // Atualiza o conteúdo HTML da seção com os resultados construídos
  section.innerHTML = resultados
}
