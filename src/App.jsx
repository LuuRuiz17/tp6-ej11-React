import Titulo from "./Titulo";
import ListaNoticias from "./ListaNoticias";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
  } = useForm()

  useEffect(() => {
    obtenerNoticia();
    console.log("Lo que tiene noticias: ");
    console.log(noticias);
  }, []);

  const [noticias, setNoticias] = useState([])

  const filtrarRespuesta = async (dato) => {
    console.log(dato.filtro);
    const respuesta = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_22b6a37c0d77443c9b412c3fa017180e&language=es&category=${dato.filtro}`);
    if (respuesta.status === 200) {
      const noticia = await respuesta.json();
      setNoticias(noticia.results);
    }
  }

  const obtenerNoticia = async () => {
    try {
      const respuesta = await fetch('https://newsdata.io/api/1/latest?apikey=pub_22b6a37c0d77443c9b412c3fa017180e&country=ar&language=es');
      if (respuesta.status === 200) {
        const noticia = await respuesta.json();
        console.log("Resultado de noticias results")
        console.log(noticia.results);
        setNoticias(noticia.results);
      }
    } catch (error) {
      console.error("Error al obtener la noticia:", error);
    }
  };

  return (
    <>
      <Titulo></Titulo>
      <Form className="container" onSubmit={handleSubmit(filtrarRespuesta)}>
        <Row className="mx-auto">
          <Col xs={12} className="d-flex">
            <Form.Select aria-label="Default select example"{...register('filtro')}>
              <option>Buscar por categoría</option>
              <option value="sports">Deportes</option>
              <option value="science">Ciencia</option>
              <option value="technology">Tecnología</option>
              <option value="world">Mundial</option>
              <option value="food">Comida</option>
              <option value="crime">Policiales</option>
            </Form.Select>
            <button type="submit" className="btn-form ms-auto"><i className="bi bi-search ms-2"></i></button>
          </Col>
        </Row>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </>
  )
}

export default App
