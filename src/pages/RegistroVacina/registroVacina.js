import React, {useState,useEffect} from 'react';
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

export default function RegistroVacina() {

    const styles = useStyles();

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const [tipoVacina, setTipoVacina] = useState();

    const hoje = new Date();

    const [selectedDate, setSelectedDate] = useState(hoje);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    useEffect(() => {
       
    });

    function handleClickMenuItem(rota) {
        history.push("/"+rota);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    const handleTipoVacina = (value) => {
        setTipoVacina(value);
    }

    return (
        <Menu>
            <form>
                
            <div className={styles.banner} style={{backgroundImage: `url(${bannerVacinacao})`}}>
                <span className={styles.titulo}> Registrar vacinação</span>
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
            <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Email do dono do pet"
                helperText="Por favor, digite o email do dono do pet"
                variant="outlined"
                size="small"
                className={styles.textField}
            />
            <br/>
            <TextField
                id="outlined-helperText"
                label="Vacina"
                helperText="Por favor, digite o nome da vacina"
                variant="outlined"
                size="small"
                className={styles.textField}
            />
            <TextField
                id="outlined-helperText"
                label="Fabricante"
                helperText="Por favor, digite o nome do fabricante"
                variant="outlined"
                size="small"
                className={styles.textField}
            />
            <RadioGroup row aria-label="gender" name="gender1" value={tipoVacina}
             onChange={()=>handleTipoVacina(value)} >
                <FormControlLabel value="0" control={<Radio />} label="Vacina aplicada" />
                <FormControlLabel value="1" control={<Radio />} label="Vacina agendada" />
            </RadioGroup>
           <br/>
            <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Observações:" 
            className={styles.textArea}/>

            <Button variant="contained" className={styles.buttonContainedBlue} 
                onClick={()=>handleClickMenuItem('pets/cadastro')}>
                Cadastrar 
            </Button>
            <Button variant="contained" className={styles.buttonContainedBlue} 
                onClick={()=>handleClickMenuItem('pets/cadastro')}>
                Cancelar
            </Button>
            </div>
        </form>    
        </Menu>
    );
}