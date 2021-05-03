import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles((theme) => ({
  avatar: {
    marginTop: '20px',
    marginBottom: '0px',
    marginLeft: '60px',
    width: '130px',
    height: '130px',
    borderRadius: '50%'
  },
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
  camera: {
    width: '50px',
    color: "white",
    marginLeft: '180px',
    marginTop: '-25px',
    display: 'block',
  },
  campos: {
    marginLeft: '75px',
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
  formControl: {
    marginTop: '400px',
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
  logo:{
    width:'65px',  
    display: 'block',
    marginLeft: '-23px', 
  },  
  primeiraDiv:{    
    marginBottom: '20px',
  },
  radioGroup: {        
    position: 'fix',
    marginLeft: '400px',
    marginTop: '-85px',
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
  textFieldCRMV: {
    width: '300px',
    marginLeft: '200px',
    marginTop: '-210px',
    marginBottom: '20px'
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
  toolbar: theme.mixins.toolbar,  
  userName: {
    color: 'white',  
    marginLeft: '30px',
    float: 'left',
    marginTop: '5px'
  },  
}));

export default useStyles;