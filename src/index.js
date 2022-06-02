import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Acasa from "./pages/Acasa";
import Probleme from "./pages/Probleme";
import Articole, { IntroducereProgramareDinamica, CautareBinara } from "./pages/Articole";
import Contact from "./pages/Contact";
import Problema from "./pages/Problema";
import "./style/globals.scss"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Acasa />} />
                    <Route path="/probleme" element={<Probleme />} />
                    <Route path="/articole">
                        <Route index element={<Articole />} />
                        <Route 
                            path="/articole/introducere-programare-dinamica" 
                            element={
                                <IntroducereProgramareDinamica />
                        } />
                        <Route
                            path="/articole/cautare-binara"
                            element={
                                <CautareBinara />
                        } />
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/problema/:id" element={<Problema />} />
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)