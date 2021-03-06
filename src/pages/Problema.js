import React, { useState, useEffect } from 'react';
import showdown from 'showdown';
import TextBox from "../components/TextBox"
import { useParams } from 'react-router-dom';
import { Form, Button } from "react-bootstrap"
import Loading from '../components/Loading';
import "../style/problema.scss"

const fourSpaces = "    " //used for handling tabs

function MessageWrapper({ className="", children }) {
    return (
        <div className={"border p-0 mt-3 text-center " + className}>
            {children}
        </div>
    )
}

function EvaluationDisplay({ evaluation, tests }) {
    let backgroundClass = ""
    if (evaluation.evaluated && evaluation.solved === tests)
        backgroundClass = "solved"

    console.log(evaluation, tests)

    if (evaluation.evaluating) {
        return (
            <MessageWrapper>
                <p>se evalueaza</p> 
            </MessageWrapper>
        )
    }

    if (!evaluation.evaluated)
        return <></>

    if (evaluation.error !== "")
        return (
            <MessageWrapper>
                <p>{evaluation.error}</p>
            </MessageWrapper>
        )

    if (evaluation.solved === tests)
        return (
            <MessageWrapper className={backgroundClass}>
                <p>s-a evaluat: {evaluation.solved}/{tests}</p> 
            </MessageWrapper>
        )

    return (
        <MessageWrapper>
            {evaluation.testsSolved.map((value, key) => {
                return (
                    <div className={"pt-2 p-2 " + (value ? "solved" : "wrong")}>
                        <p key={key}>{key+"."} Test {value ? "corect" : "gresit"}</p>
                    </div>
                )
            })}
        </MessageWrapper>
    )
}

function EvaluateButton({evaluation, setEvaluation, id, source, disabled=false, children}) {
    const btnOnClick = () => {
        let newEvaluation = { ...evaluation }
        newEvaluation.evaluating = true
        setEvaluation(newEvaluation)

        fetch("/api/evaluate", {
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
                newEvaluation.testsSolved = evalResp.testsSolved
                newEvaluation.error = evalResp.error
                setEvaluation(newEvaluation)
            })
    }

    if (disabled)
        return (
            <Button 
                variant="dark" className="dark-btn mt-3 mx-auto" 
                size="lg" onClick={btnOnClick} disabled
            >
                {children}
            </Button>
        )
    return (
        <Button 
            variant="dark" className="dark-btn mt-3 mx-auto" 
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
        testsSolved: [],
        error: ""
    })

    //URLs declared as constants for better access
    const searchParams = new URLSearchParams({ hash: id })
    const infoURL = (
        "/api/getProblemInformations?" + searchParams
    )
    const statementURL = (
        "/api/getProblemStatement?" + searchParams
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

            <EvaluationDisplay evaluation={evaluation} tests={Number(info.tests)} />
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