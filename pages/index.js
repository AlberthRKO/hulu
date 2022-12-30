import { Html } from "next/document";
import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

// recibimos results del await y se lo mandamos a nav para llenarlo
export default function Home({ results }) {
  // console.log(results);
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  // nos dara la posicion y el nombre del genero
  const genre = context.query.genre;

  // hacemos la peticion a la api
  const respuesta = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  ).then((res) => res.json());
  // console.log(request[genre]?.url);

  return {
    props: {
      results: respuesta.results,
    },
  };
}
