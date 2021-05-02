import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import MenuSite from '../../components/Menu/menu';
import { useHistory } from 'react-router-dom';
import bannerVacinacao from "../../images/banner_consultas.png";
import 'date-fns';
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ExcluirConsulta from './ExcluirConsulta/excluirConsulta';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';

export default function AgendamentoConsulta() {
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
    * Vetor de consultas
    */
    const [consultas, setConsultas] = useState([]);
    /** 
    * Vetor de pets
    */
    const [pets, setPets] = useState([]);

    const [vet, setVet] = useState(false);
    const [clicked, setClicked]  = useState(false);
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
        if(usuario){
            const email = (JSON.parse(usuario).email);
            const vet = (JSON.parse(usuario).ehveterinario);
            if (vet == true){
                const vet_crmv = (JSON.parse(usuario).crmv)
                axios.get(`/veterinario/consultas/${vet_crmv}`).then(res =>{
                    if (res.data.express.length !== 0) {
                        console.log(res.data.express);
                        setConsultas(res.data.express);
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
    * GET para buscar as consultas dos pets no banco
    * Parâmetro: pet_id
    */
    function callApi2(id_pet) {
        axios.get(`/consultas/${id_pet}`).then(res =>{
            setConsultas(res.data.express);
            setClicked(true);
        })
        .catch(err => {
            console.log(err)
        });
    }

    const getUser = () => {
        const usuario = localStorage.getItem('user');
        if(usuario) setVet(JSON.parse(usuario).ehveterinario);
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

    const handleDialogClose = () => {
        setOpen(false);
    }

    /**
    * Navegação entre as páginas (altera a rota)
    */
    function handleClickMenuItem(rota) {
        history.push("/" + rota);
    }

    return (
        <MenuSite>
            <form>
                <div className={styles.banner} style={{ backgroundImage: `url(${bannerVacinacao})` }}>
                    <span className={styles.titulo}> Consultas do Pet</span>
                    <br />
                    {vet ?
                        <Button variant="contained" className={styles.buttonContainedBlue}
                            onClick={() => handleClickMenuItem('consultas/agendamento')} color='primary'> Agendar Consulta </Button>
                        :
                        <div>
                            {pets.map((pet) => (
                                <div 
                                onClick={() => callApi2(pet._id)}
                                className={styles.circleGray}>
                                </div>
                            ))} 
                        </div>  
                    }

                </div>
                <ExcluirConsulta open={open} onClose={() => handleDialogClose()} />
                <div className={styles.campos} >
                    {consultas.length!=0?
                        <TableContainer component={Paper} className={styles.tableContainer} >
                            <Table className={styles.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>#</StyledTableCell>
                                        {vet && (<StyledTableCell align="center">Nome do Pet</StyledTableCell>)}
                                        {vet && (<StyledTableCell align="center">Email dono Pet</StyledTableCell>)}
                                        <StyledTableCell>Veterinário</StyledTableCell>
                                        <StyledTableCell align="center">Consulta</StyledTableCell>
                                        <StyledTableCell align="center">Horário</StyledTableCell>
                                        <StyledTableCell align="center">Observações</StyledTableCell>
                                        <StyledTableCell/>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {consultas.map((consulta,index) => (
                                        <StyledTableRow key={consulta}>
                                            <StyledTableCell align="center">{index}</StyledTableCell>
                                            {vet && (<StyledTableCell align="center">{consulta.pet.nome}</StyledTableCell>)}
                                            {vet && (<StyledTableCell align="center">{consulta.pet.dono}</StyledTableCell>)}
                                            <StyledTableCell component="th" scope="row">
                                                {consulta.crmv}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{consulta.data}</StyledTableCell>
                                            <StyledTableCell align="center">{consulta.horario}</StyledTableCell>
                                            <StyledTableCell align="center">{consulta.observacoes}</StyledTableCell>
                                            <StyledTableCell align="center">
                                            <HighlightOffIcon className={styles.closeIcon} onClick={() => setOpen(true)} />
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        clicked?
                        <div>
                            Nenhuma consulta encontrada para esse pet!
                        </div>
                        :
                        vet?
                        <div>
                            Nenhuma consulta encontrada!
                        </div>
                        :
                        <div>
                            Para visualizar as consultas, selecione algum pet.
                        </div>}
                </div>
            </form>
        </MenuSite>
    );
}