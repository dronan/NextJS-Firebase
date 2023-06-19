import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function ClienteProCodigo() {

    const router = useRouter()
    console.log(router.query)
    return (
        <Layout titulo="Navegação Dinâmica">
            <span>Codigo = {router.query.codigo} </span>
            <span>Codigo = {router.query.codigo} </span>
            </Layout>
    )
}