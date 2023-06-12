import Link from 'next/link'

export default function Layout(props) {
    return (
        <div>
                <Link href="/">Voltar</Link>

                {/* props.children acessa o conteudo entre as tags <layout> conteudo </layout> */}
                {props.children}
        </div>
    )
}