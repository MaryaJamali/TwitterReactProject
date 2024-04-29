import React from 'react';
import useStyle from '../styles'
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";


const Header = () => {
    const classes = useStyle();
    return (
        <div className={classes.header}>
            <HomeIcon/>
            <Typography className={classes.headerTitle}>
                خانه
            </Typography>
        </div>
    );
};

export default Header;