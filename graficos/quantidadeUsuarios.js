import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
  const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeDeUsuarios = Object.values(dados)

  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  const colors = nomeDasRedes.map(() => getRandomColor());

  const data = [
    {
      x: nomeDasRedes,
      y: quantidadeDeUsuarios,
      type: 'bar',
      name: 'Quantidade de Usuários', 
      marker: {
        color: colors, 
        line: {
          color: getComputedStyle(document.body).getPropertyValue('--bg-color'), 
          width: 2                     
        }
      }
    }
  ]

  const layout = {
    margin: { b: 150 },  
    xaxis: {
        tickangle: -45  
    },
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
      text: 'Escolas com mais Alunos no mundo',
      x: 0,
      font: {
        color: getCSS('--primary-color'),
        family: getCSS('--font'),
        size: 30
      }
    },
    xaxis: {
      tickfont: tickConfig,
      title: {
        text: 'nome das redes sociais',
        font: {
          color: getCSS('--secondary-color')
        }, 
        standoff: 20 
      }
    },
    yaxis: {
      tickfont: tickConfig,
      title: {
        text: 'bilhões de usuários ativos',
        font: {
          color: getCSS('--secondary-color')
        },
        standoff: 20 
      }
    },
    height: 600 
  }

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()
