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
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    fontSize: '13px'
  },
  buttonContainedBlue:{
    width: '300px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    backgroundColor: '#1C587C',
    color: 'white',
  },
  buttonContainedGray:{
    width: '300px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    backgroundColor: '#969FAA',
    color: 'white',
  },
  container:{
    width:'500px',
    height:'520px',
    backgroundColor:'white',
    padding: 25
  },
  logo:{
    width:'150px',  
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto'
  },
  textfield: {
    width: '300px',
    marginTop: '20px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto'
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