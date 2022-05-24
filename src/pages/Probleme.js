import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../style/probleme.scss"

function Problem({title="Titlu", description="hello world!"}) {
    return (
        <Container className="problem border mb-3 d-flex" fluid>
            <div className="text"> 
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Button variant="dark" className="darkerBtn m-2">Rezolva</Button>
        </Container>
    )
}

export default function Probleme() {
    return (
        <Container className="p-3" fluid>
            <h2 className="text-decoration-underline">Lista de probleme:</h2>
            <span className="problemList">
                <Problem />
                <Problem />
                <Problem />
                <Problem />
                <Problem />
                <Problem />
            </span>
        </Container>
    )
}