import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles((theme) => ({
  banner:{ 
    marginTop: '-20px',   
    width:'100%',
    height:'200px',
    backgroundSize: 'cover',
    marginBottom: '20px'
  },
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
  buttonContained:{
    width:'300px',
    marginLeft: '200px',
    backgroundColor: '#1C587C',
    color: 'white'
  },
  buttonContainedC:{
    width:'300px',
    marginLeft: '200px',
    backgroundColor: '#7A96AC',
    color: 'white'
  },
  radioGroup: {        
    position: 'fix',
    marginLeft: '400px',
    marginTop: '-85px',
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
  campos: {
    marginLeft: '75px',
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
  typePerson: {
    marginTop: '-420px',
    marginLeft: '680px',
    width: '840px',
  },
  avatar: {
    marginTop: '20px',
    marginBottom: '0px',
    marginLeft: '60px',
    width: '130px',
    height: '130px',
  },
  camera: {
    color: "white",
    marginLeft: '180px',
    marginTop: '-25px',
    display: 'block',
  },
  textField: {
    width: '300px',
    marginRight: '45px',
    marginBottom: '20px'
  },
  textFieldCRMV: {
    width: '300px',
    marginLeft: '200px',
    marginTop: '-210px',
    marginBottom: '20px'
  },
  formControl: {
    marginTop: '400px',
    minWidth: 120,
    width: '300px',
  },
  container: {
    width: '1030px',
    minWidth: '1030px',
    maxWidth: '1030px',
  },
  helpertext: {
    marginLeft: '-300px',
    marginTop: '-8px'
  }
  
}));

export default useStyles;