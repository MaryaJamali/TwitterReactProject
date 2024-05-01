import React from 'react';
import useStyle from "../home/styles";

const Page404 = () => {
    const classes = useStyle();
    return (
        <div>
            <h1 className={classes.errorTitle}>404</h1>
            <p className={classes.errorText}>ممکن است صفحه ای که به دنبال آن میگردید حذف شده باشد و یا آدرس آن را به درستی وارد نکرده باشید</p>
        </div>
    );
};

export default Page404;