import React, {useState} from 'react';
import axios from 'axios';
import useStyles from './styles.js';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';

export default function ExcluirConsulta(props) {

  /** 
  * CSS
  */
  const styles = useStyles();
  /**
    * Messagens de erro/sucesso
    */
   const [openSnackbar, setOpenSnackbar] = useState(false);
   const [message, setMessage] = useState('');
   const [success, setSuccess] = useState(false);
 
   const handleClose = () => {
     props.onClose(false);
   };
 
   const handleDelete = () => {
     axios.delete(`/veterinario/consultas/${props.consulta._id}`)
       .then(() => {
         props.deleted(true);
         props.onClose(true);
       })
       .catch(err => {
         setOpenSnackbar(true);
         setMessage('Erro! Não foi possível deletar o registro!');
         setSuccess(false);
       });
   };

  return (
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        ></Snackbar>
        <DialogTitle id="alert-dialog-title">{"Atenção!!!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Você tem certeza que deseja excluir essa consulta desse pet?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button id="button-cancelar" onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button id="button-confirmar" onClick={handleDelete} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
  );
}