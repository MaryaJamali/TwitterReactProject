import React from 'react';
import useStyle from '../styles'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";


const Tweet = ({data}) => {

    const renderTweet = (text) => {
        return {__html: text.replace(/#\S+/g, "<a href='/tags/$&' style='color:cornflowerblue'>$&</a>")};
    };

    const classes = useStyle();
    return (
        <div className={classes.tweetItem}>
            <Grid container>
                <img src={data.sender.img} className={classes.userImg}/>
                <Grid item container direction={"column"} style={{flex: 1, marginRight: '1rem'}}>
                    <Grid item container>
                        <Typography className={classes.tweetItemName}>{data.sender.name}</Typography>
                        <Typography className={classes.tweetItemId}>{data.sender.id}</Typography>
                    </Grid>
                    <Typography dangerouslySetInnerHTML={renderTweet(data.text)} className={classes.tweetText} component={"p"}/>
                </Grid>
            </Grid>
            <Grid container direction={"row-reverse"} style={{marginTop: 16}} alignItems={'center'}>
                <IconButton className={classes.newTweetImgBtn}>
                    <img src={"/images/retweet.png"} className={classes.newTweetImg}/>
                </IconButton>
                <IconButton className={classes.newTweetImgBtn}>
                    <FavoriteIcon style={{color: 'red'}}/>
                </IconButton>
                <Typography className={classes.likeCount}>{data.like}</Typography>
            </Grid>
        </div>
    );
};

export default Tweet;