import React from 'react';
import { Link } from 'react-router-dom'
import Login from "./Login";
import {
    Box,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import { useTranslation } from "react-i18next";




const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
        margin: theme.spacing(2)
    },
    text: {
        color: theme.palette.primary.main,
        textDecoration: 'none'
    },
    link: {

    }

}));
const Header = () => {
    const classes = useStyles();
    const { t } = useTranslation(('header'));

    return (
        <Box className={classes.container}>
            <Typography>

                <Link
                    className={classes.text}
                    to={'/api/user/userLogin'}
                    underline={'none'}
                >{t('link1')}
                </Link>
            </Typography>
        </Box>
    );
};

export default Header;

















































