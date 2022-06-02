import React, { useState, useEffect } from 'react';
import showdown from 'showdown';
import TextBox from "../components/TextBox"
import { useParams } from 'react-router-dom';
import { Form, Button, Container } from "react-bootstrap"
import Loading from '../components/Loading';
import "../style/problema.scss"

const fourSpaces = "    " //used for handling tabs

function MessageWrapper({ children }) {
    return (
        <div className="border mt-3 text-center">
            {children}
        </div>
    )
}

function EvaluationDisplay({ evaluation, tests }) {
    return (
        <>
            {evaluation.evaluating && (
                <MessageWrapper>
                    <p>se evalueaza</p> 
                </MessageWrapper>
            )} 
            {evaluation.evaluated && !evaluation.evaluating && (
                <MessageWrapper>
                    <p>s-a evaluat: {evaluation.solved}/{tests}</p> 
                </MessageWrapper>
            )}
        </>
    )
}

function EvaluateButton({evaluation, setEvaluation, id, source, disabled=false, children}) {
    const btnOnClick = () => {
        let newEvaluation = { ...evaluation }
        newEvaluation.evaluating = true
        setEvaluation(newEvaluation)

        fetch("http://localhost:5000/evaluate", {
            method: "post",
            body: JSON.stringify({
                hash: id,
                source: source
            })
        })
            .then(resp => resp.json())
            .then(evalResp => {
                let newEvaluation = { ...evaluation }
                newEvaluation.evaluating = false
                newEvaluation.evaluated = true
                newEvaluation.solved = evalResp.solved
                newEvaluation.error = evalResp.error
                setEvaluation(newEvaluation)
            })
    }

    if (disabled)
        return (
            <Button 
                variant="dark" className="darkerBtn mt-3 mx-auto" 
                size="lg" onClick={btnOnClick} disabled
            >
                {children}
            </Button>
        )
    return (
        <Button 
            variant="dark" className="darkerBtn mt-3 mx-auto" 
            size="lg" onClick={btnOnClick}
        >
            {children}
        </Button>
    )
}

export default function Problema() {
    let { id } = useParams()
    const [info, setInfo] = useState(undefined)
    const [statement, setStatement] = useState(undefined)
    const [error, setError] = useState(false)

    const [source, setSource] = useState("")
    const [evaluation, setEvaluation] = useState({
        evaluated: false,
        evaluating: false,
        solved: 0,
        error: ""
    })

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
                let converter = new showdown.Converter();
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

    console.log(evaluation)
    return (
        <TextBox className="my-3">
            <h2 className="text-center text-decoration-underline">{info.title}</h2>
            <div className="statement" dangerouslySetInnerHTML={{__html: statement}} />
            <div className="code">
                <h3>Sursa:</h3>
                <Form.Control 
                    as="textarea" className="codeInput" rows={12}
                    onChange={(event) => setSource(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Tab") {
                            event.preventDefault()
                            let start = event.target.selectionStart
                            let end = event.target.selectionEnd

                            //handling the spaces
                            event.target.value = (
                                event.target.value.substr(0, start) + fourSpaces + 
                                event.target.value.substr(end)
                            )

                            event.target.selectionStart = start + 4
                            event.target.selectionEnd = start + 4
                        }
                    }}
                />
            </div>

            <EvaluationDisplay evaluation={evaluation} tests={info.tests} />
            <div className="text-center">
                <EvaluateButton
                    evaluation={evaluation} 
                    setEvaluation={setEvaluation}
                    id={id} source={source}
                    disabled={evaluation.evaluating}
                >
                    Evalueaza
                </EvaluateButton>
            </div>
        </TextBox>
    )
}