import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import logo from "../../images/Logo.png";
import bannerCadastro from "../../images/banner_cadastroUser.png";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Controller, useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function CadastroUsuario() {
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
        nome: null,
        telefone: null,
        email: null,
        senha: null,
        crmv: null,
        ehveterinario: "false"
    };
    const { register, handleSubmit, errors, control, reset } = useForm({ defaultValues });
    const [ehveterinario, setEhvet] = useState(false);
    /**
    * Messagens de erro/sucesso
    */
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [email,setEmail] = useState('');
    /**
    * Arquivo de imagem
    */
    const [file, setFile] = useState();
    const [fileString, setFileString] = useState('');
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
    * Navegação entre as páginas (altera a rota)
    */
      function handleFoto(event) {        
        setFile(URL.createObjectURL(event.target.files[0]));

        var blob = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(blob); 
        reader.onloadend = function() {
            var base64data = reader.result;                
            setFileString(base64data);
        }
    }

    /**
    * POST para enviar o cadastro da vacina para o banco
    * Parâmetro: data (nome,telefone,email,senha,ehveterinario,crmv)
    */
    const onSubmit = (data) => {
    data.foto = fileString;
    axios.post('/usuario/cadastro', data)
        .then(() => {
            setOpenSnackbar(true);
            setMessage('Usuário cadastrado!');
            setSuccess(true);
            setFile();
            setFileString('');
            reset({})
        })
        .catch(err => {
            setOpenSnackbar(true);
            setMessage('Erro no cadastro!');
            setSuccess(false);
        });
    };
    /** 
    ***********************************************
                INTERFACE/COMPONENTES
    ***********************************************
    **/
    return (
        <div>
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
            <form  onSubmit={handleSubmit(onSubmit)}>
                <Toolbar className={styles.barraSuperior}> 
                    <img src={logo} className={styles.logo}/> 
                    <Typography variant="h6" noWrap className={styles.userName} color="white">
                    Cadastrar Usuário 
                    </Typography>            
                </Toolbar>

                <div className={styles.banner} style={{backgroundImage: `url(${bannerCadastro})`}}>
                    <br/>
                    {file?
                    <img src={file} className={styles.avatar}/>                    
                    :
                    <Avatar className={styles.avatar}></Avatar>
                    }
                    <input accept="image/*" className={styles.input}
                     id="icon-button-file" type="file" onChange={handleFoto}/>
                    <label htmlFor="icon-button-file">
                        <IconButton className={styles.camera} aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    
                </div>    
                <div className={styles.campos}>
                    <TextField
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        size="small"
                        className={styles.textField}
                        name='nome'
                        errors={errors.nome}
                        inputRef={register({
                            required: "This is a required field",
                        })}
                        helperText={<FormHelperText error={errors?.nome} className={styles.helperText}>
                            {errors?.nome && errors?.nome?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                "Por favor, digite o seu nome"
                            }
                        </FormHelperText>}
                    />
                    <Controller
                        as={
                            <RadioGroup row className={styles.radioGroup}>
                                <FormControlLabel
                                    value="false"
                                    control={<Radio color='primary' onClick={() => setEhvet(false)} />}
                                    label="Dono de Pet"
                                />
                                <FormControlLabel
                                    value="true"
                                    control={<Radio color='primary'onClick={() => setEhvet(true)}/>}
                                    label="Veterinário"
                                />
                            </RadioGroup>
                        }
                        name="ehveterinario"
                        control={control}
                        defaultValue={'false'}
                    />
                    <br/>
                    <br/>
                    <div className={styles.container}>
                        <TextField
                            id="telefone"
                            label="Telefone"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name='telefone'
                            errors={errors.telefone}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.telefone} className={styles.helperText}>
                                {errors?.telefone && errors?.telefone?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite o seu telefone"
                                }
                            </FormHelperText>}
                        />
                        <div></div>
                        <TextField
                            id="email"
                            label="Email"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            errors={errors.email}
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
                                        "Email inválido"
                                        :
                                        "Por favor, digite o seu email"
                                }
                            </FormHelperText>}
                        />
                        <div></div>
                        <TextField
                            type= 'password'
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name='senha'
                            errors={errors.senha}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.senha} className={styles.helperText}>
                                {errors?.senha && errors?.senha?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite a sua senha"
                                }
                            </FormHelperText>}
                        />
                        { ehveterinario && (
                            <TextField
                                id="crmv"
                                label="CRMV"
                                variant="outlined"
                                size="small"
                                className={styles.textFieldCRMV}
                                name='crmv'
                                errors={errors.crmv}
                                inputRef={register({
                                    required: "This is a required field",
                                })}
                                helperText={<FormHelperText error={errors?.crmv} className={styles.helperText}>
                                    {errors?.crmv && errors?.crmv?.type === "required" ?
                                        "Esse campo é obrigatório."
                                        :
                                        "Por favor, digite o seu CRMV"
                                    }
                                </FormHelperText>}
                            />
                            )    
                        }
                    </div>
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={handleSubmit(onSubmit)} color='primary' type='submit'>
                        Cadastrar
                    </Button>
                    <Button variant="contained" className={styles.buttonContainedC}
                        onClick={() => handleClickMenuItem('/')} color='secondary'>
                        Voltar
                    </Button>
                </div>
            </form> 
        </div>
    );
}