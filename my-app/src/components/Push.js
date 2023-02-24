import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    CardActions,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        width: "100%",
            margin: theme.spacing(2),
            display: "flex",
            justifyContent: "space-around"
    },
    view: {
        justifyContent: "space-around",
        alignContent: "center"
    },
    textTitle:{
        alignSelf: "center",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    text:{
        alignSelf: "center"
    },
    gi: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center"
    }

}));


const Push = props => {
    const {push} = props;
    const classes = useStyles();

    return (
        <>
        <Box className={classes.container}>Your Push Routine</Box>
        <Grid container className={classes.view}>
            {
                push.map(x => (
                    <Grid item>
                        <Card className={classes.gi}>
                            <Typography className={classes.textTitle}>{x.exerciseName}</Typography>
                            <Typography className={classes.text}>{x.maxWeight}</Typography>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
        </>
    );
};

export default Push;
