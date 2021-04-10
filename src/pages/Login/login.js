import React from 'react';
import background from "../../images/Wallpaper.jpg";
import logo from "../../images/Logo.png";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom'

export default function Login() {

    const styles = useStyles();
    const history = useHistory();

    function handleClickMenuItem(rota) {
        history.push(rota);
    }

    return (
        <div className={styles.background} style={{backgroundImage: `url(${background})`}}>
            <div style={{height:'90px'}}> </div>
            <Container maxWidth="sm" className={styles.container}>
                <img src={logo} className={styles.logo}/> 
                <div className={styles.tituloDiv}>
                    <span className={styles.titulo}> Login </span>
                </div>
                
                <TextField id="outlined-basic" label="E-mail" size="small" fullWidth  variant="outlined" className={styles.textfield}/>
                <TextField id="outlined-basic" label="Senha" size="small" fullWidth variant="outlined" type="password" className={styles.textfield}/>

                <Button className={styles.button}>
                    Esqueceu a senha?
                </Button>
                <Button variant="contained" className={styles.buttonContainedBlue} onClick={()=>handleClickMenuItem('/pets')}>
                    Entrar
                </Button>
                <Button variant="contained" className={styles.buttonContainedGray}>
                    Cadastrar
                </Button>
            </Container>
            <div style={{height:'150px'}}> </div>
        </div>
    );
}