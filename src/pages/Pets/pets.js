import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ExcluirPet from './ExcluirPet/excluirPet';

export default function Pets() {

    const styles = useStyles();

    const history = useHistory();

    const [open, setOpen] = useState(false);

    const [pets, setPets] = useState([]);

    useEffect(() => {        
        callApi();
    }, []);

    const callApi = async () => {
        const response = await fetch('/pets');
        const body = await response.json();
        setPets(body.express)
        if (response.status !== 200) throw Error(body.message);
      
    };

    function handleClickMenuItem(rota) {
        history.push("/" + rota);
    }

    const handleDialogClose = () => {
        setOpen(false);
    }

    return (
        <Menu>
            <div className={styles.container}>
                <ExcluirPet open={open} onClose={() => handleDialogClose()} />

                <div className={styles.primeiraDiv}>
                    <span className={styles.titulo}> Pets cadastrados</span>
                    <Button variant="contained" className={styles.buttonContainedBlue}
                        onClick={() => handleClickMenuItem('pets/cadastro')} color='primary'>
                        Cadastrar novo pet
                </Button>

                </div>


                {pets.map((pet, index) =>
                    <div className={styles.petDiv} >
                        <Button onClick={() => setOpen(true)} className={styles.closeIconButton} >
                        <HighlightOffIcon className={styles.closeIcon}/>
                        </Button>
                        <div className={styles.circleGray}>
                        </div>
                        <span className={styles.subtitulo}> {pet.nome} </span>
                        <div>
                            <p> <span className={styles.campos}>Espécie: </span> <span> {pet.especie}</span> </p>
                            <p> <span className={styles.campos}>Raça: </span> <span> {pet.raca}</span> </p>
                            <p> <span className={styles.campos}>Sexo: </span> <span> {pet.sexo}</span> </p>
                            <p> <span className={styles.campos}>Idade: </span> <span> {pet.idade}</span> </p>
                            <p> <span className={styles.campos}>Peso: </span> <span> {pet.peso}</span> </p>
                            <p> <span className={styles.campos}>Observações: </span> <span> {pet.observacoes ? pet.observacoes : '-'}</span> </p>
                        </div>
                    </div>
                )}
            </div>
        </Menu>
    );
}