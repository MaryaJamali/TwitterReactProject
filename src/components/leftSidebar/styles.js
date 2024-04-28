import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        width: '25%',
        padding: '1.5rem 2rem'
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    profText: {
        marginLeft: '0.5rem',
        width: 'max-content',
        direction: 'ltr'
    },
    profName: {
        flex: 1,
        fontWeight:'bold'
    },
    profEmail: {
        flex: 1,
        color: theme.palette.text.hint,
        fontSize: '0.78rem'
    },
    twitterNameParent: {
        marginRight: '0.5rem',
        width: 'max-content',
    },
    twitterRoot: {
        background: "#f5f8fa",
        marginTop: "3rem",
        borderRadius: "2.5rem",
        padding: "11px 24px"
    },
    twitterTitle: {
        fontSize: '1.1rem !important',
        fontWeight: "600 !important",
        marginBottom: '11px'
    },
    twitterParent: {
        padding: '10px 0'
    },
    menu: {
        backgroundColor: 'white',
        padding: '1rem',
    },
    twitterImg: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    }
}));


export default useStyles;
