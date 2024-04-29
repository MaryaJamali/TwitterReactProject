import React from 'react';
import useStyle from './styles'
import Divider from "@material-ui/core/Divider";
import Header from "./component/Header";
import NewTweet from "./component/NewTweet";
import TweetList from "./component/TweetList";

const tweet = [
    {
        sender: {
            name: 'ریحانه صادقی',
            id: 'Reyhaneh_Sadeghi@',
            img: '/images/person1.png',
        },
        text: 'برنامه نویسی یک راه برای ارتباط با دنیای بیرون است. از طریق کدنویسی، افراد می‌توانند ایده‌ها و نگرش‌های خود را با دیگران به اشتراک بگذارند و با همکاری، به رشد و پیشرفت بپردازند. #برنامه_نویسی #ارتباط',
        like:65
    },
    {
        sender: {
            name: 'مرتضی ذاکر',
            id: 'Morteza_Zaker@',
            img: '/images/person2.png',
        },
        text: 'برنامه نویسی یک مسابقه ذهنی است که تمام شور و هیجان خود را در پیش گرفته است. هر خط کد، یک چالش، هر باگ یک فرصت برای رشد و یادگیری جدید است. #برنامه_نویسی #چالش',
        like:110,
    },
    {
        sender: {
            name: 'لیلا خجسته',
            id: 'Leila_Khojasteh@',
            img: '/images/person3.png',
        },
        text: 'برنامه نویسی یک هنر است که با کدنویسی نه تنها ماشین‌ها را به کار می‌انگارد، بلکه دیگران را نیز از تفکر شما بهره‌مند می‌سازد. #برنامه_نویسی #هنر',
        like:50,
    },
]
const Home = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <Header/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList data={tweet}/>
        </div>
    );
};

export default Home;