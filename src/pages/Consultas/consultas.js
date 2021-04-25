import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
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

    const [vet, setVet] = useState(false);
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
        callApi();
    }, [localStorage.getItem('user')]);
    /** 
    * GET para buscar as consultas dos pets no banco
    * Parâmetro: pet_id
    */
     const callApi = async () => {
        const usuario = localStorage.getItem('user'); 
        const email = (JSON.parse(usuario).email);
        axios.get(`/pets/${email}`).then(res => {
            if (res.data.express.length !== 0) {
                const resp = res.data.express[0];
                const id_pet = resp['_id'];
                axios.get(`/consultas/${id_pet}`).then(res =>{
                    if (res.data.express.length !== 0) {
                        console.log(res.data.express);
                        setConsultas(res.data.express);
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
        });
    };

    const getUser = () => {
        const usuario = localStorage.getItem('user');
        setVet(JSON.parse(usuario).ehveterinario);
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
        <Menu>
            <form>
                <div className={styles.banner} style={{ backgroundImage: `url(${bannerVacinacao})` }}>
                    <span className={styles.titulo}> Consultas do Pet</span>
                    <br />
                    {vet ?
                        <Button variant="contained" className={styles.buttonContainedBlue}
                            onClick={() => handleClickMenuItem('consultas/agendamento')} color='primary'> Agendar Consulta </Button>
                        :
                        <div>
                            <div className={styles.circleGray}>
                            </div>
                            <div className={styles.circleGray2}>
                            </div>
                        </div>

                    }

                </div>
                <ExcluirConsulta open={open} onClose={() => handleDialogClose()} />
                <div className={styles.campos} >
                    <HighlightOffIcon className={styles.closeIcon} onClick={() => setOpen(true)} />
                    <TableContainer component={Paper} className={styles.tableContainer} >
                        <Table className={styles.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>#</StyledTableCell>
                                    <StyledTableCell>Veterinário</StyledTableCell>
                                    <StyledTableCell align="center">Consulta</StyledTableCell>
                                    <StyledTableCell align="center">Retorno</StyledTableCell>
                                    <StyledTableCell align="center">Observações</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {consultas.map((consulta) => (
                                    <StyledTableRow key={consulta}>
                                        <StyledTableCell align="center">{1}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {consulta.crmv}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{consulta.data}</StyledTableCell>
                                        <StyledTableCell align="center">{consulta.data}</StyledTableCell>
                                        <StyledTableCell align="center">{consulta.observacoes}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </form>
        </Menu>
    );
}