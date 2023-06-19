import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ExemploDoisParametros() {

    const router = useRouter()
    // cada parametro passado na url deve ser acessado pelo router.query
    // eles sao representados por um objeto javascript como nome de arquivo e pasta

    return (
        <Layout titulo="Navegação Dinâmica passando dois parametros">
            <span>Subparametro = {router.query.subparametro} </span>
            <span>[exemplodoisparametros] = {router.query.exemplodoisparametros} </span>
            </Layout>
    )
}