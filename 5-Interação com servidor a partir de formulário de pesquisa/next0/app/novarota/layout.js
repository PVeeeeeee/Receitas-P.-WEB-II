export default function NovaRotaLayout({ children }) {
  return (
    <section style={{ 
        border: '2px solid green', 
        padding: '20px', 
        borderRadius: '8px' 
    }}>
      <h2>Você está na Seção "Nova Rota"</h2>
      <p>Este layout se aplica a todas as páginas dentro de /novarota.</p>
      <hr />
      
      {children}
    </section>
  )
}