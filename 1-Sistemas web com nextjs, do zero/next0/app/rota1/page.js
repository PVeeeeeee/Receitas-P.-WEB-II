import { Cabecalho, Rodape } from '../page.js';

export default function PaginaRota1() {
    return (
        <div>
            <Cabecalho />

            <main>
                <h1>
                    Página da Rota 1
                </h1>
                <p>
                    Este é o conteúdo da nova página, agora com cabeçalho e rodapé reutilizados!
                </p>
            </main>
            
            <Rodape />
        </div>
    )
}