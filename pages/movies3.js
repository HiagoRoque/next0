import useSWR from 'swr'
import { useState } from 'react'

export default function Movies3() {

    const [url, setUrl] = useState('')
    const result = useSWR(url, theFetcher)
    const [input, setInput] = useState('')

    const onClickHandler = (e) => {

        e.preventDefault()

        if (url === '') setUrl(`http://www.omdbapi.com/?apikey=b50d4423&s=${input}`)

        else setUrl('')
    }

    return (

        <div>

            <div style={{ marginBottom: 30 }}>
                <h4>Digite o nome do filme</h4>
                <input type="text" id="filme" style={{ marginBottom: 10 }}></input>

                <button style={{ margin: 10 }} onClick={() => setInput(document.getElementById("filme").value)}>Buscar</button>
            </div>
            <TheLink url={url} handler={onClickHandler}/>
            <TheMovies data={result.error ? { error: 'Erro na pesquisa' } : result.data ? result.data : { Search: '' }} show={url !== ''} />

        </div>
    )
}


export function TheMovies({ data, show }) {

    if (!data.Search) return (<div></div>)
    if (!show) return (<div></div>)
    if (data.error) return (<div>falha na requisição</div>)
    if (data.Search === '') return (<div>carregando...</div>)

    const [urlMovie, setUrlMovie] = useState('')

    const movie = useSWR(urlMovie, theFetcher)

    const showMovie = (Poster) => {
        setUrlMovie(`http://www.omdbapi.com/?apikey=b50d4423&s=${Poster}`)
    }

    return (

        <div>

            <div style={{ margin: 100 }}>{movie.data ? <TheMovie data={movie.data} error={movie.error} /> : ''}</div>

            {data.Search.map((m, i) =>
                <div key={i}><div style={{ cursor: 'pointer' }} onClick={() => { window.location.href = "/movieclient?id=" + m.Poster }}>{m.Title} --- {m.Year}
                </div>
                    <button onClick={() => showMovie(m.Poster)} style={{ marginBottom: 50, cursor: 'pointer' }}>Mostrar</button>
                </div>
            )}

        </div>

    )

}

export function TheMovie({ data, error }) {

    if (error) return <div>falha na requisição</div>
    if (!data) return <div>carregando</div>

    return (

        <div>

            <div>{data.Title} --- {data.Year} --- <img width={150} height={200} src={data.Poster} /></div>

        </div>

    )
}

export function TheLink({ url, handler }) {

    return (

        <div>

            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>

        </div>

    )
}

async function theFetcher(url) {

    if (url === null || url === '') return { Search: '' }
    const res = await fetch(url);
    const json = await res.json();
    return json;

}