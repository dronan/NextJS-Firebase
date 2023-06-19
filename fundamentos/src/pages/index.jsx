import Navegador from "../components/Navegador";

export default function Inicio() {
  // deve retornar null caso não tenha um conteudo definido no return
  return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
                height: "100vh"
            }}>
                    <Navegador destino="/estiloso" texto="Estiloso" cor="red" />
                    <Navegador destino="/exemplo" texto="Exemplo" />
                    <Navegador destino="/jsx" texto="JSX" />
                    <Navegador destino="/navegacao" texto="Navegacao 01" cor="green" />
                    <Navegador destino="/cliente/123" texto="Navegacao 02" cor="blue" />
                    <Navegador destino="/doisparametros/filial-x/12345" texto="Navegacao 02.1" cor="blue" />
                    <Navegador destino="/estado" texto="Componente com estado" cor="pink" />
                    <Navegador destino="/integracao_1" texto="Componente de integracao" cor="violet" />
            </div>
        )
}
