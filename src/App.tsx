import './App.css'

import logoImg from './assets/Logo.png'

function App() {

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
          <button type='button' className='category-button'>
            Motivação
          </button>

          <button type='button' className='category-button'>
            Bem estar
          </button>
        </section>

        <button type='button' className='button-frase'>
          Gerar frase
        </button>

        <h2 className='texto-frase'>
          Frase gerada aqui! Frase gerada aqui!
          Frase gerada aqui! Frase gerada aqui!
          Frase gerada aqui!!
        </h2>

      </div>
    </div>
  )
}

export default App