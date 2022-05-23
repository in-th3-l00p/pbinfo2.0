import React from 'react';
import { useParams } from 'react-router-dom';

export default function Problema() {
    let { id } = useParams()
    return <h1>{id}</h1>
}