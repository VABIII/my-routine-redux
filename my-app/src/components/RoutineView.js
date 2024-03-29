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
        display: "flex",
        justifyContent: "center",
    },
    content: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2)
    }


}));


const RoutineView = () => {
    const classes = useStyles();
    const routines = ['Push', 'Pull', 'Leg'];


    const onClick = (e) => {
        console.log(e)
        window.location.href = `http://localhost:3000/api/user/${e}`;
    }


    return (
            <Box className={classes.container}>{
                routines.map((x, i) => (
                    <Box className={classes.content} key={i}>
                        <Box>
                            <Typography>{x}</Typography>
                            <Button onClick={() => onClick(x)}>{x}</Button>
                        </Box>
                    </Box>
                ))
            }
            </Box>
    );
};

export default RoutineView;































