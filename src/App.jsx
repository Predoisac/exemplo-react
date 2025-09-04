import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { getCharacters } from './api/character'

function getGenero(genero) {
  switch (genero) {
    case 'Male':
      return 'Masculino'
    case 'Female':
      return 'Feminino'
    case 'unknown':
      return 'Desconhecido'
    case 'Genderless':
      return 'Sem Gênero'
    default:
      return genero
  }
}

function getStatus(status) {
  switch (status) {
    case 'Alive':
      return 'Vivo'
    case 'Dead':
      return 'Morto'
    case 'unknown':
      return 'Desconhecido'
    default:
      return status
  }
}

function getEspecie(especie) {
  switch (especie) {
    case 'Alien':
      return 'Alienígena'
    case 'Human':
      return 'Humano'
    case 'Robot':
      return 'Robo'
    case 'Disease':
      return 'Doença'
    case 'Humanoid':
      return 'Humanoide'
    case 'unknown':
      return 'Desconhecido'
    case 'Mythological Creature':
      return 'Criatura Mitológica'
    default:
      return especie
  }
}

function App() {
  const [conteudo, setConteudo] = useState(<></>)

  async function TransformaEmLista() {
    const todosPersonagens = await getCharacters();

    return todosPersonagens.map(personagem =>
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={personagem.name} />

        <h2>{personagem.name}</h2>

        <div className='char-info'>
          <span><b>Espécie: </b>{getEspecie(personagem.species)}</span>
          <span><b>Gênero: </b>{getGenero(personagem.gender)}</span>
        </div>
        <div>
          <h5><b>Status: </b> {getStatus(personagem.status)}</h5>
        </div>
      </div>
    )
  }

  useEffect(() => {
    async function Carregar() {
      setConteudo(await TransformaEmLista());
    }
    Carregar();
  }, {})

  return (
    <>
      <Header />
      <main>
        <div className='filtros'>
          <span className='filtros-titulo'>Filtros</span>
          <div className='filtro status'>
            <b>Status:</b>
            <span>Vivo</span>
            <span>Morto</span>
            <span>Desconhecido</span>
          </div>
          <div className='filtro genero'>
            <b>Genero:</b>
            <span>Masculino</span>
            <span>Feminino</span>
            <span>Sem Gênero</span>
            <span>Desconhecido</span>
          </div>
        </div>
        <div className='lista-principal'>
          {conteudo}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App