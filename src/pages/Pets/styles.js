import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles(() => ({
  buttonContainedBlue:{
    width: '300px',
    marginBottom: '10px',
    marginLeft: 'auto', 
    marginRight: 'auto',
    color: 'white',
    textTransform: 'inherit',
    display: 'inline-block',
    float:  'right',
    backgroundColor: defaultColor
  },
  container: {
    marginLeft: '75px',
    marginTop: '25px',
    marginRight: '25px'
  },
  closeIcon:{
    color: defaultColor,
    fontSize: '32px',
  },
  closeIconButton:{
    marginLeft: '170px',
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
  error: {
    background: '#a30000',
    color: 'white',
    width: '250px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '50px'
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
  success: {
    background: '#349c00',
    color: 'white',
    width: '250px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '50px'
  },
  titulo: {
    color: defaultColor,
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'inline-block'
  },
}));

export default useStyles;