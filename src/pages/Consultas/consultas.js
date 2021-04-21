import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import Menu from '../../components/Menu/menu';
import { useHistory } from 'react-router-dom';
import bannerVacinacao from "../../images/banner_consultas.png";
import 'date-fns';
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
    const history = useHistory();

    const [vet, setVet] = useState(false);

    useEffect(() => {
        getUser();
    }), [localStorage.getItem('user')];

    const getUser = () => {
        const usuario = localStorage.getItem('user');
        setVet(JSON.parse(usuario).ehveterinario);
    }


    function createData(id, veterinario, consulta, retorno, observacoes) {
        return { id, veterinario, consulta, retorno, observacoes };
    }

    const [open, setOpen] = useState(false);

    const rows = [
        createData(1, 'CRMV-MG 15.569', '19/03/2021', '19/04/2021', 'Consulta Preventiva + 1ª vermifugação'),
    ];

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

    const styles = useStyles();

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
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell align="center">{row.id}</StyledTableCell>
                                        <StyledTableCell component="th" scope="row">
                                            {row.veterinario}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{row.consulta}</StyledTableCell>
                                        <StyledTableCell align="center">{row.retorno}</StyledTableCell>
                                        <StyledTableCell align="center">{row.observacoes}</StyledTableCell>
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