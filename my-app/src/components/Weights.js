import { makeStyles } from '@material-ui/styles';
import React from 'react';
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
    weightContainer: {
        margin: theme.spacing(2),
        justifyContent: "center",
        alignContent: "center"
    },
    weight: {
        margin: theme.spacing(2),
        alignSelf: "center"
    }

}));



const Weights = props => {
    const classes = useStyles();
    const { w } = props;
    // console.log(weights)
    // const name = Object.keys(weights)
    // const weightArr = Object.values(weights);


    return (
        <Grid item className={classes.weightContainer}>{
            w[0].map((x, i) => {
                return(
                    <Typography key={i} className={classes.weight}>
                        {x}
                    </Typography>

                )
            })

        }</Grid>

    );
};

export default Weights;
