import useStyle from './styles'
import Divider from "@material-ui/core/Divider";
import RightSidebar from "../rightSidebar/RightSidebar";
import LeftSidebar from "../leftSidebar/LeftSidebar";


const Layout = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
                {props.children}
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};

export default Layout;