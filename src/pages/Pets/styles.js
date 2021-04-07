import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles(() => ({
  buttonContainedBlue:{
    width: '300px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    backgroundColor: defaultColor,
    color: 'white',
    textTransform: 'inherit',
    display: 'inline-block',
    float:  'right'
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
    color: defaultColor,
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'inline-block'
  },
}));

export default useStyles;