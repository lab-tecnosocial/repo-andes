import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{alignItems: 'center'}} >
        <Toolbar sx={{height: '6vh'}}>
          <Typography variant="h6" color="inherit" >
            <b>La Cocha de Antes</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Mapa />
      </main>
      <Box sx={{height: '4vh'}}>
          <Typography variant="subtitle2" color="inherit"   align="center" gutterBottom >
            Mapa de fotografías antiguas colorizadas con Inteligencia Artificial
          </Typography>
      </Box>
      </>
  );
}