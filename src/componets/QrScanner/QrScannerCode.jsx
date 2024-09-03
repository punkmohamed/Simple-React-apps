import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import jsQR from "jsqr";
import { Helmet } from 'react-helmet';
const QrScannerCode = () => {
    const [qrcode, setQrcode] = useState('');
    const [input, setInput] = useState('');
    const [scannedCode, setScannedCode] = useState('');
    const qrCodeRef = useRef(null);

    const handleGenreateQrCode = () => {
        setQrcode(input);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const imageData = e.target.result;
                scanQRFromImage(imageData);
            };
            reader.readAsDataURL(file);
        }
    };

    const scanQRFromImage = (imageData) => {
        const image = new Image();
        image.src = imageData;
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height);
            if (code) {
                setScannedCode(code.data);
            } else {
                alert("No QR code found.");
            }
        };
    };
    const handleDownload = () => {
        if (qrCodeRef.current) {
            const svgElement = qrCodeRef.current.querySelector('svg');
            if (svgElement) {
                const svgData = new XMLSerializer().serializeToString(svgElement);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();

                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);
                    const pngFile = canvas.toDataURL('image/png');
                    const link = document.createElement('a');
                    link.href = pngFile;
                    link.download = 'qrcode.png';
                    link.click();
                };

                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
            } else {
                console.error('SVG element not found');
            }
        } else {
            console.error('qrCodeRef is null');
        }
    };
    return (
        <>
            <Helmet>
                <title>Qr code</title>
                <meta name="description" content="This is a description of my page" />
            </Helmet>
            <div className="text-center">
                <h1>QR Code Generator & Scanner</h1>
            </div>
            <div className="d-flex justify-content-evenly">
                <div>
                    <div className="text-center d-flex flex-column justify-content-center align-items-center">
                        <input
                            className="form-control my-4 w-100 "
                            type="text"
                            placeholder="Enter text to generate QR code"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            disabled={input.trim() === ''}
                            className="btn btn-danger"
                            onClick={handleGenreateQrCode}
                        >
                            Generate Code
                        </button>
                    </div>
                    <div
                        className="text-center mt-3">
                        <div ref={qrCodeRef}>
                            <QRCode
                                id="qr-code"
                                value={qrcode}
                                size={300}
                                bgColor="#fff"
                            />
                        </div>
                        <button onClick={handleDownload} className="btn btn-primary mt-3">
                            Download QR Code
                        </button>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <h2>Scan a QR Code from Image</h2>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="form-control mt-3"
                    />
                    {scannedCode && (
                        <div className="mt-3" style={{ width: '300px' }}>
                            <h5 className="">Scanned Code:</h5>
                            <h1
                                className="text-success"
                                style={{
                                    width: '100%',
                                    overflowWrap: 'break-word'
                                }}
                            >
                                {scannedCode}
                            </h1>
                        </div>


                    )}
                </div>
            </div>
        </>
    );
}

export default QrScannerCode;
