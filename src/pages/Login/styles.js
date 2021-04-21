import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  background:{
    width:'100%',
    height:'auto',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  button:{
    color: '#1C587C',
    width: '300px',
    fontSize: '13px',
    minWidth: '300px',
    maxWidth: '300px',
    position: 'absolute',
    left: '12.5%',
    minWidth: '300px',
    maxWidth: '300px',
  },
  buttonContainedBlue:{
    width: '300px',
    display: 'block',
    backgroundColor: '#1C587C !important',
    color: 'white !important',
    position: 'absolute',
    left: '12.5%',
    minWidth: '300px',
    maxWidth: '300px',
    '&.MuiButtonBase-root':{
      marginBottom: '10px'
    }
  },
  buttonContainedGray:{
    width: '300px',
    display: 'block',
    backgroundColor: '#969FAA !important',
    color: 'white !important',
    position: 'absolute',
    left: '12.5%',
    minWidth: '300px',
    maxWidth: '300px',
  },
  container:{
   
    width:'450px',
    height:'520px',
    backgroundColor:'white',
    padding: 25,
    '&.MuiContainer-root':{
      minWidth: '450px',
      maxWidth: '450px'
    }
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
  form:{
    minWidth: '400px',
    maxWidth: '400px',
    width:'400px',
    height:'450px',
    backgroundColor:'white',
    padding: 0,
    margin: 0
  },
  logo:{
    width:'150px',  
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto'
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
  textfield: {
    minWidth: '300px',
    maxWidth: '300px',
    width: '300px',
    position: 'absolute',
    left: '12.5%',
    '&.MuiFormControl-root':{
      marginTop: '10px'
    }
  },
  titulo: {
    color:'#1C587C', 
    fontSize:'41px',
    fontWeight: 'bold',
  },
  tituloDiv: {
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto', 
    textAlign:'center',
  },
}));

export default useStyles;