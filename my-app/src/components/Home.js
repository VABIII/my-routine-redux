import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { CardActionArea, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3),
        width: "100%",
        display: "flex",
        // alignContent: "center",
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

        return (
            <div className={classes.root}>
                {/*<div className={classes.title}>*/}
                {/*    <h1>Hey You Guys!!!!!!!</h1>*/}
                {/*</div>*/}
                <div>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                            title="Surprised monkey"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                                OMG it's a Monkey!
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Monkey is a common name that may refer to groups or species of mammal. The term is applied descriptively to groups of primates
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </div>
            </div>
        );
}



export default Home;












































