import useStyle from './styles'
import Divider from "@material-ui/core/Divider";
import RightSidebar from "../rightSidebar/RightSidebar";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import Home from "../../pages/home/Home";
import TweetsByHashTag from "../../pages/tweetsByHashtag/TweetsByHashTag";
import TweetsByLanguage from "../../pages/TweetsByLanguage/TweetsByLanguage";

const Layout = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <RightSidebar/>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <div className={classes.content}>
                <Home/>
            </div>
            <Divider orientation={"vertical"} className={classes.divider}/>
            <LeftSidebar/>
        </div>
    );
};

export default Layout;