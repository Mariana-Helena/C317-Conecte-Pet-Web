import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
export default function Pets() {

    const styles = useStyles();

    

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
    const [pets, setPets] = useState([pet1, pet1, pet1]);

    useEffect(() => {
       
    });

    return (
        <Menu>
            <span className={styles.titulo}> Pets cadastrados</span>
            <Button variant="contained" className={styles.buttonContainedBlue}>
                Cadastrar novo pet
            </Button>

            {pets.map((pet,index) => 
            <div className={styles.petDiv}>
                <div className={styles.circleGray}>
                </div>
                <span className={styles.subtitulo}> {pet.nome} </span>
                {console.log(pet)}
            </div>
            ) }
        </Menu>
    );
}