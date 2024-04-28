import useStyle from './styles'
import Divider from "@material-ui/core/Divider";
import RightSidebar from "../rightSidebar/RightSidebar";

const Layout = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
        </div>
    );
};

export default Layout;