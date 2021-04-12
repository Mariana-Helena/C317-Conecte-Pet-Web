import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import logo from "../../images/Logo.png";
import bannerCadastro from "../../images/banner_cadastroUser.png";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Pets() {

    const styles = useStyles();

    const history = useHistory();

    const [usuario, setUsuario] = useState();

    useEffect(() => {
       
    });

    function handleClickMenuItem(rota) {
        history.push(rota);
    }

    const handleUsuario = (value) => {
        setUsuario(value);
    }

    return (
        <div>
            <form  noValidate autoComplete="off">
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

                <div className={styles.campos}>
                    <TextField
                        id="outlined-helperText"
                        label="Nome"
                        helperText="Por favor, digite o seu nome"
                        variant="outlined"
                        size="small"
                        className={styles.textField}
                    />
                    <RadioGroup row aria-label="gender" name="gender1" value={usuario}
                        onChange={(value)=>handleUsuario(value)} className={styles.radioGroup}>
                        <FormControlLabel value="0" control={<Radio  color='gray'/>} label="Dono de Pet" />
                        <FormControlLabel value="1" control={<Radio color='gray'/>} label="Veterinário" />
                        <FormHelperText className={styles.helpertext}>Você é:</FormHelperText>
                    </RadioGroup>
                    <br/>
                    <br/>
                    <div className={styles.container}>
                        <TextField
                            id="outlined-helperText"
                            label="Telefone"
                            helperText="Por favor, digite o seu telefone"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                        />
                        <div></div>
                        <TextField
                            id="outlined-helperText"
                            label="Email"
                            helperText="Por favor, digite o seu email"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                        />
                        <div></div>
                        <TextField
                            id="outlined-helperText"
                            label="Senha"
                            helperText="Por favor, digite a seu senha"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="CRMV"
                            helperText="Por favor, digite o seu CRMV"
                            variant="outlined"
                            size="small"
                            className={styles.textFieldCRMV}
                        />
                    </div>
                    <Button variant="contained" className={styles.buttonContained} 
                        onClick={()=>handleCadastroVacina()} >
                        Cadastrar 
                    </Button>
                    <Button variant="contained" className={styles.buttonContainedC} 
                        onClick={()=>handleClickMenuItem('/')}>
                        Cancelar
                    </Button>
                </div>
            </form> 
        </div>
    );
}