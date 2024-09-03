import useLocalStorage from "./useLocalStorage"
import './styles.css'

const LightDarkMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')
    const handleChangeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div className="light-dark-mode" data-theme={theme}>
            <div className="text-center"><h1 className={theme === 'light' ? 'text-dark' : 'text-light'}>Light&DarkMode</h1></div>
            <div className=" d-flex flex-column justify-content-center align-items-center ">
                <div className="container">
                    <p>hello world</p>
                    <button className="btn btn-danger" onClick={handleChangeTheme}>Dark mode</button>
                </div>
            </div>
        </div>
    )
}

export default LightDarkMode