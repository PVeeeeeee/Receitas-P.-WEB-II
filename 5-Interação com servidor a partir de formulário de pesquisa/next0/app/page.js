import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>
                Viva Santana!
            </h1>
            <p>Esta é a página inicial.</p>
            <Link href="/novarota">Ir para Nova Rota (Link do Next)</Link> <br/><br/>
            <a href="/novarota">Ir para Nova Rota (Jeito antigo)</a>
        </div>
    )
  }