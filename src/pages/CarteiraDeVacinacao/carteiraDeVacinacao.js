import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';
import MenuSite from '../../components/Menu/menu';
import bannerVacinacao from "../../images/banner_vacinacao.png";
import 'date-fns';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExcluirVacina from './ExcluirVacina/excluirVacina';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


export default function RegistroVacina() {
    /** 
    ***********************************************
                    VARIÁVEIS
    ***********************************************
    **/
    /** 
    * Navegação pelas páginas
    */
    const styles = useStyles();
    /** 
    * Navegação pelas páginas
    */
    const history = useHistory();
    /** 
    * Vetor de vacinas
    */
    const [vacinas, setVacinas] = useState([]);
    /** 
    * Vetor de pets
    */
    const [pets, setPets] = useState([]);

    const [vet, setVet] = useState(false);
    const [clicked, setClicked]  = useState(false);

    /** 
    * Vacina selecionada
    */
     const [selectedVacina, setSelectedVacina] = useState();
    /** 
    ***********************************************
                    FUNÇÕES
    ***********************************************
    **/
    /** 
    * Chamada toda vez que há alteração no localStorage
    */
    useEffect(() => {
        getUser();
        callApi1();
    }, [localStorage.getItem('user')]);

    /** 
    * GET para buscar os pets no banco
    */
    const callApi1 = async () => {
        const usuario = localStorage.getItem('user');
        if (usuario) {
            const email = (JSON.parse(usuario).email);
            const vet = (JSON.parse(usuario).ehveterinario);
            if (vet == true) {
                const vet_crmv = (JSON.parse(usuario).crmv)
                axios.get(`/veterinario/vacinas/${vet_crmv}`).then(res => {
                    if (res.data.express.length !== 0) {
                        setVacinas(res.data.express);
                    }
                })
                    .catch(err => {
                        console.log(err)
                    });
            }
            else {
                axios.get(`/pets/${email}`).then(res => {
                    if (res.data.express.length !== 0) {
                        setPets(res.data.express);
                    }
                })
                    .catch(err => {
                        console.log(err)
                    });
            }
        }

    };
    /** 
    * GET para buscar as vacinas dos pets no banco
    * Parâmetro: pet_id
    */
    function callApi2(id_pet) {        
        axios.get(`/vacinas/${id_pet}`).then(res => {
            setVacinas(res.data.express);
            setClicked(true);
        })
            .catch(err => {
                console.log(err)
            });
    }

    const getUser = () => {
        const usuario = localStorage.getItem('user');
        if (usuario) setVet(JSON.parse(usuario).ehveterinario);
    }


    const [open, setOpen] = useState(false);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: '#7a96ac',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    useEffect(() => {

    });

    const handleDialogClose = () => {
        setOpen(false);
    }

    /**
    * Navegação entre as páginas (altera a rota)
    */
    function handleClickMenuItem(rota) {
        history.push("/" + rota);
    }
    /** 
    * Abre o diaologue e seta a vacina selecionada
    */
     const handleDelete = (vacinaSelecionada) => {
        setOpen(true);
        setSelectedVacina(vacinaSelecionada);    
    }
    /** 
    * Executado após exclusão
    */
    const handleDeleteAfter = (value) => {
        if (value == true) {
            window.location.reload();
        }
    }
    return (
        <MenuSite>
            <form>

                <div className={styles.banner} style={{ backgroundImage: `url(${bannerVacinacao})` }}>
                    <span className={styles.titulo}> Vacinas do Pet</span>
                    <br />
                    {vet ?
                        <Button id="button-registrar-vacina" variant="contained" className={styles.buttonContainedBlue}
                            onClick={() => handleClickMenuItem('vacinas/registro')} color='primary'> Registrar vacina</Button>
                        :
                        <div className={styles.divFotos}>
                            {pets.map((pet) => (
                                
                                <div
                                    onClick={() => callApi2(pet._id)}
                                    className={styles.divFoto}>
                                        {pet.foto?
                                        <img src={pet.foto} className={styles.circleGray} />
                                        :
                                        <div className={styles.circleGray} />
                                    }
                                    
                                </div>
                            ))}
                        </div>

                    }

                </div>
                <ExcluirVacina open={open} onClose={() => handleDialogClose()}
                    deleted={(value) => handleDeleteAfter(value)} vacina={selectedVacina} />
                <div className={styles.campos} >
                    {vacinas.length!=0 ?
                        <TableContainer component={Paper} className={styles.tableContainer} >
                            <Table className={styles.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>#</StyledTableCell>
                                        {vet && (<StyledTableCell align="center">Nome do Pet</StyledTableCell>)}
                                        {vet && (<StyledTableCell align="center">Email dono Pet</StyledTableCell>)}
                                        <StyledTableCell>Fabricante</StyledTableCell>
                                        <StyledTableCell align="center">Vacina</StyledTableCell>
                                        <StyledTableCell align="center">Data</StyledTableCell>
                                        <StyledTableCell align="center">Aplicada/Agendada</StyledTableCell>
                                        {!vet && (<StyledTableCell align="center">Veterinário</StyledTableCell>)}
                                        <StyledTableCell align="center">Observações</StyledTableCell>
                                        {vet && (<StyledTableCell />)}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {vacinas.map((vacina, index) => (
                                        <StyledTableRow key={vacina}>
                                            <StyledTableCell align="center">{index}</StyledTableCell>
                                            {vet && (<StyledTableCell align="center">{vacina.pet.nome}</StyledTableCell>)}
                                            {vet && (<StyledTableCell align="center">{vacina.pet.dono}</StyledTableCell>)}
                                            <StyledTableCell component="th" scope="row">
                                                {vacina.fabricante}
                                            </StyledTableCell>
                                            <StyledTableCell align="center" id={`cell-vacina-${index}`} >{vacina.vacina}</StyledTableCell>
                                            <StyledTableCell align="center">{vacina.data}</StyledTableCell>
                                            <StyledTableCell align="center">{vacina.tipo}</StyledTableCell>
                                            {!vet && (<StyledTableCell align="center">{vacina.crmv}</StyledTableCell>)}
                                            <StyledTableCell align="center">{vacina.observacao}</StyledTableCell>
                                            {vet && (<StyledTableCell align="center"><HighlightOffIcon className={styles.closeIcon} 
                                            onClick={()=>handleDelete(vacina)} id={`button-excluir-${index}`} /></StyledTableCell>)}
                                        </StyledTableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        clicked?
                        <div>
                            Nenhuma vacina encontrada para esse pet!
                        </div>
                        :
                         vet?
                         <div id="no-vaccine">
                             Nenhuma vacina encontrada!
                         </div>
                        :
                        <div>
                            Para visualizar as vacinas, selecione algum pet.
                        </div>}                      
                </div>
            </form>
        </MenuSite>
    );
}