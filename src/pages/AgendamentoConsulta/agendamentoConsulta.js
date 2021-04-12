import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import bannerVacinacao from "../../images/banner_consultas.png";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


export default function AgendamentoConsulta() {

    const styles = useStyles();

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const [tipoVacina, setTipoVacina] = useState();

    const hoje = new Date();

    const [selectedDate, setSelectedDate] = useState(hoje);

    const [selectedHour, setSelectedHour] = useState(hoje);

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
    const [pets, setPets] = useState([pet1,pet1,pet1,pet1,pet1,pet1]);

    const [selectedPet, setSelectedPet] = useState();

    useEffect(() => {
       
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleHourChange = (hora) => {
        setSelectedHour(hora);
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
        setTipoVacina(value);
    }

    const handleCadastroVacina = ( ) => {
        
    }

    return (
        <Menu>
            <form>
                
            <div className={styles.banner} style={{backgroundImage: `url(${bannerVacinacao})`}}>
                <span className={styles.titulo}> Agendar consulta</span>
                <br/>
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
                            style:{color: 'white'}
                        }}
                        InputProps={{ disableUnderline: true, className: styles.data}}
                        helperText=""
                    />
                </MuiPickersUtilsProvider>
                    
            </div>
            <div className={styles.campos} >
            <TextField
                id="outlined-helperText"
                label="Email do dono do pet"
                helperText="Por favor, digite o email do dono do pet"
                variant="outlined"
                size="small"
                className={styles.textField}
            />
            <FormControl variant="outlined" className={styles.formControl} size='small'>
                <InputLabel id="demo-simple-select-outlined-label">Pet</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selectedPet}
                onChange={(value) => handleChangePet(value)}
                label="Pet"
                >
                {pets.map((pet,index) => 
                    <MenuItem value={10}> {pet?.nome}</MenuItem>
                )}                
                </Select>
                <FormHelperText>Por favor, selecione o pet</FormHelperText>
            </FormControl>
            <br/>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>                
                    <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    value={selectedHour}
                    onChange={(value)=>handleHourChange(value)}
                    keyboardIcon={<AccessTimeIcon />}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                    InputProps={{ disableUnderline: true, className: styles.hora}}
                    helperText="Por favor, insira o horário desejado da consulta do pet"
                    />
            </MuiPickersUtilsProvider>
           <br/>
            <TextareaAutosize aria-label="minimum height" placeholder="Observações:" 
            className={styles.textArea}/>
            <br/>
            <Button variant="contained" className={styles.buttonContained} 
                onClick={()=>handleCadastroVacina()} color='primary'>
                Cadastrar 
            </Button>
            <Button variant="contained" className={styles.buttonContained} 
                onClick={()=>handleClickMenuItem('/consultas')} color='secondary'>
                Cancelar
            </Button>
            </div>
        </form>    
        </Menu>
    );
}