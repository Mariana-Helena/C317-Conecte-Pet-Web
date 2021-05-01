import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useStyles from './styles.js';
import ExcluirPet from './ExcluirPet/excluirPet';
import MenuSite from '../../components/Menu/menu';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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
    * Estado do dialogue de excluir pet
    */
    const [open, setOpen] = useState(false);
    /** 
    * Vetor de pets
    */
    const [pets, setPets] = useState([]);
    /** 
    ***********************************************
                    FUNÇÕES
    ***********************************************
    **/
    /** 
    * Chamada toda vez que há alteração no localStorage
    */
    useEffect(() => {       
        callApi();
    }, [localStorage.getItem('user')]);
    /** 
    * GET para buscar os pets no banco
    * Parâmetro: email
    */
    const callApi = async () => {
        const usuario = localStorage.getItem('user'); 
        if(usuario){
            const email = (JSON.parse(usuario).email);
            axios.get(`/pets/${email}`).then(res => {
                if (res.data.express.length !== 0) {
                    setPets(res.data.express);
                }
            })
            .catch(err => {
                console.log(err)
            });
        }
        
      
    };
    /**
    * Navegação entre as páginas (altera a rota)
    */
    function handleClickMenuItem(rota) {
        history.push("/" + rota);
    }
    return (
        <MenuSite>
            <div className={styles.container}>
                <ExcluirPet open={open} onClose={() => setOpen(false)} />
                <div className={styles.primeiraDiv}>
                    <span className={styles.titulo}> Pets cadastrados</span>
                    <Button variant="contained" className={styles.buttonContainedBlue}
                        onClick={() => handleClickMenuItem('pets/cadastro')} >
                        Cadastrar Novo Pet
                    </Button>
                </div>
                {pets.map((pet, index) =>
                    <div className={styles.petDiv} key={pet._id}>
                        <Button onClick={() => setOpen(true)} className={styles.closeIconButton} disabled={true}>
                        <HighlightOffIcon className={styles.closeIcon}/>
                        </Button>
                        <div className={styles.circleGray}>
                        </div>
                        <span className={styles.subtitulo}> {pet.nome} </span>
                        <div>
                            <p> <span className={styles.campos}>Espécie: </span> <span> {pet.especie}</span> </p>
                            <p> <span className={styles.campos}>Raça: </span> <span> {pet.raca}</span> </p>
                            <p> <span className={styles.campos}>Sexo: </span> <span> {pet.sexo}</span> </p>
                            <p> <span className={styles.campos}>Idade: </span> <span> {pet.idade} anos</span> </p>
                            <p> <span className={styles.campos}>Peso: </span> <span> {pet.peso} kg</span> </p>
                            <p> <span className={styles.campos}>Observações: </span> <span> {pet.observacoes ? pet.observacoes : '-'}</span> </p>
                        </div>
                    </div>
                )}
            </div>
        </MenuSite>
    );
}