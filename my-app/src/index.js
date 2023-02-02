import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppView from './AppView';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './modules/I18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Router>
                <AppView />
        </Router>
    </ThemeProvider>
);


