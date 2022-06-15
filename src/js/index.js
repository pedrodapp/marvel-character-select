// Mouse enter na seleção dos personagens:

const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value

    if (idSelecionado === 'ultron') return

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')

    // Altera imagem do personagem selecionado:

    const imagemJogador1 = document.getElementById('personagem-jogador-1')
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

    // Altera texto do personagem selecionado:

    const nomeJogador1 = document.getElementById('nome-jogador-1')
    const nomeSelecionado = personagem.getAttribute('data-name')
    nomeJogador1.innerHTML = nomeSelecionado
  })
})
