import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home/Home';
import { Contacto } from './components/Contacto/Contacto'
import { Servicios } from './components/Servicios/Servicios';
import { Galeria } from './components/Galeria/Galeria';
import { AvisoLegal } from './components/Footer/AvisoLegal';
import { PoliticaPrivacidad } from './components/Footer/PoliticaPrivacidad';
import { PoliticaPrivacidadFormulario } from './components/Contacto/Formulario/PoliticaPrivacidadFormulario';
import { PoliticaCookies } from './components/Footer/PoliticaCookies';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='galería' element={<Galeria />} />
          <Route path='servicios' element={<Servicios />} />

          <Route path='avisoLegal' element={<AvisoLegal />} />
          <Route path='politicaPrivacidad' element={<PoliticaPrivacidad />} />
          <Route path='politicaPrivacidadFormulario' element={<PoliticaPrivacidadFormulario />} />
          <Route path='politicaCookies' element={<PoliticaCookies />} />
        </Route>
      </Routes>
      <Toaster position='top-center' />
    </div>
  );
}

export default App;
