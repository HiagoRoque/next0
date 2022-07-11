export default function Movies({data}){

  return (

      <div>

          <div>
          

          {data.Search.map( (m) => <div>{m.Title} --- {m.Year} --- {m.Type} <img src={m.Poster}/></div>  )}               

          </div>

      </div>

  )

}



export async function getServerSideProps(context){

  const res = await fetch(`http://www.omdbapi.com/?apikey=b50d4423&s=hero`)

  const data = await res.json()

  return {

      props: {

          data

      }

  }

}