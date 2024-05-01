import React from 'react';
import Layout from "./layout/Layout";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/home/Home";
import TweetsByHashTag from "../pages/tweetsByHashtag/TweetsByHashTag";
import TweetsByLanguage from "../pages/tweetsByLanguage/TweetsByLanguage";
import Page404 from "../pages/page404/Page404";
import {Switch} from "@material-ui/core";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} render={() => {
                    return <Layout>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/hashtags/:hashtag"} component={TweetsByHashTag}/>
                            <Route exact path={"/languages/:name"} component={TweetsByLanguage}/>
                            <Route component={Page404}/>
                        </Switch>
                    </Layout>
                }}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;