import React, { useState, useEffect } from "react";

import "./page9styles.css";

function Page9() {
    const [dummyJsonData, setDummyJsonData] = useState([])
    const [count, setCount] = useState(0)

    const [diasbleLoadMoreButton, setDisableLoadMoreButton] = useState(false);


    async function fetchApi() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=25&skip=${
                count === 0 ? 0 : count * 25
            }`)
            const result = await response.json()
            setDummyJsonData([...dummyJsonData, ...result.products])
            console.log(result)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchApi();
        console.log("useEffect")
    }, [count])

    useEffect(() => {
        dummyJsonData.length === 100 ? setDisableLoadMoreButton(true) : setDisableLoadMoreButton(false)
    }, [dummyJsonData])


    return(
        <div className="page-9-container">
            <h1>Page 9</h1>
            <div className="product-container">
                {
                    dummyJsonData.map((data) => {
                        return(
                            <div key={data.id}>
                                <p>{data.title}</p>
                                <img src={data.thumbnail} alt={data.title} /><span>only {data.stock} left!</span>
                            </div>
                        )
                    })
                }
            </div>
            <button disabled={diasbleLoadMoreButton} onClick={() => setCount(count + 1)}>Load More</button>
            {
                diasbleLoadMoreButton ? <span>Limit reached</span> : null
            }
        </div>
    )
}

export default Page9;