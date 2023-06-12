import Link from "next/link";

export default function Inicio() {
  // deve retornar null caso não tenha um conteudo definido no return
  return (
            <div>
                <ul>
                    <li><Link href="/estiloso">Estiloso</Link></li>
                    <li><Link href="/exemplo">Exemplo</Link></li>
                </ul>
            </div>
        )
}
