import React, { useState, useEffect } from 'react';
import showdown from 'showdown';
import TextBox from "../components/TextBox"
import { useParams } from 'react-router-dom';
import { Form, Button, Container, Spinner } from "react-bootstrap"
import Loading from '../components/Loading';
import "../style/problema.scss"

function EvaluationDisplay({ evaluation, tests }) {
    console.log(evaluation)
    if (evaluation.error)
        return (
            <Container className="mx-3 bg-danger border" fluid>
                <p className="text-center font-weight-bold">
                    evaluarea nu a fost posibila, probabil o eroare de compilare
                </p>
            </Container>
        )
    return (
        <Container className="mx-3 border" fluid>
            {
                evaluation.state ? (
                    <p className="text-center font-weight-bold">{evaluation.solved}/{tests}</p>
                ) : (
                    <span>
                        <p className="text-center">se evalueaza</p>
                    </span>
                )
            }
        </Container>
    )
}

export default function Problema() {
    let { id } = useParams()
    const [info, setInfo] = useState(undefined)
    const [statement, setStatement] = useState(undefined)
    const [error, setError] = useState(false)

    const [source, setSource] = useState("")

    const [evaluating, setEvaluating] = useState(false)
    const [evaluated, setEvaluated] = useState({ state: false, error: "", solved: 0 })

    //URLs declared as constants for better access
    const searchParams = new URLSearchParams({ hash: id })
    const infoURL = (
        "http://localhost:5000/getProblemInformations?" + searchParams
    )
    const statementURL = (
        "http://localhost:5000/getProblemStatement?" + searchParams
    )

    //fetchinggg
    useEffect(() => {
        //grabbing informations and statement
        fetch(infoURL)
            .then(resp => resp.json())
            .then(info => setInfo(info))
            .catch(err => setError(err))
        fetch(statementURL)
            .then(resp => resp.text())
            .then(statement => {
                //parsing the markdown
                var converter = new showdown.Converter();
                setStatement(converter.makeHtml(statement))
            })
            .catch(err => {console.log(err); setError(err)})
    }, [])

    if (error)
        return (
            <h1 className="mt-5 text-center font-weight-bold">
                Eroare in afisarea problemelor
            </h1>
        )
    if (!info || !statement)
        return <Loading />

    console.log(evaluated)
    return (
        <TextBox className="my-3">
            <h2 className="text-center text-decoration-underline">{info.title}</h2>
            <div className="statement" dangerouslySetInnerHTML={{__html: statement}} />
            <div className="code">
                <h3>Sursa:</h3>
                <Form.Control 
                    as="textarea" className="codeInput" rows={12}
                    onChange={(event) => setSource(event.target.value)}
                />
            </div>

            <div className="evaluate text-center mt-3">
                {!evaluating ? (
                    <Button 
                        variant="dark" className="darkBtn darkerBtn" 
                        size="lg" onClick={() => {
                            setEvaluating(true)
                            fetch("http://localhost:5000/evaluate", {
                                method: "post",
                                body: JSON.stringify({
                                    hash: id,
                                    source: source
                                })
                            })
                                .then(resp => resp.json())
                                .then(evaluation => {
                                    setEvaluated({
                                        state: true, 
                                        error: evaluation.error, 
                                        solved: evaluation.solved
                                    })
                                })
                        }}
                    >
                        Evalueaza
                    </Button>
                ) : (
                    <EvaluationDisplay 
                        evaluation={evaluated}
                        tests={info.tests} 
                    />
                )
                }
            </div>
        </TextBox>
    )
}