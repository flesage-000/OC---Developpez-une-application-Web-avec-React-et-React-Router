import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './pages/Home/App';
import About from './pages/About/About';
import Kasa from './pages/Kasa/Kasa';
import Error from './pages/Error/Error';

function Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Kasa/:kasaId" element={<Kasa />} />
            <Route path="/About" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routing;