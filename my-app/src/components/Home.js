import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
import { Box, CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        padding: theme.spacing(2),
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // background: theme.palette.backgroundColor
    },
    title: {
        color: theme.palette.primary.main,
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    },
    subHead: {
        color: theme.palette.secondary.A400,
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    }
    }));

const Home = () => {
const  classes = useStyles();
const { t } = useTranslation('Home')

        return (
            <Box className={classes.root}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    {t('title1')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.subHead} l>
                    {t('subTitle')}
                </Typography>
            </Box>
        );
}



export default Home;












































