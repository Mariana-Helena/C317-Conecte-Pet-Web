import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu/menu';
import bannerVacinacao from "../../images/banner_vacinacao.png";
import 'date-fns';
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
     const history = useHistory();

    const [vet, setVet] = useState(false);

    useEffect(() => {
        getUser();
    }), [localStorage.getItem('user')];

    const getUser = () => {
        const usuario = localStorage.getItem('user');
        setVet(JSON.parse(usuario).ehveterinario);
    }

    function createData(id,fabricante, vacina, aplicacao, paplicacao,veterinario,observacoes) {
        return { id,fabricante, vacina, aplicacao, paplicacao,veterinario,observacoes};
    }
    
    const [open, setOpen] = useState(false);

    const rows = [
        createData(1,'LaboVet', 'Antirrabica', '19/05/2018', '19/05/2019', 'CRMV-MG 15.569',''),
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
    return (
        <Menu>
            <form>
                
            <div className={styles.banner} style={{backgroundImage: `url(${bannerVacinacao})`}}>
                <span className={styles.titulo}> Vacinas do Pet</span>
                <br/>
                {vet ?
                <Button variant="contained" className={styles.buttonContainedBlue}
                onClick={() => handleClickMenuItem('vacinas/registro')} color='primary'> Registrar vacina</Button>
                :
                    <div>
                        <div className={styles.circleGray}>
                        </div>
                        <div className={styles.circleGray2}>
                        </div>   
                    </div>
               
                }
               
            </div>
            <ExcluirVacina open={open} onClose={()=>handleDialogClose()}/>
            <div className={styles.campos} >
                <HighlightOffIcon className={styles.closeIcon} onClick={()=>setOpen(true)}/>
                <TableContainer component={Paper} className={styles.tableContainer} >
                    <Table className={styles.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                <StyledTableCell>Fabricante</StyledTableCell>
                                <StyledTableCell align="center">Vacina</StyledTableCell>
                                <StyledTableCell align="center">Aplicação</StyledTableCell>
                                <StyledTableCell align="center">Próxima Aplicação</StyledTableCell>
                                <StyledTableCell align="center">Veterinário</StyledTableCell>
                                <StyledTableCell align="center">Observações</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="center">{row.id}</StyledTableCell>    
                                <StyledTableCell component="th" scope="row">
                                    {row.fabricante}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.vacina}</StyledTableCell>
                                <StyledTableCell align="center">{row.aplicacao}</StyledTableCell>
                                <StyledTableCell align="center">{row.paplicacao}</StyledTableCell>
                                <StyledTableCell align="center">{row.veterinario}</StyledTableCell>
                                <StyledTableCell align="center">{row.observacao}</StyledTableCell>
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