import { Card } from "react-bootstrap";

const Noticia = () => {
    return (
        <Card className="w-25">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" alt="imagen de la Noticia"/>
            <Card.Body>
                <Card.Text>Fuente</Card.Text>
                <Card.Title>Título</Card.Title>
                <Card.Text>Descripción de la noticia..</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Botón</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Noticia;