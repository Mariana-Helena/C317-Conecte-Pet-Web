import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import background from "../../images/Wallpaper.jpg";
import useStyles from './styles.js';
import logo from "../../images/Logo.png";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from '@material-ui/core/Snackbar';

export default function Login() {
    /** 
    ***********************************************
                    VARIÁVEIS
    ***********************************************
    **/
    /** 
    * CSS
    */
    const styles = useStyles();
    /** 
    * Navegação pelas páginas
    */
    const history = useHistory();
    /** 
    * Hook form (validação e submit)
    */
    const defaultValues = {
        email: null,
        senha: null,
    };
    const { register, handleSubmit, errors, reset } = useForm({ defaultValues });
    /**
    * Messagens de erro/sucesso
    */
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    /** 
    ***********************************************
                    FUNÇÕES
    ***********************************************
    **/
    /**
    * Navegação entre as páginas (altera a rota)
    */
    function handleClickMenuItem(rota) {
        history.push(rota);
    }
    /**
    * GET para buscar os pets no banco
    * Parâmetro: email
    */
    const onSubmit = (data) => {
        axios.get(`/login/${data.email}/${data.senha}`).then(res => {
            if (res.data.express.length !== 0) {
                localStorage.setItem('user', JSON.stringify(res.data.express[0]));
                handleClickMenuItem('/pets')
            }
            else {
                setOpenSnackbar(true);
                setMessage('Email e/ou senha incorretos!');
                setSuccess(false);
            }

        })
            .catch(err => {
                setOpenSnackbar(true);
                setMessage('Erro no login!');
                setSuccess(false);
            });
    };
    /** 
    ***********************************************
                INTERFACE/COMPONENTES
    ***********************************************
    **/
    return (
        <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className={success ? styles.success : styles.error}>
                    {message}
                </div>
            </Snackbar>
            <div style={{ height: '90px' }}> </div>
            <Container className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <img src={logo} className={styles.logo} />
                    <div className={styles.tituloDiv}>
                        <span className={styles.titulo}> Login </span>
                    </div>
                    <TextField id="email" label="E-mail" size="small" variant="outlined"
                        className={styles.textfield}
                        name='email'
                        inputRef={register({
                            required: "This is a required field",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address.",
                            },
                        })}
                        helperText={<FormHelperText error={errors?.email} className={styles.helperText}>
                            {errors?.email && errors?.email?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                errors?.email && errors?.email?.type === "pattern" ?
                                    "Email inválido."
                                    :
                                    ''
                            }
                        </FormHelperText>}
                    />
                    <TextField id="outlined-basic" label="Senha" size="small" variant="outlined"
                        type="password" className={styles.textfield}
                        name='senha'
                        inputRef={register({
                            required: "This is a required field",
                        })}
                        helperText={<FormHelperText error={errors?.senha} className={styles.helperText}>
                            {errors?.senha && errors?.senha?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                ''
                            }
                        </FormHelperText>}
                    />
                    <Button className={styles.button} disabled={true}>
                        Esqueceu a senha?
                </Button>
                    <Button variant="contained" className={styles.buttonContainedBlue}
                        onClick={handleSubmit(onSubmit)} type='submit'>
                        Entrar
                </Button>
                    <Button variant="contained" className={styles.buttonContainedGray} onClick={() => handleClickMenuItem('/usuario/cadastro')}>
                        Cadastrar
                </Button>
                </form>
            </Container>
            <div style={{ height: '150px' }}> </div>
        </div>
    );
}