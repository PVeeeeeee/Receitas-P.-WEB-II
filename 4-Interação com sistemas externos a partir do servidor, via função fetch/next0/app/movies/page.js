import SearchForm from './SearchForm';

async function buscarFilmes(titleSearchKey, year, mediaType) {
    
    let url = `http://www.omdbapi.com/?apikey=f11eb984&s=${titleSearchKey || 'matrix'}`;

    if (year) {
        url += `&y=${year}`;
    }
    if (mediaType) {
        url += `&type=${mediaType}`;
    }

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        return dados;
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        return { Search: [] };
    }
}

export default async function Home({ searchParams }) { 
    
    const { titleSearchKey, year, mediaType } = searchParams;
    
    const data = await buscarFilmes(titleSearchKey, year, mediaType);

    return (
        <div>
            <h1>Busca de Filmes 🎬</h1>
            <SearchForm />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {data.Search && data.Search.length > 0 ? (
                    data.Search.map((m, index) => (
                        <div key={`${m.imdbID}-${index}`} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '200px', textAlign: 'center' }}>
                            <img
                                src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/200x300.png?text=Sem+Imagem'}
                                alt={`Pôster do filme ${m.Title}`}
                                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                            <h3 style={{ fontSize: '1rem', margin: '0 0 5px 0' }}>{m.Title}</h3>
                            <p style={{ margin: '0' }}>{m.Year}</p>
                        </div>
                    ))
                ) : (
                    <p>Nenhum filme encontrado. Faça uma nova busca!</p>
                )}
            </div>
        </div>
    );
}