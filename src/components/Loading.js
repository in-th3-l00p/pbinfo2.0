import { Container, Spinner } from "react-bootstrap"

export default function Loading() {
    return (
        <Container className="mt-5">
            <h2 className="text-center font-weight-bold text-decoration-underline">
                Se incarca...
            </h2>
            <span style={{
                display: "table",
                position: "relative",
                margin: "0 auto",
                top: "calc(50% - 24px)"
            }}>
                <Spinner 
                    variant="light" animation="border" 
                    size="lg" role="status"
                >
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </span>
        </Container>
    )
}