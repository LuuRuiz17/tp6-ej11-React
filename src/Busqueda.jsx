import { Form, Row, Col} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Busqueda = () => {
    return (
        <Form className="container">
            <Row>
                <Col xs={11}>
                    <Form.Select aria-label="Default select example">
                        <option>Buscar por categoría</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col className="d-flex flex-column justify-content-center me-auto" xs={1}><i className="bi bi-search mx-auto"></i></Col>
            </Row>
        </Form>
    );
};

export default Busqueda;
