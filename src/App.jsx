import { useState } from 'react'
import './App.css'

function App() {
const[inputIdade, setInputIdade] = useState('')
const[inputNada, setInputNada] = useState('')
const [inputRecom, setInputRecom] = useState('')
const [viajem, setViajem] = useState('')
function verificar() {
  if(inputNada === 'Sim' && inputIdade >= 16 ){
    setViajem('SIM')

  }else if(inputIdade >= 14 && inputRecom === 'SIM'){
    setViajem('SIM, aprovado por recomendação')

  }else{
    setViajem('NÃO')
  }
}
  return (
    <>
      <div>
        <h2>Exercicio 09 - Capitão Ganso</h2>
        SaberNadar:
        <input type="text" 
          value={inputNada}
          onChange={(e) => setInputNada(e.target.value)}
        />
        Idade: 
        <input type="text" 
          value={inputIdade}
          onChange={(e) => setInputIdade(e.target.value)}
        />
        Remendação:
        <input type="text"
          value={inputRecom}
          onChange={(e) => setInputRecom(e.target.value)}
        />
        <button onClick={verificar}>Verificar</button>
        <p>Viagem: {viajem}</p>
      </div>
    </>
  )
}

export default App
