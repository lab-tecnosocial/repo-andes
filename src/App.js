import './App.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import InicioMapa from './pages/InicioMapa';
import Portada from './pages/Portada';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#b92a49',
      },
    },
    typography: {
      fontFamily: 'Bungee Inline'
    }
  }
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/mapa" element={<InicioMapa />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;


