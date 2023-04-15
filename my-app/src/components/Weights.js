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
        width: "75%"
    },
    weight: {
        margin: theme.spacing(2),
        width: "100%",
        color: "#172B4D"
    },
    weightBox: {
        background: "whitesmoke",
        borderRadius: "12px",
        maxWidth: "33%"
    }

}));



const Weights = props => {
    const classes = useStyles();
    const { w } = props;

    return (
        <Box  className={classes.weightContainer}>{
            w[0].map((x, i) => {
                return(
                    <Box className={classes.weightBox}>
                        <Typography key={i} className={classes.weight}>
                            {x}
                        </Typography>
                    </Box>

                )
            })

        }</Box>

    );
};

export default Weights;
