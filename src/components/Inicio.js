import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from './Mapa';

export default function Inicio() {
  return (
    <>
      <AppBar position="relative" sx={{ alignItems: 'center' }} >
        <Toolbar sx={{ height: '6vh' }}>
          <Typography variant="h5" color="#e1b093" >
            <b>Festividades en los Andes</b>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Mapa />
      </main>
      <Box sx={{ height: '4vh' }}>
        <Typography variant="subtitle2" color="#e1b093" align="center" gutterBottom >
          Mapa de fotografías de festividades en los Andes
        </Typography>
      </Box>
    </>
  );
}