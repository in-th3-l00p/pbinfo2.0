import { Navbar, Container, Nav } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"

export default function NavBar() {
    const location = useLocation().pathname
    let iconSrc = ""

    //se numara "/"-urile
    let count = 0
    for (let i = 0; i < location.length; i++)
        if (location[i] === '/')
            count++
    
    for (let i = 0; i < count; i++)
        iconSrc += "../"
    iconSrc += "icon.png"

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img 
                        src={iconSrc} alt="icon"
                        width={40} height={40} 
                        className="me-3"
                    />
                    pbinfo2.0
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="nav-collpase" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">acasa</Nav.Link>
                        <Nav.Link href="/probleme">probleme</Nav.Link>
                        <Nav.Link href="/contact">contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
}