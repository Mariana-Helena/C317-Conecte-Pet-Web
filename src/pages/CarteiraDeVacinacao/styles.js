import { makeStyles } from '@material-ui/core/styles';

const defaultColor = '#1C587C';

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
    buttonContainedBlue:{
        width: '300px',
        marginTop: '30px',
        marginLeft: '50px', 
        color: 'white',
        textTransform: 'inherit',
        display: 'inline-block',
        backgroundColor: defaultColor
    },
    calendario:{
        borderBottom: '1px solid white',
        marginLeft: '95px',
        width: '175px'
    },
    campos: {
        marginLeft: '75px',
    },
    circleGray:{
        backgroundColor: '#E5E9F2',
        borderRadius: '100%',
        width: '130px',
        height: '130px',
        display: 'inline-block',  
        marginLeft: 'auto', 
        marginRight: 'auto',
    },
    closeIcon:{
        color: defaultColor,
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
    divFoto:{
        display: 'inline-block', 
        marginLeft: '20px',
        marginTop: '10px' 
    },
    divFotos:{
        marginLeft: '30px'
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
    },
    table: {
        width: '1080px',   
    },
    tableContainer: {
        width: '1080px',
        marginLeft: '-50px',  
        marginTop: '15px',
    }
}));

export default useStyles;