import Layout from "@/components/Layout"
import { useState } from "react"

export default function Integracao() {
  
  const [codigo, setCodigo] = useState(1)
  const [cliente, setCliente] = useState([])
  
  function obterCliente(){
    fetch('http://localhost:3000/api/clientes/123')
    .then(resp => resp.json())
    .then(dados => { console.log(dados); setCliente(dados)})
    .catch(error => console.log(error))
    .finally(() => console.log('Fim!'))
  }
  
  return (
    <Layout>
      
      <div>
        <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)} />
        <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      
      <ul>  
        <li> Codigo: {cliente.codigo} </li>
        <li> Nome: {cliente.nome} </li>
        <li> Email: {cliente.email} </li>
      </ul>
    </Layout>
    )
  }
  