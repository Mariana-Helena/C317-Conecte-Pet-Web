import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import bannerCadastro from "../../images/banner_cadastro.png";
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Pets() {

    const styles = useStyles();

    const history = useHistory();

    
    /*
    Pet de exemplo
    */
    const especies = [
        {
            value: '',
            label: '',
        },
        {
            value: 'Cachorro',
            label: 'Cachorro',
        },
        {
            value: 'Gato',
            label: 'Gato',
        }
    ];

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
        <Menu>

            <div className={styles.banner} style={{backgroundImage: `url(${bannerCadastro})`}}>     
                <span className={styles.titulo}> Cadastrar Pet</span>
                <Avatar className={styles.avatar}></Avatar>
                <IconButton className={styles.camera}>
                    <PhotoCamera />
                </IconButton>
            </div>

            <div className={styles.petDiv}>
                <form  noValidate autoComplete="off">
                    <TextField className={styles.nomePet} id="outlined-basic" label="Nome" variant="outlined"  helperText="Por favor, digite o nome do Pet" />
                    <TextField
                        className={styles.especiePet}
                        id="outlined-select-especie"
                        select
                        label="Espécie"
                        value={especies}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Por favor, selecione a espécie do Pet"
                        variant="outlined"
                        >
                        {especies.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField className={styles.racaPet} id="outlined-basic" label="Raça" variant="outlined"  helperText="Por favor, digite a raça do Pet" />
                    <TextField className={styles.nomePet} id="outlined-basic" label="Idade" variant="outlined"  helperText="Por favor, digite a idade do Pet" />
                    <TextField className={styles.pesoPet} id="outlined-basic" label="Peso" variant="outlined"  helperText="Por favor, digite o peso do Pet" />
                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} name="Macho"/>}
                            label="Macho" className={styles.sexoPetF}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleChange} name="Fêmea" />}
                            label="Fêmea" className={styles.sexoPetM}
                        />
                    </FormGroup>
                    <TextField className={styles.obs}
                        id="obsPet"
                        label="Observações"
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                    <Button variant="contained" className={styles.buttonContainedBlue}>
                        Cadastrar
                    </Button>
                    <Button variant="contained" className={styles.buttonContainedBlueC}>
                        Cancelar
                    </Button>
                </form> 
            </div>

        </Menu>
    );
}