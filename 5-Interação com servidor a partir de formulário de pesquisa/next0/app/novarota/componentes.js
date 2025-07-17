export function MariaPrea() {
    return (
        <h2>Morreu Maria Preá...</h2>
    )
}

export function MensagemPersonalizada(props) {
    return (
        <div style={{ border: '1px solid blue', padding: '15px', margin: '10px 0' }}>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}