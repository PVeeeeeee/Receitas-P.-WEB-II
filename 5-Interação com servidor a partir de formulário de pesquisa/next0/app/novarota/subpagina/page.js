import { AvisoImportante } from '../page.js';

export default function MinhaSubPagina() {
    return (
        <div>
            <h1>Estou em uma Sub-Página!</h1>
            <p>Esta página é acessada pela URL /novarota/subpagina.</p>

            <AvisoImportante />
        </div>
    )
}