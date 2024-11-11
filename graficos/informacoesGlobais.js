const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function visualizarInformacoesGlobais() {

    const res = await fetch(url)
    const dados = await res.json()
    const total_pessoas_com_acesso_a_educacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const total_pessoas_com_educacao_superior = (dados.total_pessoas_com_educacao_superior / 1e9)

    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
   
    const paragrafo = document.createElement('p')

    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Em um mundo repleto de diversidade, vivem   <span>${pessoasNoMundo}</span> bilhões de pessoas. Dessas,   <span>${total_pessoas_com_acesso_a_educacao}</span> bilhões tem 
acesso à educação e passam em média  <span>${horas}</span> horas por dia estudando. Enquanto isso, temos aproximadamente <span>${total_pessoas_com_educacao_superior}</span> bilhões de pessoas formadas no ensino superior,  que infelizmente representa apenas 19% das pessoas que estudam no mundo. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)

}

visualizarInformacoesGlobais()

