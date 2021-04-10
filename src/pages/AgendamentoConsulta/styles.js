import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    calendario:{
        borderBottom: '1px solid white',
        marginLeft: '95px',
        width: '175px'
    },
    campos: {
        marginLeft: '75px',
    },
    data:{
        color: 'white',
        fontSize: '20px'
    },
    formControl: {
        margin: '0px',
        minWidth: 120,
        width: '300px',
    },
    hora: {
        border: '1px solid #c0c0c0',
        borderRadius: '4px',
        paddingLeft: '14px',
        paddingTop: '4px',
        paddingBottom: '4px',
        width: '300px'
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
        marginRight: '45px',
        marginBottom: '10px'
    },
    textArea: {
        width: '750px',
        marginBottom: '30px',
        minWidth: '750px',
        maxWidth: '750px',
        minHeight: '50px',
        maxHeight: '120px',
        height:'50px',
        marginTop: '20px'
    }
}));

export default useStyles;