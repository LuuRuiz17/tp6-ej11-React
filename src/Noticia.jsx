import { Card } from "react-bootstrap";

const Noticia = ({noticia}) => {
    return (
        <Card className = "card h-100">
            <Card.Img variant="top" src={noticia.image_url} alt="imagen de la Noticia"/>
            <Card.Body className="bg-info">
                <Card.Text>{noticia.creator}</Card.Text>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text className="cortar-texto">{noticia.description}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={noticia.link}>Ver más</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default Noticia;