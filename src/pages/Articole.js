import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import showdown from 'showdown';
import TextBox from "../components/TextBox";
import { Container } from "react-bootstrap"
import Loading from "../components/Loading"
import ListItem from "../components/ListItem"
import "../style/articole.scss"

const buttonText = "Citeste"
export default function Articole() {
    let article = useParams()

    if (article.id)
        return <Article id={article.id} />
    return <ArticlesList />
}

function Article({ id }) {
    const [content, setContent] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch(`/articles/${id}.md`)
            .then(resp => resp.text())
            .then(data => {
                const converter = new showdown.Converter()
                setContent(converter.makeHtml(data))
            })
            .catch(err => setError(err))
    }, [])

    if (!content)
        return <Loading />
    if (error)
        return <h2 className="text-center mt-3">{error}</h2>
    return (
        <TextBox className="mt-3">
            <span className="article" dangerouslySetInnerHTML={{__html: content}} />
        </TextBox>
    )
}

function ArticlesList() {
    const [articles, setArticles] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch("/articles/articles.json")
            .then(resp => resp.json())
            .then(data => setArticles(data))
            .catch(err => setError(err))
    }, [])

    if (!articles)
        return <Loading />
    
    if (error)
        return <h2 className="text-center mt-3">{error}</h2>

    return (
        <Container className="p-3" fluid>
            <h2 className="text-decoration-underline">Lista de articole:</h2>
            <span className="articles">
                {articles.map((value, key) => {
                    return (
                        <ListItem 
                            key={key}
                            title={value.title} 
                            description={value.description}
                            href={`/articole/${value.content}`}
                            buttonText={buttonText}
                        />
                    )
                })}
            </span>
        </Container>
    )
}