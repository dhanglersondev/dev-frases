import { useState } from 'react'

import './App.css'

import logoImg from './assets/Logo.png'

function App() {

  const [frases, setFrases] = useState("");
  const [categorias, setCategorias] = useState(0);

  const allFrases = [
    {
      id: 1,
      tipo: "Motivacional",
      frases: [
        "Acredite no processo, mesmo quando os resultados demorarem.",
        "Pequenos passos também levam a grandes conquistas.",
        "Você é mais forte do que imagina.",
        "O sucesso começa com a decisão de tentar.",
        "Cada dia é uma nova oportunidade para evoluir.",
        "Persistência vence talento quando o talento não persiste.",
        "Seu esforço de hoje constrói o amanhã.",
        "Grandes sonhos exigem coragem para começar.",
        "Não pare até sentir orgulho de si mesmo.",
        "A disciplina transforma objetivos em realidade."
      ]
    },
    {
      id: 2,
      tipo: "Reflexiva",
      frases: [
        "O silêncio muitas vezes responde o que as palavras não conseguem.",
        "Nem tudo que pesa é visível aos olhos.",
        "Às vezes, crescer significa deixar para trás quem você já foi.",
        "O tempo revela intenções que as pessoas escondem.",
        "Quem aprende a ouvir a si mesmo encontra paz.",
        "Nem toda distância é perda, algumas são livramento.",
        "A vida muda quando você muda sua forma de enxergar.",
        "Maturidade é entender que nem toda batalha merece sua energia.",
        "As cicatrizes também contam histórias de superação.",
        "A paz interior vale mais que aprovação externa."
      ]
    },
    {
      id: 3,
      tipo: "Bom Dia",
      frases: [
        "Bom dia! Que hoje seja leve, produtivo e cheio de coisas boas.",
        "Comece o dia com gratidão e tudo ficará mais bonito.",
        "Que seu dia seja iluminado e cheio de paz.",
        "Bom dia! Nunca subestime o poder de um novo começo.",
        "Hoje é mais uma chance para ser feliz.",
        "Que não faltem motivos para sorrir neste novo dia.",
        "Bom dia! Espalhe energia positiva por onde passar.",
        "Acorde com fé, coragem e vontade de vencer.",
        "Cada manhã traz novas oportunidades.",
        "Que seu café seja forte e seu dia incrível."
      ]
    }
  ]

  return (
    <div className='container'>
      <img
        alt='Logo frases'
        src={logoImg}
        className='logo'
      />

      <h2 className='title'>Categorias</h2>

      <div className='content-area'>

        <section className='category-area'>
          {allFrases.map((item, index) => (
            <button
              key={item.id}
              type='button'
              className={`category-button ${categorias === index ? 'active' : ''
                }`}
              onClick={() => setCategorias(index)}
            >
              {item.tipo}
            </button>
          ))}
        </section>

        <button type='button' className='button-frase'>
          Gerar frase
        </button>

        {frases !== '' && <p className='texto-frase'>{frases}</p>}
      </div>
    </div>
  )
}

export default App