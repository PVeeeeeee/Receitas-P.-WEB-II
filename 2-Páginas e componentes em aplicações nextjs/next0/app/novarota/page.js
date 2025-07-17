import { MariaPrea, MensagemPersonalizada } from "./componentes";

export function AvisoImportante() {
}

export default function NovaRotaHome() {
    return (
        <div>
            <h1>Nova Rota, Nova Página</h1>
            <MariaPrea />

            <hr />

            <MensagemPersonalizada 
                titulo="Aviso do Dia" 
                texto="Lembre-se de estudar React e Next.js!" 
            />

            <MensagemPersonalizada 
                titulo="Outra Mensagem" 
                texto="Componentes reutilizáveis são muito poderosos." 
            />
        </div>
    )
}