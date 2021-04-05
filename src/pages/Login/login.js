import React from 'react';
import background from "../../images/Wallpaper.jpg";
import logo from "../../images/Logo.png";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

export default function Login() {

    const styles = useStyles();

    return (
        <div style={{ 
            backgroundImage: `url(${background})` ,
            width:'100%',
            height:'auto',
            backgroundPosition: 'center',
            backgroundSize: 'cover'}}>
                <div style={{height:'100px'}}> </div>
                <Container maxWidth="sm"  style={{ 
                    width:'500px',
                    height:'500px',
                    backgroundColor:'white',
                    padding: 25
                    }}>
                <img src={logo} style={{width:'150px',  display: 'block',
                marginLeft: 'auto', marginRight: 'auto'}}/> 
                <div style={{display: 'block',
                marginLeft: 'auto', marginRight: 'auto', textAlign:'center'}}>
                    <span className={styles.titulo}> Login </span>
                </div>
                
                <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                <TextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>

                <Button >
                    Esqueceu a senha?
                </Button>
                <Button variant="contained" color="primary">
                    Entrar
                </Button>
                <Button variant="contained" >
                    Cadastrar
                </Button>
                </Container>
                <div style={{height:'150px'}}> </div>
        </div>
    );
}