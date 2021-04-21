import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router-dom';
import bannerVacinacao from "../../images/banner_vacinacao.png";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';

export default function RegistroVacina() {

    const defaultValues = {
        email: null,
        vacina: null,
        fabricante: null
    };

    const styles = useStyles();

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const [tipoVacina, setTipoVacina] = useState('1');

    const hoje = new Date();

    const [selectedDate, setSelectedDate] = useState(hoje);

    const { register, handleSubmit, errors, control } = useForm({ defaultValues });

    /*
   Pet de exemplo
   */
    const pet1 = {
        img: '', ///?????
        nome: 'Gatinho',
        especie: 'gato',
        raca: 'raca do gatinho',
        sexo: 'macho',
        idade: '2 anos',
        peso: '1 kg',
        observacoes: ''
    }
    const pet2 = {
        img: '', ///?????
        nome: 'Doguinho',
        especie: 'cachorro',
        raca: 'raca do dog',
        sexo: 'macho',
        idade: '3 anos',
        peso: '2 kg',
        observacoes: ''
    }

    const [pets, setPets] = useState([pet1, pet2]);

    const [selectedPet, setSelectedPet] = useState();

    useEffect(() => {

    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChangePet = (pet) => {
        setSelectedPet(pet);
    };

    function handleClickMenuItem(rota) {
        history.push(rota);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const handleTipoVacina = (value) => {
        setTipoVacina(value.target.value);
    }

    const onSubmit = (data) => {
        console.log(data);
        axios
        .post('/vacinas/registro', data)
        .then(() => console.log('Vacina registrada!'))
        .catch(err => {
            console.error(err);
        });

    };

    const callApi = async () => {
        axios
            .post('/vacinas/registro', data)
            .then(() => console.log('Vacina registrada!'))
            .catch(err => {
                console.error(err);
            });

    };

    return (
        <Menu>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className={styles.banner} style={{ backgroundImage: `url(${bannerVacinacao})` }}>
                    <span className={styles.titulo}> Registrar vacinação</span>
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils} >
                        <KeyboardDatePicker
                            className={styles.calendario}
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                style: { color: 'white' }
                            }}
                            InputProps={{ disableUnderline: true, className: styles.data }}
                        />
                    </MuiPickersUtilsProvider>

                </div>
                <div className={styles.campos} >
                    <TextField
                        id="email"
                        label="Email do dono do pet"
                        variant="outlined"
                        size="small"
                        className={styles.textField}
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
                                labelId="demo-simple-select-outlined-label"
                                id="pet"
                                value={selectedPet}
                                onChange={(value) => handleChangePet(value)}
                                label="Pet"


                            >
                                {pets.map((pet, index) =>
                                    <MenuItem value={10}> {pet?.nome}</MenuItem>
                                )}
                            </Select>}
                            name="pet"
                            control={control}
                            errors={errors.pet}
                            ref={
                                register('pet', {
                                    required: true
                                })
                            }
                            inputRef={register}
                            control={control}
                            rules={{ required: true }}
                        />
                        <FormHelperText error={errors?.pet} className={styles.helperText}>
                            {errors?.pet && errors?.pet?.type === "required" ?
                                "Esse campo é obrigatório."
                                :
                                "Por favor, selecione o pet"
                            }
                        </FormHelperText>
                    </FormControl>
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
                        <RadioGroup row aria-label="gender" name="gender1" value={tipoVacina}
                            onChange={(value) => handleTipoVacina(value)} className={styles.radioGroup}>
                            <FormControlLabel value='1' control={<Radio color='primary' />} label="Vacina aplicada" />
                            <FormControlLabel value='2' control={<Radio color='primary' />} label="Vacina agendada" />
                        </RadioGroup>
                    </div>
                    <br />
                    <TextareaAutosize aria-label="minimum height" placeholder="Observações:"
                        className={styles.textArea} />
                    <br />
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={handleSubmit(onSubmit)} color='primary' type='submit'>
                        Cadastrar
            </Button>
                    <Button variant="contained" className={styles.buttonContained}
                        onClick={() => handleClickMenuItem('/vacinas')} color='secondary'>
                        Cancelar
            </Button>
                </div>
            </form>
        </Menu >
    );
}