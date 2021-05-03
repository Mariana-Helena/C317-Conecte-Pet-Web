import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: '20px',
    marginBottom: '-70px',
    marginLeft: '60px',
    width: '115px !important',
    height: '115px !important',
    position: 'relative',
    borderRadius: '50%'
  },
  banner:{    
    width:'100%',
    height:'200px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    marginBottom: '20px'
  },
  buttonContained:{
    width:'300px',
    marginRight: '45px'
  },
  camera: {
    width: '50px',
    color: "white",
    marginLeft: '180px',
    marginBottom: '0px',
    marginTop: '35px',
    display: 'block',
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
  campos: {
    marginLeft: '75px',
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
  container: {
    width: '1030px',
    minWidth: '1030px',
    maxWidth: '1030px',
  },
  error:{
    background: '#a30000',
    color: 'white',
    width: '250px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight:'50px'
  },
  especiePet: {
    '& > *': {
    margin: theme.spacing(1),
    width: '230px',
    },
    marginLeft: '300px',
    marginTop: '-107px'
  },
  formControl: {
    margin: '0px',
    minWidth: 120,
    width: '300px',
  },
  helperText:{
    margin: '0px',
    padding: '0px'
  },
  helperText2:{
    margin: '0px',
    padding: '0px',
    paddingTop: '3px',
    paddingLeft: '14px'
  }, 
  input: {
    display: 'none',
  },
  nomePet: {
    '& > *': {
    margin: theme.spacing(1),
    width: '210px',
    },
    marginTop: '-40px'
  },
  obs: {
    marginTop: '-20px',
    marginLeft: '8px',
    width: '840px',
  },
  pesoPet: {
    '& > *': {
    margin: theme.spacing(1),
    width: '230px',
    },
    marginLeft: '300px',
    marginTop: '-107px'
  },
  primeiraDiv:{    
    marginBottom: '20px',
  },
  racaPet: {
    '& > *': {
    margin: theme.spacing(1),
    width: '210px',
    },
    marginLeft: '625px',
    marginTop: '-127px'
  },
  radioGroup: {        
    position: 'fix',
    marginLeft: '750px',
    marginTop: '-90px',
    
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
  success:{
    background: '#349c00',
    color: 'white',
    width: '250px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight:'50px'
  },
  textField: {
    width: '300px',
    marginRight: '45px',
    marginBottom: '20px'
  },
  textFieldRaca: {
    width: '300px',
    marginBottom: '20px',
    marginLeft: '45px',
  },
  titulo: {
    color: 'white',
    fontSize: '22px',
    fontWeight: 'bold',
    display: 'inline-block',
    marginLeft: '60px',
    marginTop: '-24px',
    marginTop: '10px'
  },
  textArea: {
    width: '750px',
    marginBottom: '30px',
    minWidth: '750px',
    maxWidth: '750px',
    minHeight: '50px',
    maxHeight: '120px',
    height:'50px'
  }
  
}));

export default useStyles;