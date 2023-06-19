import Layout from '@/components/Layout';

// getStaticProps é uma funcao assincrona que retorna um objeto com props
export async function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteudo estatico">
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}