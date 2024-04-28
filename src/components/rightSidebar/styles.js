import {makeStyles} from "@material-ui/styles";
// Layout styling
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',
        width: '18%',
        padding: '1.5rem 1rem'
    },
    logoType: {
        fontSize: '1.25rem !important',
        fontWeight: "600 !important",
        marginRight: '2.5rem !important',
        color: theme.palette.primary.main
    },
    hashTagTitle: {
        fontSize: '1.1rem !important',
        fontWeight: "600 !important",
        marginTop: '4rem !important',
        marginBottom: '1.5rem'
    },
    hashtag: {
        marginRight: '0.8rem !important',
        fontWeight: "600 !important",
    },
    hashTagParent: {
        marginBottom: '0.5rem !important',
        padding: "0.15rem !important",
        width: '100%'
    }
}));

export default useStyles;