import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from './components/theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <React.StrictMode>
            <App></App>
        </React.StrictMode>
    </ThemeProvider>
);
