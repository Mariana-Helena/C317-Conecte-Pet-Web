import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import MenuSite from '../../components/Menu/menu';
import bannerCadastro from "../../images/banner_cadastro.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useHistory } from 'react-router-dom';
import { Controller, useForm } from "react-hook-form";
import Snackbar from '@material-ui/core/Snackbar';


export default function Pets() {
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
        especie: null,
        raca: null,
        idade: null,
        peso: null,
        sexo: "fêmea",
        observacao: ''
    };
    const { register, handleSubmit, errors, control, reset } = useForm({ defaultValues });
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
    
    useEffect(() => {
       
    });

    /**
    * POST para enviar o cadastro da vacina para o banco
    * Parâmetro: data (data,pet_id,vacina,fabricante,tipo,observacao)
    */
    const onSubmit = (data) => {
        const user = localStorage.getItem('user'); 
        const usuario = (JSON.parse(user).email);
        data.usuario = usuario;
        console.log(data)
        axios.post('/pets/cadastro', data)
            .then(() => {
                setOpenSnackbar(true);
                setMessage('Pet cadastrado!');
                setSuccess(true);
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
        <MenuSite>
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
                <div className={styles.banner} style={{backgroundImage: `url(${bannerCadastro})`}}>     
                    <span className={styles.titulo}> Cadastrar Pet</span>
                    <br/>
                    <Avatar className={styles.avatar}></Avatar>
                    <input accept="image/*" className={styles.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton className={styles.camera} aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>

                <div className={styles.campos}>
                    <TextField
                        id="nome"
                        label="Nome do Pet"
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
                                "Por favor, digite o nome do Pet"
                            }
                        </FormHelperText>}
                    />
                    <FormControl variant="outlined" className={styles.formControl} size='small'>
                        <InputLabel id="demo-simple-select-outlined-label">Espécie</InputLabel>
                        <Controller
                            as={<Select
                                labelId="demo-simple-select-outlined-label"
                                id="especie"
                                label="Espécie"
                            >
                                <MenuItem value={"cachorro"}>Cachorro</MenuItem> 
                                <MenuItem value={"gato"}>Gato</MenuItem>     
                            </Select>}
                            name="especie"
                            control={control}
                            errors={errors.especie}
                            ref={
                                register('especie', {
                                    required: true
                                })
                            }
                            inputRef={register}
                            control={control}
                            rules={{ required: true }}
                        />
                        <FormHelperText error={errors?.especie} className={styles.helperText2}>
                            {errors?.especie && errors?.especie?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                "Por favor, selecione a espécie pet"
                            }
                        </FormHelperText>
                    </FormControl>
                    <TextField
                        id="raca"
                        label="Raça"
                        variant="outlined"
                        size="small"
                        className={styles.textFieldRaca}
                        name='raca'
                        errors={errors.raca}
                        inputRef={register({
                            required: "This is a required field",
                        })}
                        helperText={<FormHelperText error={errors?.raca} className={styles.helperText}>
                            {errors?.raca && errors?.raca?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                "Por favor, digite a raça do Pet"
                            }
                        </FormHelperText>}
                    />
                    <br/>
                    <div className={styles.container}>
                        <TextField
                            id="idade"
                            label="Idade"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name='idade'
                            errors={errors.idade}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.idade} className={styles.helperText}>
                                {errors?.idade && errors?.idade?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite a idade do Pet"
                                }
                            </FormHelperText>}
                        />
                        <TextField
                            id="peso"
                            label="Peso"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name='peso'
                            errors={errors.peso}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.peso} className={styles.helperText}>
                                {errors?.peso && errors?.peso?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite o peso do Pet"
                                }
                            </FormHelperText>}
                        />
                        <Controller
                            as={
                                <RadioGroup row className={styles.radioGroup}>
                                    <FormControlLabel
                                        value="fêmea"
                                        control={<Radio color='primary' />}
                                        label="Fêmea"
                                    />
                                    <FormControlLabel
                                        value="macho"
                                        control={<Radio color='primary' />}
                                        label="Macho"
                                    />
                                </RadioGroup>
                            }
                            name="sexo"
                            control={control}
                            defaultValue={'fêmea'}
                        />
                    </div>
                    <br/>
                    <br/>
                    <FormControl variant="outlined" className={styles.formControl} size='small'>
                        <Controller
                            as={
                                <TextareaAutosize aria-label="minimum height" placeholder="Observações:"
                                    className={styles.textArea}
                                />}
                            name="observacao"
                            control={control}
                            ref={register()}
                            inputRef={register}
                            defaultValue={''}
                        />
                    </FormControl>
                    <br/>
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={handleSubmit(onSubmit)} color='primary' type='submit'>
                        Cadastrar
                    </Button>
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={() => handleClickMenuItem('/pets')} color='secondary'>
                        Voltar
                    </Button>
                </div>
            </form> 
            

        </MenuSite>
    );
}