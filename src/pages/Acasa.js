import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Carousel, Button } from "react-bootstrap"
import TextBox from "../components/TextBox"
import "../style/acasa.scss"

function Article({text="❌", href="/", margin=true}) {
    const navigate = useNavigate()
    let marginClassName = "me-3"
    if (!margin)
        marginClassName = ""

    return (
        <Button 
            variant="dark" size="lg" 
            className={`article dark-btn d-flex ${marginClassName}`}
            onClick={() => navigate(href)}
        >
            <p>{text}</p>
        </Button>
    )
}

const articlesLimit = 6
function ArticlesList({className=""}) {
    const [articles, setArticles] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        fetch("/articles/articles.json")
            .then(resp => resp.json())
            .then(data => {
                if (data.length > articlesLimit) {
                    setArticles(data.slice(0, articlesLimit - data.length))
                    return
                }
                setArticles(data)
            })
            .catch(err => setError(err))
    }, [])

    return (
        <TextBox className={`p-3 ${className}`}>
            <h3>Ultimele articole:</h3>
            <div className="articles-list d-flex">
                {error && (
                    <h4 className="text-center disabled-text">
                        eroarea in afisarea articolelor
                    </h4>
                )}
                {articles && articles.map((value, key) => (
                    <Article 
                        text={value.summary}
                        href={`/articole/${value.content}`}
                        margin={!(key === articles.length)}
                    />
                ))}
            </div>
        </TextBox>
    )
}

const carouselImages = [
    {
        src: "1.webp",
        caption: "pbinfo, dar nu pica ✅"
    }, 
    {
        src: "2.webp",
        caption: "aici nu citim carti 📖"
    },
    {
        src: "3.webp",
        caption: "probleme de nota 10 catalin va lasa rece 💯"
    }
]

export default function Acasa() {
    return (
        <div>
            <header>
                <Carousel className="carousel">
                    {carouselImages.map((carouselImage, index) => (
                        <Carousel.Item key={index}>
                            <img src={"carousel/" + carouselImage.src} alt="carousel" />
                            <Carousel.Caption className="caption">
                                <h1>pbinfo2.0 🧠</h1>
                                <h2>{carouselImage.caption}</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </header>
            <TextBox className="mainTextBox mt-4">
                <h3 className="title text-center text-decoration-underline">
                   🖥️ O platforma care chiar merge! 🖥️
                </h3>
                <span>
                    <p>
                        Motivatia din spatele platformei provine
                        din faptul ca programa informaticii din liceu este mult prea teoretica.
                    </p>
                    <p>
                        Intradevar, ajuta pentru a dobandi o gandire algoritmica, insa nu 
                        este prea atragatoare.
                    </p>
                    <p>
                        Pe aceasta platforma vor aparea tutoriale si probleme din
                        parti ale informaticii care nu se predau in scoala (de exemplu programarea grafica).
                    </p>
                </span>
            </TextBox>
            <ArticlesList className="mt-3" />
        </div>
    )
}