import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles(() => ({
  error: {
    background: '#a30000',
    color: 'white',
    width: '300px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '50px'
  }, success: {
    background: '#349c00',
    color: 'white',
    width: '300px',
    height: '50px',
    borderRadius: '10px',
    textAlign: 'center',
    lineHeight: '50px'
  }
}));

export default useStyles;