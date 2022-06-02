import { Form, FloatingLabel, Button } from "react-bootstrap"
import TextBox from "../components/TextBox";

export default function Contact() {
    return (
        <TextBox className="mt-3">
            <h2 className="text-center text-decoration-underline">Trimite-ne un email</h2>
            <h6 className="text-center">Scrie nelamuririle tale in privinta platformei</h6>
            <Form>
                <FloatingLabel controlId="name" label="Numele tau" className="mb-3">
                    <Form.Control type="text" placeholder="Nume" />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Adresa ta de email" className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
                <FloatingLabel controlId="subject" label="Subiect" className="mb-3">
                    <Form.Control type="text" placeholder="Subiect" />
                </FloatingLabel>
                <FloatingLabel controlId="content" label="Continutul" className="mb-3">
                    <Form.Control as="textarea" placeholder="Content" style={{height: 350+"px"}} />
                </FloatingLabel>
                <div className="text-center">
                    <Button size="lg" variant="dark" className="darkerBtn">Trimite</Button>
                </div>
            </Form>
        </TextBox>
    )
}