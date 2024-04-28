import React from 'react';
import useStyle from './styles'
import Typography from "@material-ui/core/Typography";


const Layout = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Typography>توییتر</Typography>
        </div>
    );
};

export default Layout;