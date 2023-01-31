import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from "react-i18next";
import { CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: theme.palette.backgroundColor
    },
    title: {
        color: theme.palette.primary.main,
        display: "flex",
        alignSelf: "center",
        justifyContent: "center"
    },
    media: {
        height: 140,
    }
    }));

const Home = () => {
const  classes = useStyles();
const { t } = useTranslation('Home')

        return (
            <div className={classes.root}>
                <div>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                {t('title1')}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {t('subTitle')}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </div>
            </div>
        );
}



export default Home;












































