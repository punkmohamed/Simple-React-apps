
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollIndector from './componets/scroll-indector/ScrollIndector';
import QrScannerCode from './componets/QrScanner/QrScannerCode';
import { Route, BrowserRouter, Routes, } from 'react-router-dom';
import Home from './componets/Home';
import LightDarkMode from './componets/Light&DarkMode/Light&DarkMode';
import AutoCompleteSearch from './componets/auto-Complete-Search/autoComplete';
import RandomColor from './componets/random-color/randomColor';
import Header from './componets/animation/Header'
// import NavigationBar from './componets/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
      {/* <NavigationBar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="randomColor" element={<RandomColor />} />
        <Route path="/lightDarkMode" element={<LightDarkMode />} />
        <Route path="/autoCompleteSearch" element={<AutoCompleteSearch />} />
        <Route path="/qrScannerCode" element={<QrScannerCode />} />
        <Route path="/scrollIndector" element={<ScrollIndector url={'https://dummyjson.com/products?limit=100'} />} />
      </Routes>

    </BrowserRouter>
  )
}



export default App;
