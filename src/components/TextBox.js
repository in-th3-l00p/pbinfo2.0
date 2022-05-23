import { Container } from "react-bootstrap"
import "../style/textbox.scss"

export default function TextBox({ className, children }) {
    return (
        <Container className={"textBox mx-auto " + className}>
            {children}
        </Container>
    )
}