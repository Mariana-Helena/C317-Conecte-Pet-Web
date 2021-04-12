import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import bannerCadastro from "../../images/banner_cadastro.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
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

export default function Pets() {

    const styles = useStyles();

    const [sexo, setSexo] = useState();

    const [selectedEspecie, setSelectedEspecie] = useState();

    const handleChangeEPet = (pet) => {
        setSelectedEspecie(pet);
    };

    useEffect(() => {
       
    });

    const history = useHistory();

    const handleSexo = (value) => {
        setSexo(value);
    }

    function handleClickMenuItem(rota) {
        history.push(rota);
    }

    return (
        <Menu>
            <form  noValidate autoComplete="off">
                <div className={styles.banner} style={{backgroundImage: `url(${bannerCadastro})`}}>     
                    <span className={styles.titulo}> Cadastrar Pet</span>
                    <br/>
                    <Avatar className={styles.avatar}></Avatar>
                    <IconButton className={styles.camera}>
                        <PhotoCamera />
                    </IconButton>
                </div>

                <div className={styles.campos}>
                    <TextField
                        id="outlined-helperText"
                        label="Nome do Pet"
                        helperText="Por favor, digite o nome do Pet"
                        variant="outlined"
                        size="small"
                        className={styles.textField}
                    />
                    <FormControl variant="outlined" className={styles.formControl} size='small'>
                        <InputLabel id="demo-simple-select-outlined-label">Espécie</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectedEspecie}
                        onChange={(value) => handleChangeEPet(value)}
                        label="Especie"
                        >
                        <MenuItem value={0}>Cachorro</MenuItem> 
                        <MenuItem value={1}>Gato</MenuItem>            
                        </Select>
                        <FormHelperText>Por favor, selecione a espécie do Pet</FormHelperText>
                    </FormControl>
                    <TextField
                        id="outlined-helperText"
                        label="Raça"
                        helperText="Por favor, digite a raça do Pet"
                        variant="outlined"
                        size="small"
                        className={styles.textFieldRaca}
                    />
                    <br/>
                    <div className={styles.container}>
                        <TextField
                            id="outlined-helperText"
                            label="Idade"
                            helperText="Por favor, digite a idade do Pet"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                        />
                        <TextField
                            id="outlined-helperText"
                            label="Peso"
                            helperText="Por favor, digite o peso do Pet"
                            variant="outlined"
                            size="small"
                            className={styles.textField}
                        />
                        <RadioGroup row aria-label="gender" name="gender1" value={sexo}
                            onChange={(value)=>handleSexo(value)} className={styles.radioGroup}>
                            <FormControlLabel value="0" control={<Radio  color='primary'/>} label="Fêmea" />
                            <FormControlLabel value="1" control={<Radio color='primary'/>} label="Macho" />
                        </RadioGroup>
                    </div>
                    <br/>
                    <br/>
                    
                    <TextareaAutosize aria-label="minimum height" placeholder="Observações:" 
                    className={styles.textArea}/>
                    <br/>
                    <Button variant="contained" className={styles.buttonContained} 
                        onClick={()=>handleCadastroVacina()} color='primary'>
                        Cadastrar 
                    </Button>
                    <Button variant="contained" className={styles.buttonContained} 
                        onClick={()=>handleClickMenuItem('/vacinas')} color='secondary'>
                        Cancelar
                    </Button>
                </div>
            </form> 
            

        </Menu>
    );
}