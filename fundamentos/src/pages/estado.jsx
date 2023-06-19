import Layout from '@/components/Layout';
import estilos from '../styles/Estiloso.module.css'
import { useState } from 'react';
export default function Estado() {
    
    const [numero, setNumero]  = useState(0)

    function somar() {
        setNumero(numero + 1)
    }
    
    function diminuir() {
        setNumero(numero - 1)
    }

    return (
        <Layout titulo="Componente com estado">
            <div>
                <span className={estilos.vermelho}> {numero} </span>
                <button onClick={somar}>Somar</button>
                <button onClick={diminuir}>Diminuir</button>
            </div>
        </Layout>
    )
}