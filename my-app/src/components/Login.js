import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/styles';
import { Box, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.backgroundColor
    },
    title: {
      color: theme.palette.primary.main,
    }

}));

const Login = () => {
    const classes = useStyles();
    const { t } = useTranslation('login');



    return (
        <Box className={classes.root}>
            <div className={classes.title}>
                <Typography variant='h2'>{t('title')}</Typography>
            </div>

        </Box>
    );
};

export default Login;

















































