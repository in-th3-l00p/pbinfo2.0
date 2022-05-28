import { Container, Button } from "react-bootstrap"

export default function ListItem({title, description, buttonText, href}) {
    return (
        <Container 
            className="border mb-3 d-flex" 
            style={{borderRadius: 15+"px"}} fluid
        >
            <div style={{width: 100+"%"}}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <Button 
                variant="dark" className="darkerBtn m-2"
                onClick={() => window.location = href}
            >
                {buttonText}
            </Button>
        </Container>
    )
}