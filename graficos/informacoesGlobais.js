
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    //console.log(dados)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} bilhões</span> de pessoas e que aproximadamente <span>${dados.total_pessoas_conectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio} horas conectadas</span>` // template string

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();