
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Mapa from '../components/Mapa';
import Header from '../components/Header';

export default function Inicio() {
  return (
    <>
      <Header />
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