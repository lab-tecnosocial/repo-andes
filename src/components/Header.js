import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Home, Map } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <AppBar position="relative" sx={{ alignItems: 'center' }} >
                <Toolbar sx={{ height: '6vh' }}>
                    <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ mr: 2 }}
                        >
                            <Home />
                        </IconButton>
                    </RouterLink>
                    <Typography variant="h5" color="#e1b093" align="center" >
                        <b>Festividades en los Andes</b>
                    </Typography>
                    <RouterLink to="/mapa" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            sx={{ ml: 2 }}
                        >
                            <Map />
                        </IconButton>
                    </RouterLink>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header