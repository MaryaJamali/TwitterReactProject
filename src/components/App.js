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
                <Route path="/" element={
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/hashtags/:hashtag" element={<TweetsByHashTag />} />
                            <Route path="/languages/:name" element={<TweetsByLanguage />} />
                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
    );
};


export default App;