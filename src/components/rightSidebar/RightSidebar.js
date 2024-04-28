import React from 'react';
import useStyle from './styles'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";


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
            <Grid container direction={"row"} alignItems={"center"}>
                <Grid item> <img src={"/images/logo.png"}/> </Grid>
                <Grid item>
                    <Typography className={classes.logoType}>
                        توییتر فارسی
                    </Typography>
                </Grid>
            </Grid>
            <Typography className={classes.hashTagTitle}>
                داغ ترین هشتک ها
            </Typography>
            <Grid container direction={"column"} alignItems={"center"}>
                {
                    hashTags.map(item =>
                        <ButtonBase className={classes.hashTagParent}>
                            <Grid item container>
                                <img src={"/images/hashtag.png"}/>
                                <Typography className={classes.hashtag}>
                                    {item}
                                </Typography>
                            </Grid>
                        </ButtonBase>
                    )
                }
            </Grid>
        </div>
    );
};

export default RightSidebar;