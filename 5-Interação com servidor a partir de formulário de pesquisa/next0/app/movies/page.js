import { redirect } from 'next/navigation';

async function buscarFilmes(titleSearchKey, year) {
    const searchTerm = titleSearchKey
    let url = `http://www.omdbapi.com/?apikey=f11eb984&s=${searchTerm}`;

    if (year) {
        url += `&y=${year}`;
    }

    try {
        const resposta = await fetch(url);
        return await resposta.json();
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        return { Search: [] };
    }
}

export default async function Home({ searchParams }) {
    const titleSearchKey = searchParams.titleSearchKey;
    const year = searchParams.year;
    const data = await buscarFilmes(titleSearchKey, year);

    async function handleSearch(formData) {
        'use server';

        const formTitle = formData.get('titleSearchKey');
        const formYear = formData.get('year'); 

        const params = new URLSearchParams();
        if (formTitle) {
            params.set('titleSearchKey', formTitle);
        }
        if (formYear) {
            params.set('year', formYear);
        }

        redirect(`/movies?${params.toString()}`);
    }

    return (
        <div>
            <h1>Busca de Filmes 🎬</h1>

            <form action={handleSearch} style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="titleInput">Título</label>
                    <input
                        id="titleInput"
                        name="titleSearchKey" 
                        type="text"
                        defaultValue={titleSearchKey} 
                        placeholder="Nome do filme"
                        style={{ padding: '8px' }}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="yearInput">Ano</label>
                    <input
                        id="yearInput"
                        name="year" 
                        type="text"
                        defaultValue={year}
                        placeholder="Ano de lançamento"
                        style={{ padding: '8px', width: '140px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer', alignSelf: 'flex-end' }}>
                    Pesquisar
                </button>
            </form>

            <hr style={{ margin: '20px 0' }} />

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