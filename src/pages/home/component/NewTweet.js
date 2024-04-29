import React from 'react';
import useStyle from '../styles'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";


const NewTweet = () => {
    const classes = useStyle();
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={"/images/user-img.png"} className={classes.userImg}/>
                <input placeholder={"توییت کن ..."} className={classes.input}/>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}}>
                <Button variant={"contained"} color={"primary"} className={classes.newTweetBtn}>توییت</Button>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"/images/tweetpic.png"} className={classes.newTweetImg}/>
                </IconButton>
            </Grid>
        </div>
    );
};

export default NewTweet;