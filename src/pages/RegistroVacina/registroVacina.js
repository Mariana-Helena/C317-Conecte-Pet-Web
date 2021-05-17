import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import 'date-fns';
import useStyles from './styles.js';
import bannerVacinacao from "../../images/banner_vacinacao.png";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import MenuSite from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

export default function RegistroVacina() {
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
    const hoje = new Date();
    const defaultValues = {
        email: null,
        pet: null,
        vacina: null,
        fabricante: null,
        observacao: '',
        data: hoje,
        tipo: 'aplicada'
    };
    const { register, handleSubmit, errors, control, reset } = useForm({ defaultValues });
    /**
    * Messagens de erro/sucesso
    */
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    /**
    * Email do dono do pet p/ realizar a busca
    */
    const [email, setEmail] = useState('');
    /**
    * Vetor com os pets encontrados
    */
    const [pets, setPets] = useState([]);
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
    * Apaga os pets buscados e libera o campo email
    */
    const handleClear = () => {
        setPets([]);
    };
    /**
    * Verifica se o email é válido para fazer a busca no banco.
    * Caso seja, chama a api.
    */
    const handleSearch = () => {
        const regexp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (regexp.test(email)) {
            callApi();
        }
    };
    /**
    * GET para buscar os pets no banco
    * Parâmetro: email
    */
    const callApi = async () => {
        axios.get(`/vacinas/registro/${email}`).then(res => {
            if (res.data.express.length !== 0) {
                setOpenSnackbar(true);
                setMessage('Pet encontrado!');
                setSuccess(true);
                setPets(res.data.express);
            }
            else {
                setOpenSnackbar(true);
                setMessage('Nenhum pet encontrado!');
                setSuccess(false);
                setPets([]);
            }

        })
            .catch(err => {
                setOpenSnackbar(true);
                setMessage('Erro na busca!');
                setPets([]);
                setSuccess(false);
            });
    };
    /**
    * POST para enviar o cadastro da vacina para o banco
    * Parâmetro: data (data,pet,vacina,fabricante,tipo,observacao)
    */
    const onSubmit = (data) => {
        const usuario = localStorage.getItem('user'); 
        const crmv = (JSON.parse(usuario).crmv);
        data.crmv = crmv;
        data.data = new Date(data.data).toLocaleDateString();
        axios.post('/vacinas/registro', data)
            .then(() => {
                setOpenSnackbar(true);
                setMessage('Vacinação registrada!');
                setSuccess(true);
                setPets([]);
                reset();
                
            })
            .catch(err => {
                setOpenSnackbar(true);
                setMessage('Erro no registro!');
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
                id="snackbar"
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.banner} style={{ backgroundImage: `url(${bannerVacinacao})` }}>
                    <span className={styles.titulo}> Registrar vacinação</span>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <FormControl variant="outlined" className={styles.formControl} size='small'>
                            <Controller
                                initialFocusedDate={hoje}
                                defaultValue={hoje}
                                as={
                                    <KeyboardDatePicker
                                        className={styles.calendario}
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        KeyboardButtonProps={{
                                            style: { color: 'white' }
                                        }}
                                        InputProps={{ disableUnderline: true, className: styles.data }}
                                    />}
                                name="data"
                                control={control}
                                errors={errors.data}
                                ref={
                                    register('data', {
                                        required: true
                                    })
                                }
                                inputRef={register}
                                control={control}
                                rules={{ required: true }}
                            />
                        </FormControl>
                    </MuiPickersUtilsProvider>
                </div>
                <div className={styles.campos} >
                    <TextField
                        disabled={pets.length !== 0}
                        id="email"
                        label="Email do dono do pet"
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
                                    "Por favor, digite o email do dono do pet"
                            }
                        </FormHelperText>}
                    />
                    <FormControl variant="outlined" className={styles.formControl} size='small'>
                        <InputLabel id="demo-simple-select-outlined-label">Pet</InputLabel>
                        <Controller
                            as={<Select
                                disabled={pets.length === 0}
                                labelId="demo-simple-select-outlined-label"
                                id="pet"
                                label="Pet"
                            >
                                {pets.map((pet, index) =>
                                    <MenuItem value={{id: pet._id, nome: pet.nome, dono: pet.usuario}}> {pet?.nome}</MenuItem>
                                )}
                            </Select>}
                            name="pet"
                            control={control}
                            errors={errors.pete}
                            ref={
                                register('pet', {
                                    required: true
                                })
                            }
                            inputRef={register}
                            control={control}
                            rules={{ required: true }}
                        />
                        <FormHelperText error={errors?.pet} className={styles.helperText2}>
                            {errors?.pet && errors?.pet?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                "Por favor, selecione o pet"
                            }
                        </FormHelperText>
                    </FormControl>
                    <Button id="search" onClick={handleSearch} ><SearchIcon color='primary' /></Button>
                    <Button  id="clear" onClick={handleClear}><ClearIcon color='primary' /></Button>
                    <br />
                    <div className={styles.container}>
                        <TextField
                            id="vacina"
                            label="Vacina"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name='vacina'
                            errors={errors.vacina}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.vacina} className={styles.helperText}>
                                {errors?.vacina && errors?.vacina?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite o nome da vacina"
                                }
                            </FormHelperText>}
                        />
                        <TextField
                            id="fabricante"
                            label="Fabricante"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                            name="fabricante"
                            errors={errors.fabricante}
                            inputRef={register({
                                required: "This is a required field",
                            })}
                            helperText={<FormHelperText error={errors?.fabricante} className={styles.helperText}>
                                {errors?.fabricante && errors?.fabricante?.type === "required" ?
                                    "Esse campo é obrigatório."
                                    :
                                    "Por favor, digite o nome da vacina"
                                }
                            </FormHelperText>}
                        />
                        <Controller
                            as={
                                <RadioGroup row className={styles.radioGroup}>
                                    <FormControlLabel
                                        value="aplicada"
                                        control={<Radio color='primary' />}
                                        label="Vacina aplicada"
                                    />
                                    <FormControlLabel
                                        value="agendada"
                                        control={<Radio color='primary' />}
                                        label="Vacina agendada"
                                    />
                                </RadioGroup>
                            }
                            name="tipo"
                            control={control}
                            defaultValue={'aplicada'}
                        />
                    </div>
                    <br />
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
                    <br />
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={handleSubmit(onSubmit)} color='primary' type='submit'>
                        Cadastrar
                    </Button>
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={() => handleClickMenuItem('/vacinas')} color='secondary'>
                        Voltar
                    </Button>
                </div>
            </form>
        </MenuSite >
    );
}