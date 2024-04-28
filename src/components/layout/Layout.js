import useStyle from './styles'
import Divider from "@material-ui/core/Divider";
import RightSidebar from "../rightSidebar/RightSidebar";
import LeftSidebar from "../leftSidebar/LeftSidebar";

const Layout = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div>main</div>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};

export default Layout;