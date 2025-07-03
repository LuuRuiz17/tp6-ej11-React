import { Navbar, Container, Nav} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const BarraDeNavegacion = () => {
    return (
        <Navbar expand="lg" className="bg-dark-subtle py-3">
            <Container>
                <Navbar.Brand href="#home">Pacientes de Veterinaria<i className="bi bi-person-workspace text-info ms-2"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="text-info">Inicio</Nav.Link>
                        <Nav.Link href="#link" className="text-info">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarraDeNavegacion;