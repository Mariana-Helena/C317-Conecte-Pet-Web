import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import logo from "../../images/Logo.png";
import bannerCadastro from "../../images/banner_cadastroUser.png";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';

export default function Pets() {

    const styles = useStyles();

    const history = useHistory();


    const Box = styled('div')(compose(spacing, palette));

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    useEffect(() => {
       
    });

    function handleClickMenuItem(rota) {
        history.push("/"+rota);
    }

    return (
        <div>
            <Toolbar className={styles.barraSuperior}> 
                <img src={logo} className={styles.logo}/> 
                <Typography variant="h6" noWrap className={styles.userName} color="white">
                Cadastrar Usuário 
                </Typography>            
            </Toolbar>

            <div className={styles.banner} style={{backgroundImage: `url(${bannerCadastro})`}}>
                <br/>
                <Avatar className={styles.avatar}></Avatar>
                <IconButton className={styles.camera}>
                    <PhotoCamera />
                </IconButton>
            </div>    

            <div className={styles.petDiv}>
                <form  noValidate autoComplete="off">
                    <TextField className={styles.nomeUser} id="outlined-basic" label="Nome" variant="outlined"  helperText="Por favor, digite o seu nome" />
                    <TextField className={styles.telUser} id="outlined-basic" label="Telefone" variant="outlined"  helperText="Por favor, digite o seu telefone" />
                    <TextField className={styles.emailUser} id="outlined-basic" label="Email" variant="outlined"  helperText="Por favor, digite o seu email" />
                    <TextField className={styles.senhaUser} id="outlined-basic" label="Senha" variant="outlined"  helperText="Por favor, digite a sua senha" />
                    <FormLabel component="legend" className={styles.typePerson}>Você é:</FormLabel>
                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} name="Veterinario"/>}
                            label="Veterinário" className={styles.user}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} name="DonoPet" />}
                            label="Dono de pet" className={styles.vet}
                        />
                    </FormGroup>
                    <TextField className={styles.crmv} id="outlined-basic" label="CRMV" variant="outlined"  helperText="Por favor, digite o seu CRMV" />
                    <Button variant="contained" className={styles.buttonContainedBlue}>
                        Cadastrar
                    </Button>
                    <Button variant="contained" className={styles.buttonContainedBlueC}>
                        Cancelar
                    </Button>
                </form> 
            </div>

        </div>
    );
}