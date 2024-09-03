import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet';
import useAnimation from "../../hooks/useAnimation";
const RandomColor = () => {
    const [colorType, setColorType] = useState('hex')
    const [color, setColor] = useState('#000000')
    const { titleRef, scanContainerRef, qrContainerRef } = useAnimation()
    const randomColorMethod = (length) => {
        return Math.floor(Math.random() * length)
    }
    const changeColorRGB = () => {
        const r = randomColorMethod(256)
        const g = randomColorMethod(256)
        const b = randomColorMethod(256)
        setColor(`rgb(${r},${g},${b})`)
    }
    const changeColorHEX = () => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorMethod(hex.length)]
        }
        setColor(hexColor)
    }

    const colorHEX = () => {
        setColorType('hex')
    }

    const colorRGB = () => {
        setColorType('rgb')
    }

    useEffect(() => {
        if (colorType === 'hex') {
            changeColorHEX()
        } else {
            changeColorRGB()
        }

    }, [colorType])
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            background: color
        }}>
            <Helmet>
                <title>Random Color</title>
                <meta name="description" content="This is a description of my page" />
            </Helmet>
            <div className="text-center py-5 d-flex justify-content-evenly">
                <button ref={qrContainerRef} className="btn btn-primary" onClick={colorType === 'hex' ? changeColorHEX : changeColorRGB}>Generate Random Color</button>
                <button ref={titleRef} className="btn btn-danger" onClick={colorHEX}>Create HEX Color</button>
                <button ref={scanContainerRef} className="btn btn-success" onClick={colorRGB}>Create RGB Color</button>
            </div>
            <div ref={scanContainerRef} className="d-flex flex-row justify-content-evenly align-items-center fs-4 mt-5 text-light">
                <h3>{colorType === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
            </div>
            <div ref={qrContainerRef} className="text-center pt-5">
                <h1 style={{ fontSize: '150px' }}>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor