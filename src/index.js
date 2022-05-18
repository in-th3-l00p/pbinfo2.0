import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<h1>hello world!</h1>} />
                <Route path="test" element={<p>test</p>} />
            </Routes> 
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)