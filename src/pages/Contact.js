import TextBox from "../components/TextBox";

export default function Contact() {
    return (
        <TextBox className="mt-3">
            <h2 className="text-center text-decoration-underline">Informatii de contact</h2>
            <p>Email: emailadministrator@test.com</p>
            <p>Discord: test#6969</p>
            <img className="mx-auto d-block" alt="hacking meme" src="haxxorMeme.gif"/>
        </TextBox>
    )
}