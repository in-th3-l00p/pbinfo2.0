import TextBox from "../components/TextBox"
import { useParams } from 'react-router-dom';
import { Form, Button } from "react-bootstrap"
import "../style/problema.scss"

export default function Problema() {
    let { id } = useParams()
    return (
        <TextBox className="my-3">
            <h2 className="text-center text-decoration-underline">Titlu</h2>
            <div className="statement">
                <h3>Cerinta:</h3>
                <p>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <span>Animi rem repellendus hic autem?</span>
                    <span>Necessitatibus modi rerum nesciunt quae?</span>
                    <span>Neque nisi libero magni facilis.</span>
                    <span>Quisquam quos numquam aliquam doloribus.</span>
                    <span>Perferendis, ad aliquid. Mollitia, ipsum!</span>
                    <span>Ducimus debitis voluptatibus delectus nisi.</span>
                    <span>Veritatis quaerat in pariatur ipsa.</span>
                    <span>Quos voluptatibus quasi delectus obcaecati?</span>
                    <span>Sed voluptate sint minus maiores.</span>
                    <span>Lorem ipsum dolor sit amet.</span>
                    <span>Animi rem repellendus hic autem?</span>
                    <span>Necessitatibus modi rerum nesciunt quae?</span>
                    <span>Neque nisi libero magni facilis.</span>
                    <span>Quisquam quos numquam aliquam doloribus.</span>
                    <span>Perferendis, ad aliquid. Mollitia, ipsum!</span>
                    <span>Ducimus debitis voluptatibus delectus nisi.</span>
                    <span>Veritatis quaerat in pariatur ipsa.</span>
                    <span>Quos voluptatibus quasi delectus obcaecati?</span>
                    <span>Sed voluptate sint minus maiores.</span>
                </p>
            </div>
            <div className="restrictions">
                <h3>Restrictii:</h3>
                <ul>
                    <li><pre>{"n < 100"}</pre></li>
                    <li><pre>{"0 <= a[i] <= 2^32 - 1"}</pre></li>
                </ul>
            </div>

            <div className="code">
                <h3>Sursa:</h3>
                <Form.Control 
                    as="textarea" className="codeInput" rows={12}
                />
            </div>

            <div className="evaluate text-center mt-3">
                <Button variant="dark" className="darkBtn darkerBtn" size="lg">Evalueaza</Button>
            </div>
        </TextBox>
    )
}