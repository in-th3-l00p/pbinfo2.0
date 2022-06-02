import { Container, Button } from "react-bootstrap"
import Gist from "react-gist"
import TextBox from "../components/TextBox"
import ListItem from "../components/ListItem"
import "../style/articole.scss"

const buttonText = "Citeste"
export default function Articole() {
    return (
        <Container className="p-3" fluid>
            <h2 className="text-decoration-underline">Lista de articole:</h2>
            <span className="articole">
                <ListItem 
                    title="Introducere in programare dinamica" 
                    description="Explicarea pe scurt a tehnicii de proiectare a algorimilor numita programarea dinamica" 
                    href="/articole/introducere-programare-dinamica"
                    buttonText={buttonText}
                />
                <ListItem 
                    title="Cautarea binara"
                    description="Explicarea algoritmului de cautare"
                    href="/articole/cautare-binara"
                    buttonText={buttonText}
                />
            </span>
        </Container>
    )
}

export function IntroducereProgramareDinamica() {
    return (
        <TextBox className="mt-3">
            <h2 className="text-center text-decoration-underline font-weight-bold">
                Introducerea in programarea dinamica
            </h2>
            <p>
                Este o metoda de elaborare a algoritmilor, in care problema data este
                descompusa in subprobleme, iar solutia optima a problemei depinde de 
                solutiile optime ale subproblemelor sale. Subproblemele problemei date
                nu sunt independente, ci se suprapun, astfel o abordare prin metoda
                "Divide et impera" ar fi neeficienta, intrucat s-ar ajunge de repetate
                ori la rezolvarea a aceleiasi subprobleme.
            </p>
            <br />
            <p className="text-decoration-underline">
                Rezolvarea unei probleme prin programare dinamica 
                presupune urmatorii pasi:
            </p>
            <ul>
                <li><p>Se indentifica subproblemele problemei date</p></li>
                <li>
                    <p>
                        Se alege o structura de date pentru a se retine
                        solutiile subproblemelor (ex: un tablou bidimensional)
                    </p>
                </li>
                <li>
                    <p>
                        Se determina solutia optima, prin rezolvarea recurenta a
                        subproblemelor in ordinea crescatoare a dimensiunii lor.
                    </p>
                </li>
            </ul>
            <br />
            <p className="text-decoration-underline">
                Exemple de probleme care se pot rezolva prin programarea dinamica:
            </p>
            <p>Sirul lui fibonacci provine din urmatoare relatie de recurenta:</p>
            <img className="articolImg" src="../fibonacci-definitie.png" />
            <p>Imaginea urmatorului arbore arata modul in care se afla al 5-lea din sir:</p>
            <img className="articolImg" src="../fibonacci-programare-dinamica.png" />
            <p>
                Dupa cum se poate observa, pentru aflarea celui de al 5-lea termen din sir
                a fost nevoie sa fie calculat de doua ori al treilea termen din sir. Astfel,
                pentru optimizarea rezolvarii se poate salva solutia celui de al 3-lea termen
                din sir intr-o structura de date (ex: hashmap) si sa fie refolosita, fara a
                fi nevoie ca aceasta subproblema sa fie rezolvata din nou.
            </p>
        </TextBox>
    )
}

export function CautareBinara() {
    return (
        <TextBox className="mt-3">
            <h2 className="text-decoration-underline text-center">Cautarea binara</h2>
            <p>
                Cautarea binara este un algoritm de cautare folosit pentru 
                a gasi un element intr-un tablou unidimensional sortat.
            </p>
            <p>
                Valoarea cautata este comparata cu cea a elementului din mijlocul 
                listei. Daca e egala cu cea a acelui element, cautarea se termina.
                Daca e mai mare, algoritmul se reia de la mijlocul listei pana la
                sfarsit, iar daca e mai mica se reia pentru elementele de la inceptul
                listei pana la mijloc.
            </p>
            <p>Algoritmul are complexitate logaritmica, adica O(log2 n)</p>
            <Gist id="786a3dc32e53ba84378155ddd9cc809a" />
        </TextBox>
    )
}