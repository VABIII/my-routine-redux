import { makeStyles } from '@material-ui/styles';
import React, { useState, useContext } from 'react';
import UserContext from "../contexts/UserContext";
import Weights from "./Weights";
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
        textAlign: "center",
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
    },
    exerciseBox: {
        margin: theme.spacing(2),
        borderBottom: 1,
        borderColor: "whitesmoke",
        justifyContent: "center",
        textAlign: "center"
    },
    weightsContainer: {
        justifyContent: "center"
    }

}));


const Push = props => {
    const [exercises, setExercises] = useState([]);
    const classes = useStyles();
    let strength = [];
    const routine = useContext(UserContext);


    return (
        <Box className={classes.container}>
        <Box className={classes.view}>
        <Box >
            <Typography className={classes.textTitle}>Your Push Routine</Typography>
        </Box>
        <Box className={classes.view}>
            {
                routine.map((x, i) => {
                    const name = Object.keys(x)
                    const w = Object.values(x)

                    return (
                    <Card key={i} c>
                        <CardContent className={classes.exerciseBox}>
                            <Box>
                                <Typography>{name}</Typography>
                            </Box>
                            <Grid container className={classes.weightsContainer}>
                                <Weights w={w}/>
                            </Grid>
                        </CardContent>
                    </Card>
                    )

                })



            }
        </Box>
        </Box>
        </Box>
    );
};

export default Push;
