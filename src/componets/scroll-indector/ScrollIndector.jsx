import { useEffect } from "react"
import { useState } from "react"
import './styles.css'
const ScrollIndector = ({ url }) => {
    const [data, setData] = useState([])
    const [scrollValue, setScrollValue] = useState(0)
    const fetchData = async (seturl) => {
        try {
            const response = await fetch(seturl)
            const data = await response.json()
            if (data && data.products && data.products.length > 0) {
                setData(data.products.map((product) => product.title))
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData(url)
    }, [url])
    const handleScroll = () => {

        const getScrolledHeight = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        setScrollValue(Math.floor((getScrolledHeight / height) * 100))
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <div className="text m-5 text-center">
                <h1>ScrollIndector</h1>
            </div>
            <div className="fixed-top " style={{ top: '70px' }}>
                <div className="scroll  w-100">
                    <div className="percent text-center"><h1>{scrollValue}%</h1></div>
                    <div className="scroll-bar" style={{
                        width: `${scrollValue}%`,
                        background: 'green'
                    }}>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="text-center mt-5">
                    {data && data.length > 0 ? data.map((pro, key) => <p key={key}>{pro}</p>) : null}
                </div>
            </div>
        </>
    )
}

export default ScrollIndector