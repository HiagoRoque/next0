import useSWR from 'swr'
import {useState} from 'react'
import {useForm} from 'react-hook-form'


export function TheForm({url, acao}){
    const{register, handleSubmit, formState:{errors}} = useForm();

    return(
        <div>
            <form className = 'form-search-movie' onSubmit={handleSubmit(acao)}>
                <label htmlFor="titleSearchString">Filtro de titulo</label>

                <input id="titleSearchString" {...register("titleSearchString", {required: true, minLength: 2})} type="text" autoComplete="true" placeholder='Título'></input>
                {errors.titleSearchString && <span>Insira o mínimo de caracteres</span>}

                <input id="typeSearchString" {...register("typeSearchString", {required: true, minLength: 5, maxLength: 5})} type="text" autoComplete="true" placeholder='Tipo'></input>
                {errors.typeSearchString && <span> Insira a palavra movie </span>}

                <button type='submit'>{url === '' ? 'Mostrar' : 'Ocultar'}</button>

            </form>
        </div>
    )
}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>falha na pesquisa</div>)
    if (data.Search === '' ) return (<div>carregando...</div>)
    if (data.Response === 'False') return (<div>Não existe</div>)

    return (
        <div>
            { data.Search.map( (m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>  ) }            
        </div>
    )

}



export function TheLink({url, handler}){

    return (
        <div>
            <a href="/movies3.js" onClick={handler}> {url === '' ? 'Mostrar' : 'Ocultar'} </a>
        </div>
    )
}

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:'', typeSearchString:''});
    const {data, error} = useSWR(state.url, async () => {
        
        if (!state.url || !state.titleSearchString || !state.typeSearchString) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='' || state.typeSearchString === '') return {Search:''}
        const res = await fetch(`${state.url}/?apikey=b50d4423&s=${state.titleSearchString}&y=${state.yearSearchNumber}`)
        const json = await res.json();

        return json

    })


    const onClickHandler = () => {
        
        const t = document.querySelector('#titleSearchString').value
        const s = document.querySelector('#typeSearchString').value

        if (state.url === '') {
            setState({url:'https://www.omdbapi.com',titleSearchString:t, typeSearchString:s})
        }
        else{
            setState({url:'',titleSearchString: state.titleSearchString, typeSearchString: state.typeSearchString})
        }
    }



    return (
        <div>
            <TheForm filtro={'Titulo'} url={state.url} acao={onClickHandler}/>
            <TheMovies data={error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}