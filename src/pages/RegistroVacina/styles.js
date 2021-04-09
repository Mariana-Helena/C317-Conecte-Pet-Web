import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

const useStyles = makeStyles(() => ({
    banner:{    
        width:'100%',
        height:'200px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        marginBottom: '20px'
    },
    calendario:{
        borderBottom: '1px solid white',
        marginLeft: '75px',
    },
    campos: {
        marginLeft: '75px',
    },
    data:{
        color: 'white'
    },
    titulo: {
        color: 'white',
        fontSize: '20px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginLeft: '95px',
        marginTop: '25px',
    },
    textField: {
        width: '300px',
        marginRight: '75px',
        marginBottom: '30px'
    },
    textArea: {
        width: '1000px',
        marginBottom: '30px'
    }
}));

export default useStyles;