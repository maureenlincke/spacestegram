import React, { useEffect, useState } from "react";
import { fetchObjects } from "../api";

const Home = () => {
    const [page, setPage] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const data = await fetchObjects();

            setPage(data)
        }
        fetchData()
    })

    console.log("In component")

    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default Home