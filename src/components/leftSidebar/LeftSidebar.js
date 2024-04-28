import React from "react";
import useStyle from './styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ButtonBase from "@material-ui/core/ButtonBase";


const Twitter = ({name, id, img}) => {
    const classes = useStyle();
    return <ButtonBase><Grid container direction={"row"} className={classes.twitterParent}>
        <img src={img} className={classes.userImg}/>
        <Grid item container direction={"column"} className={classes.twitterNameParent}>
            <Typography className={classes.profName}>{name}</Typography>
            <Typography className={classes.profEmail}>{id}</Typography>
        </Grid>
    </Grid></ButtonBase>
}

const twitter = [
    {
        name: "Sumsung",
        id: "sumsung@",
        img: "/images/samsung.png"
    },
    {
        name: "بیل گیتس",
        id: "BillGates@",
        img: "/images/bil.png"
    },
    {
        name: "شرلی ونگ",
        id: "Shirly_IMC@",
        img: "/images/shily.png"
    },
    {
        name: "مایک بای",
        id: "Mike_IMC@",
        img: "/images/mike.png"
    }
]
const LeftSidebar = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Grid container direction={"row-reverse"}>
                <img src={"/images/user-img.png"} className={classes.userImg}/>
                <Grid item container direction={"column"} className={classes.profText}>
                    <Typography className={classes.profName}>مریم جمالی</Typography>
                    <Typography className={classes.profEmail}>m.jamali16@yahoo.com</Typography>
                </Grid>
            </Grid>
            <Grid item container direction={"column"} className={classes.twitterRoot}>
                <Typography className={classes.twitterTitle}>بهترین خبرنگاران</Typography>
                <Divider style={{marginLeft: -24, marginRight: -24}}/>
                {
                    twitter.map((item, index) => {
                        return (<React.Fragment><Twitter name={item.name} id={item.id} img={item.img}/>
                            {index !== twitter.length - 1 &&
                                <Divider style={{marginLeft: -24, marginRight: -24}}/>}
                        </React.Fragment>)
                    })
                }
            </Grid>
        </div>
    )
}

export default LeftSidebar;