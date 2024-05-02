import React from 'react';
import useStyle from './styles'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";


const hashTags = [
    "پرچم _ داران _ پایتون",
    "پرچم _ داران _ جنگو",
    "پرچم_داران_طراحی_وب",
    "پرچم_داران_جاوااسکریپت",
    "پرچم_داران_ری اکت",
];
const RightSidebar = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Link to={"/"}>
                <Grid container direction={"row"} alignItems={"center"}>
                    <Grid item> <img src={"/images/logo.png"} alt={"React"}/> </Grid>
                    <Grid item>
                        <Typography className={classes.logoType}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                </Grid>
            </Link>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتک ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>
                            <Link to={"/hashtags/" + item} style={{width: '100%'}}>
                                <Grid item container>
                                    <img src={"/images/hashtag.png"} alt="React"/>
                                    <Typography className={classes.hashtag}>
                                        {item}
                                    </Typography>
                                </Grid>
                            </Link>
                        </ButtonBase>
                    )
                }
            </Grid>
        </div>
    );
};

export default RightSidebar;