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
            </div>
        )
}
