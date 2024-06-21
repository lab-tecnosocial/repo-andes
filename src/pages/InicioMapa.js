
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
    </>
  );
}