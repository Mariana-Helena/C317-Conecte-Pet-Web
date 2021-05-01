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
    /** 
    * Vetor de pets
    */
    const [pets, setPets] = useState([]);

    const [vet, setVet] = useState(false);
    const [pet, setPet] = useState([]);
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
        const email = (JSON.parse(usuario).email);
        const vet = (JSON.parse(usuario).ehveterinario);
        console.log(usuario)
        if (vet == true){
            console.log('ok')
            const vet_crmv = (JSON.parse(usuario).crmv)
            axios.get(`/veterinario/vacinas/${vet_crmv}`).then(res =>{
                if (res.data.express.length !== 0) {
                    console.log(res.data.express);
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
        
      
    };
    /** 
    * GET para buscar as vacinas dos pets no banco
    * Parâmetro: pet_id
    */
    function callApi2(id_pet) {
        console.log("pegouvacinas")
        axios.get(`/vacinas/${id_pet}`).then(res =>{
            if (res.data.express.length !== 0) {
                console.log(res.data.express);
                setVacinas(res.data.express);
            }
        })
        .catch(err => {
            console.log(err)
        });
    }
    /** 
    * GET para buscar os pets no banco pelo seu id
    */
   /* function callApi3(id_pet) {
        console.log('CHamou aqui',id_pet);
        axios.get(`/pet/${id_pet}`).then(res =>{
            console.log('respostaaa',res.data.express)
            if (res.data.express.length !== 0) {
                console.log(res.data.express);
                setPet(res.data.express);
            }
        })
        .catch(err => {
            console.log(err)
        });
    }*/

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
    var idtable=0;

   /* if (vet){
        var i;
        for (i = 0; i < vacinas.length; i++) {
            callApi3(vacinas[i]['pet_id']);
            vacinas[i]['nomePet']= pet.nome;
            vacinas[i]['donoPet']= pet.usuario;
        }
        console.log('vacinas',vacinas);
    }*/

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
                        {pets.map((pet) => (
                            <div 
                            onClick={() => callApi2(pet._id)}
                            className={styles.circleGray}>
                            </div>
                        ))}  
                    </div>
               
                }
               
            </div>
            <ExcluirVacina open={open} onClose={()=>handleDialogClose()}/>
            <div className={styles.campos} >
                
                <TableContainer component={Paper} className={styles.tableContainer} >
                    <Table className={styles.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>#</StyledTableCell>
                                {vet &&(<StyledTableCell align="center">Nome do Pet</StyledTableCell>)}
                                {vet &&(<StyledTableCell align="center">Email dono Pet</StyledTableCell>)}
                                <StyledTableCell>Fabricante</StyledTableCell>
                                <StyledTableCell align="center">Vacina</StyledTableCell>
                                <StyledTableCell align="center">Data</StyledTableCell>
                                <StyledTableCell align="center">Aplicada/Agendada</StyledTableCell>
                                {!vet &&(<StyledTableCell align="center">Veterinário</StyledTableCell>)}
                                <StyledTableCell align="center">Observações</StyledTableCell>
                                <StyledTableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {vacinas.map((vacina, index) => (
                            <StyledTableRow key={vacina}> 
                                <StyledTableCell align="center">{index}</StyledTableCell>  
                                {vet &&(<StyledTableCell align="center">{vacina.pet.nome}</StyledTableCell>)}
                                {vet &&(<StyledTableCell align="center">{vacina.pet.dono}</StyledTableCell>)}  
                                <StyledTableCell component="th" scope="row">
                                    {vacina.fabricante}
                                </StyledTableCell>
                                <StyledTableCell align="center">{vacina.vacina}</StyledTableCell>
                                <StyledTableCell align="center">{new Date(vacina.data).toLocaleDateString()}</StyledTableCell>
                                <StyledTableCell align="center">{vacina.tipo}</StyledTableCell>
                                {!vet &&(<StyledTableCell align="center">{vacina.crmv}</StyledTableCell>)}
                                <StyledTableCell align="center">{vacina.observacao}</StyledTableCell>
                                <StyledTableCell align="center"><HighlightOffIcon className={styles.closeIcon} onClick={()=>setOpen(true)}/></StyledTableCell>
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