'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchForm() {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [mediaType, setMediaType] = useState('');

    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        if (title) {
            params.set('titleSearchKey', title);
        }
        if (year) {
            params.set('year', year);
        }
        if (mediaType) {
            params.set('mediaType', mediaType);
        }

        const queryString = params.toString();

        console.log('Redirecionando para:', `/movies?${queryString}`);

        router.push(`/movies?${queryString}`);
    };

    return (
        <form onSubmit={handleSearch} style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome do filme" style={{ padding: '8px' }} />
            <input type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Ano" style={{ padding: '8px', width: '80px' }} />
            <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} style={{ padding: '8px' }} >
                <option value="">Todos os Tipos</option>
                <option value="movie">Filme</option>
                <option value="series">Série</option>
                <option value="episode">Episódio</option>
            </select>
            <button type="submit" style={{ padding: '8px 12px', cursor: 'pointer' }}>Buscar</button>
        </form>
    );
}