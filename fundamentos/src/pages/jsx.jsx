import Layout from '../components/Layout'

export default function Jsx() {
    const subtitulo = 'Estou no JavaScript!'

    function funcaoQualquer() {  
        return 'Chamando uma function no JSX'
    }

    return (
        <Layout titulo="Entendendo o JSX">
        <div>
            <h1>JSX concept</h1>
            <h2>{subtitulo}</h2>
            <h3>{funcaoQualquer()}</h3>
            {JSON.stringify({rand: Math.random()}).toString()}
        </div>
        </Layout>
    )
}
