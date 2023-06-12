import Layout from '@/components/Layout';
import estilos from '../styles/Estiloso.module.css'
export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de css modularizado">
            <div className={estilos.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}