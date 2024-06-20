import './App.css';
import Inicio from './components/Inicio';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


