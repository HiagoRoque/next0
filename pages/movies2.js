import useSWR from 'swr'
import { useRouter } from 'next/router'

export default function Movies2(){

    const router = useRouter()
    const {movieID} = router.query
    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=b50d4423&s=${movieID}`, fetcher)    

    if (error) return <div>falha na requisição</div>
    if (!data) return <div>carregando</div>

    return (

        <div> {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- {m.Type} <img width={150} height={200} src={m.Poster}/></div>  )} </div>

    )    

}



async function fetcher(url) {

    const res = await fetch(url);
    const json = await res.json();
    return json;

}