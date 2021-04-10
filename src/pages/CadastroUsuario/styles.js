import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles((theme) => ({
  barraSuperior: {
    backgroundColor: defaultColor,
  },  
  logo:{
    width:'65px',  
    display: 'block',
    marginLeft: '-23px', 
  },
  userName: {
    color: 'white',  
    marginLeft: '30px',
    float: 'left',
    marginTop: '5px'
  },
  toolbar: theme.mixins.toolbar,  
  buttonContainedBlue:{
    width: '250px',
    marginTop: '160px',
    marginLeft: '600px', 
    backgroundColor: defaultColor,
    color: 'white',
    textTransform: 'inherit',
  },
  buttonContainedBlueC:{
    marginTop: '-61px',
    width: '250px',
    marginLeft: '900px', 
    backgroundColor: '#7a96ac',
    color: 'white',
    textTransform: 'inherit',
  },
  closeIcon:{
    color: defaultColor,
    marginLeft: '170px',
    fontSize: '32px',
    position: 'relative',
    top: '50px'
  },
  campos:{
    color: defaultColor,
    fontWeight: 'bold',
  },
  circleGray:{
    backgroundColor: '#E5E9F2',
    borderRadius: '100%',
    width: '150px',
    height: '150px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
  },
  petDiv:{
    width: '200px',
    height: 'auto',    
    margin: '20px',
    marginTop: '30px',
    display: 'inline-block',
  },
  primeiraDiv:{    
    marginBottom: '20px',
  },

  subtitulo: {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#1C587C',
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign:'center',
  },
  titulo: {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginLeft: '60px',
    marginTop: '-24px',
  },
  nomeUser: {
    '& > *': {
    margin: theme.spacing(1),
    width: '450px',
    },
    marginTop: '-40px'
  },
  telUser: {
    '& > *': {
    margin: theme.spacing(1),
    width: '210px',
    },
    marginLeft: '0px',
  },
  crmv: {
    '& > *': {
    margin: theme.spacing(1),
    width: '210px',
    },
    marginLeft: '830px',
    marginTop: '-70px',
  },
  emailUser: {
    '& > *': {
    margin: theme.spacing(1),
    width: '450px',
    },
  },
  senhaUser: {
    '& > *': {
    margin: theme.spacing(1),
    width: '450px',
    },
  },
  vet: {
    marginLeft: '670px',
    marginTop: '-42px',
    position: 'relative',
    display: 'block'
  },
  user: {
    marginLeft: '830px',
    marginTop: '6px',
    width: '200px',
  },
  box: {
    backgroundColor: "#7a96ac",
    marginTop: '-24px',
    marginRight: '0px',
    marginLeft: '-52px',
  },
  typePerson: {
    marginTop: '-420px',
    marginLeft: '680px',
    width: '840px',
  },
  avatar: {
    marginTop: '20px',
    marginBottom: '-60px',
    marginLeft: '60px',
    width: '130px',
    height: '130px',
  },
  camera: {
    color: "white",
    marginLeft: '180px',
    marginTop: '20px',
    display: 'block',
  }
  
}));

export default useStyles;