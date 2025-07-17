export function Cabecalho() {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
      <h2>Meu Site Incrível</h2>
    </header>
  );
}

export function Rodape() {
  return (
    <footer style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '10px', textAlign: 'center' }}>
      <p>© 2025 - Todos os direitos reservados.</p>
    </footer>
  );
}


export default function Home() {
  return (
    <div>
      <Cabecalho />

      <main>
        <div>Menu principal</div>
        <div>
          <h1>
            Viva Santana!
          </h1>
        </div>
      </main>
      
      <Rodape />
    </div>
  )
}