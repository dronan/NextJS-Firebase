import { Cabecalho } from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export default function Exemplo() {
    return (
        <Layout>
            <Cabecalho titulo="Teste titulo" subtitulo="Teste subtitulo" />
            <Cabecalho titulo="Teste 2" subtitulo="subtitulo" />
        </Layout>
    )
}