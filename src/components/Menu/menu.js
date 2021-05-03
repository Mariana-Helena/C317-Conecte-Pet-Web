import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PetsIcon from '@material-ui/icons/Pets';
import EventIcon from '@material-ui/icons/Event';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from "../../images/Logo.png";
import useStyles from './styles';
import { useTheme } from '@material-ui/core/styles';
import { FaSyringe } from "react-icons/fa";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useLocation } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const tema = createMuiTheme({
  palette: {
    primary: { main: '#1C587C' },
    secondary: { main: '#7A96AC' }
  },
});

function MenuSite(props) {
  const { window } = props;
  const styles = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const history = useHistory();

  const [pets, setPets] = useState(false);
  const [vacinas, setVacinas] = useState(false);
  const [consultas, setConsultas] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPhoto, setUserPhoto] = useState();
  const [vet, setVet] = useState(false);

  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const usuario = localStorage.getItem('user');
    if (usuario) {
      const veterinario = (JSON.parse(usuario).ehveterinario);
      let rota = location.pathname;
      if (rota === '/pets' || rota == '/pets/cadastro') {
        if (veterinario) handleClickMenuItem('vacinas');
        else setPets(true);
      }
      else if (rota === '/vacinas' || rota === '/vacinas/registro') {
        if (!veterinario && rota === '/vacinas/registro') {
          handleClickMenuItem('vacinas');
        }
        setVacinas(true);
      }
      else if (rota === '/consultas' || rota === '/consultas/agendamento') {
        if (!veterinario && rota === '/consultas/agendamento') {
          handleClickMenuItem('consultas');
        }
        setConsultas(true);
      }
      else {
        history.push("/");
      }
    }
  });

  useEffect(() => {
    getUser();
  }), [localStorage.getItem('user')];

  const handleClickArrowDown = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseArrowDown = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const getUser = () => {
    const usuario = localStorage.getItem('user');
    if (usuario) {
      setUserName(JSON.parse(usuario).nome);
      setVet(JSON.parse(usuario).ehveterinario);
      var blobStr = (JSON.parse(usuario).foto);
      if(blobStr){
        var url = blobStr;
        fetch(url).then((res) => {
          setUserPhoto(res.url)
        });
      }
      

    }
    else {
      history.push("/");
    }
  }

  const handleClickMenuItem = (rota) => {
    history.push("/" + rota);
    if (rota === 'pets') setPets(true);
    else if (rota === 'vacinas') setVacinas(true);
    else if (rota === 'consultas') setConsultas(true);
  }

  const drawer = (
    <div>
      <img src={logo} className={styles.logo} />
      <List>
        <Divider />
        {!vet && (
          <ListItem button onClick={() => handleClickMenuItem('pets')} selected={pets} classes={{ selected: styles.selectedItem }}>
            <ListItemIcon> <PetsIcon className={pets ? styles.itemSelected : styles.item} /> </ListItemIcon>
            <span className={pets ? styles.textSelected : styles.text}>  Pets</span>
          </ListItem>
        )}
        <Divider />
        <ListItem button onClick={() => handleClickMenuItem('vacinas')} selected={vacinas} classes={{ selected: styles.selectedItem }}>
          <ListItemIcon> <FaSyringe className={vacinas ? styles.vaccineIconSelected : styles.vaccineIcon} /> </ListItemIcon>
          <span className={vacinas ? styles.textSelected : styles.text}>   Carteira de vacinação</span>
        </ListItem>
        <Divider />
        <ListItem button onClick={() => handleClickMenuItem('consultas')} selected={consultas} classes={{ selected: styles.selectedItem }}>
          <ListItemIcon> <EventIcon className={consultas ? styles.itemSelected : styles.item} /> </ListItemIcon>
          <span className={consultas ? styles.textSelected : styles.text}>   Consultas </span>
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={styles.root}>
      <CssBaseline />
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.barraSuperior}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={styles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={styles.user}>
            {userPhoto?
              <img src={userPhoto} className={styles.userIcon}/> 
              :
            <AccountCircleIcon className={styles.userIcon} />
            }
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseArrowDown}
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={() => logout()} >Sair</MenuItem>
            </Menu>
            <Typography variant="h6" noWrap className={styles.userName} >
              {userName}
            </Typography>
            <KeyboardArrowDownIcon className={styles.userMenu} onClick={handleClickArrowDown} />

          </div>
        </Toolbar>
      </AppBar>
      <nav className={styles.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            styles={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            styles={{
              paper: styles.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        <MuiThemeProvider theme={tema}>{props.children}</MuiThemeProvider>

      </main>
    </div>
  );
}

export default MenuSite;