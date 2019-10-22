import { makeStyles } from '@material-ui/styles';
import bg from '../../assets/images/bg3.jpg'

const useStyles = makeStyles(theme => ({
    root: {
      backgroundColor: theme.palette.background.default,
      height: '100%'
    },
    grid: {
      height: '100%'
    },
    quoteContainer: {
      [theme.breakpoints.down('md')]: {
        display: 'none'
      }
    },
    quote: {
      backgroundColor: '#03a9f5',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    },
    quoteInner: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      flexBasis: '600px',
      height: '100%',
      backgroundColor: '#03a9f5',
      opacity: '0.8'
     
    },
    quoteText: {
      color: theme.palette.white,
      fontWeight: 700,
    },
    quoteTextInner:{
        color: theme.palette.white,
        marginTop: theme.spacing(2),
        fontWeight: 200,
    },
    name: {
      marginTop: theme.spacing(3),
      color: theme.palette.white
    },
    bio: {
      color: theme.palette.white
    },
    contentContainer: {},
    content: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    contentHeader: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: theme.spacing(5),
      paddingBototm: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    logoImage: {
      marginLeft: theme.spacing(4)
    },
    contentBody: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
      }
    },
    form: {
      paddingLeft: 100,
      paddingRight: 100,
      paddingBottom: 125,
      flexBasis: 700,
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      }
    },
    title: {
      marginTop: theme.spacing(3)
    },
    socialButtons: {
      marginTop: theme.spacing(3)
    },
    socialIcon: {
      marginRight: theme.spacing(1),
    },
    FacebookIcon:{
      backgroundColor: '#03a9f5',
      '&:hover':{
        backgroundColor: '#03a9f5',
      }
    },
    sugestion: {
      marginTop: theme.spacing(2)
    },
    textField: {
      marginTop: theme.spacing(2)
    },
    signInButton: {
      margin: theme.spacing(2, 0)
    }
  }));
  
  export default useStyles;