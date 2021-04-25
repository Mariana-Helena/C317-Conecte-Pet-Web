import React, {useState,useEffect} from 'react';
import useStyles from './styles.js';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/Menu/menu';
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
    * GET para buscar as vacinas dos pets no banco
    * Parâmetro: pet_id
    */
    const callApi = async () => {
        const usuario = localStorage.getItem('user'); 
        const email = (JSON.parse(usuario).email);
        axios.get(`/pets/${email}`).then(res => {
            if (res.data.express.length !== 0) {
                const resp = res.data.express[0];
                const id_pet = resp['_id'];
                axios.get(`/vacinas/${id_pet}`).then(res =>{
                    if (res.data.express.length !== 0) {
                        setVacinas(res.data.express);
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

    useEffect(() => {
       
    });

    const handleDialogClose = () => {
        setOpen(false);
    }
    const idtable=0;
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
                        {vacinas.map((vacina) => (
                            <StyledTableRow key={vacina}>
                                <StyledTableCell align="center">{idtable+1}</StyledTableCell>    
                                <StyledTableCell component="th" scope="row">
                                    {vacina.fabricante}
                                </StyledTableCell>
                                <StyledTableCell align="center">{vacina.vacina}</StyledTableCell>
                                <StyledTableCell align="center">{vacina.data}</StyledTableCell>
                                <StyledTableCell align="center">{vacina.data}</StyledTableCell>
                                <StyledTableCell align="center">{vacina.crmv}</StyledTableCell>
                                <StyledTableCell align="center">{vacina.observacao}</StyledTableCell>
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