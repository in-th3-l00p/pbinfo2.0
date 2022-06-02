import { Carousel } from "react-bootstrap"
import TextBox from "../components/TextBox"
import "../style/acasa.scss"

const carouselImages = [
    {
        src: "1.webp",
        caption: "pbinfo, dar nu pica ✅"
    }, 
    {
        src: "2.webp",
        caption: "aici nu citim carti 📖"
    }
]

export default function Acasa() {
    return (
        <div>
            <header>
                <Carousel className="carousel">
                    {carouselImages.map((carouselImage, index) => (
                        <Carousel.Item>
                            <img key={index} src={"carousel/" + carouselImage.src} alt="carousel" />
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
        </div>
    )
}