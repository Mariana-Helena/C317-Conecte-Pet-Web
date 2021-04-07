import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  barraSuperior: {
    backgroundColor: '#1C587C',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  item: {
    color: '#1C587C',
  },
  itemSelected: {
    color: 'white',
  },
  logo:{
    width:'200px',  
    display: 'block',
    marginLeft: 'auto', 
    marginRight: 'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  root: {
    display: 'flex',
  },
  selectedItem: {
    '&.Mui-selected': {
      backgroundColor: "#1C587C",
      color: "white",
      fontWeight: 600
    }
  },
  toolbar: theme.mixins.toolbar,
  vaccineIcon: {
    fontSize: '21px'
  },
  user:{
    position:'fixed',
    width: 'auto',
    right: 0,
    marginRight: '30px'
  },
  userIcon: {
    fontSize: '40px',
    float: 'left',
    marginRight: '10px',
  },
  userMenu: {
    marginTop: '10px'
  },
  userName: {
    marginRight: '10px',
    float: 'left',
    fontSize: '15px',
    marginTop: '10px'
  },
}));

export default useStyles;