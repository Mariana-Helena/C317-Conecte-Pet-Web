import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 200;
const defaultColor = '#1C587C';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  barraSuperior: {
    backgroundColor: defaultColor,
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
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
    color: defaultColor,
  },
  itemSelected: {
    color: 'white',
  },
  text: {
    color: defaultColor,
    fontWeight: 'bold'
  },
  textSelected: {
    color: 'white',
    fontWeight: 'bold'
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
      backgroundColor: defaultColor,
      color: "white",
      fontWeight: 600
    }
  },
  toolbar: theme.mixins.toolbar,
  vaccineIcon: {
    fontSize: '21px',
    color: defaultColor,
  },
  vaccineIconSelected: {
    fontSize: '21px',
    color: 'white'
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
    borderRadius:'50%',
    width: '40px',
    height: '40px'
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