import React, { useState, useEffect } from 'react'
import { Container } from "react-bootstrap"
import Loading from '../components/Loading'
import ListItem from '../components/ListItem'
import "../style/probleme.scss"

function Problem({title="titlu", description="descriere", hash="#"}) {
    return (
        <ListItem 
            title={title} 
            description={description} 
            href={`/problema/${hash}`}
            buttonText="Rezolva"
        />
    )
}

export default function Probleme() {
    const [problems, setProblems] = useState(undefined)
    const [error, setError] = useState(undefined)
    useEffect(() => {
        fetch("http://localhost:5000/getProblemHashes")
            .then(resp => resp.json())
            .then(async (hashes) => {
                let problemsList = [] //auxiliary list
                for (let i = 0; i < hashes.length; i++) {
                    //getting the url with the query search params
                    let url = "http://localhost:5000/getProblemInformations" 
                    url += "?" + new URLSearchParams({hash: hashes[i]})

                    //fetchinnnn
                    let resp = await fetch(url)
                    if (!resp.ok)
                        continue
                    
                    //building the objecttt
                    let info = await resp.json()
                    info.hash = hashes[i]
                    problemsList.push(info)
                }

                setProblems(problemsList)
            })
            .catch(err => setError(err))
    }, [])

    if (error)
        return (
            <h1 className="mt-5 text-center font-weight-bold">
                Eroare in afisarea problemelor
            </h1>
        )
    if (!problems)
        return <Loading />

    return (
        <Container className="p-3" fluid>
            <h2 className="text-decoration-underline">Lista de probleme:</h2>
            <span className="problemList">
                {problems.map((value, key) => (
                    <Problem 
                        key={key} title={value.title}
                        description={value.description}
                        hash={value.hash}
                    />
                ))}
            </span>
        </Container>
    )
}