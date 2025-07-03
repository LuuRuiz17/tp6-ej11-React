import Titulo from "./Titulo";
import ListaNoticias from "./ListaNoticias";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form"

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

  const {
    register,
    handleSubmit,
  } = useForm()

  useEffect(() => {
    obtenerNoticia();
  }, []);

  const filtrarRespuesta = async (dato) => {
    console.log(dato.filtro);
    const respuesta = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_22b6a37c0d77443c9b412c3fa017180e&language=es&category=${dato.filtro}`);
    if(respuesta.status === 200){
      const noticia = await respuesta.json();
      setNoticia(noticia.results[0]);
    }
  }

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
      <Form className="container" onSubmit={handleSubmit(filtrarRespuesta)}>
        <Row>
          <Col xs={11}>
            <Form.Select aria-label="Default select example"{...register('filtro')}>
              <option>Buscar por categoría</option>
              <option value="sports">Deportes</option>
              <option value="science">Ciencia</option>
              <option value="technology">Tecnología</option>
              <option value="world">Mundial</option>
              <option value="food">Comida</option>
              <option value="crime">Policiales</option>
            </Form.Select>
          </Col>
          <Col className="d-flex flex-column justify-content-center me-auto" xs={1}>
            <button type="submit"><i className="bi bi-search mx-auto"></i></button>
          </Col>
        </Row>
      </Form>
      <ListaNoticias noticia={noticia}></ListaNoticias>
    </>
  )
}

export default App
