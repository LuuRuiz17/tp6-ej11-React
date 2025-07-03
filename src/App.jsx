import Titulo from "./Titulo";
import Busqueda from "./Busqueda"
import ListaNoticias from "./ListaNoticias";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from "react";

// const obtenerNoticia = async () => {

//   try {
//     // console.log("Aquí tengo que traer la noticia")
//     const respuesta = await fetch('https://newsdata.io/api/1/latest?apikey=pub_22b6a37c0d77443c9b412c3fa017180e');
//     if (respuesta.status === 200) {
//       // console.log("Sí responde")
//       // console.log(respuesta)
//       const noticia = await respuesta.json();
//       // console.log("datos de la noticia");  
//       // console.log(noticia);
//       // console.log("Uno de los elementos del array: ");
//       // console.log(noticia.results[0]);  
//       setNoticia(noticia.results[0]);
//     }
//   } catch (error) {
//     console.error();
//   }
// }



function App() {

    const [noticia, setNoticia] = useState({});

  useEffect(() => {
    obtenerNoticia();
  }, []);

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch('https://newsdata.io/api/1/latest?apikey=pub_22b6a37c0d77443c9b412c3fa017180e&country=ar&language=es');
      if (respuesta.status === 200) {
        const noticia = await respuesta.json();
        setNoticia(noticia.results[0]);
      }
    } catch (error) {
      console.error("Error al obtener la noticia:", error);
    }
  };

  return (
    <>
      <Titulo></Titulo>
      <Busqueda></Busqueda>
      <ListaNoticias noticia={noticia}></ListaNoticias>
    </>
  )
}

export default App
