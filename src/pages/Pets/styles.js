import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  buttonContainedBlue:{
    width: '300px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto',
    backgroundColor: '#1C587C',
    color: 'white',
    textTransform: 'inherit'
  },
  circleGray:{
    backgroundColor: '#E5E9F2',
    borderRadius: '100%',
    width: '150px',
    height: '150px',
  },
  petDiv:{
    widht: '278px',
    height: '575px',
    float: 'right',
    margin: '30px',
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
    color: '#1C587C',
    fontSize: '20px',
    fontWeight: 'bold'
  },
}));

export default useStyles;