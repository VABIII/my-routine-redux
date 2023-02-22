import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/styles';
import axios from "axios";
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

const useStyles = makeStyles(theme => {


});


const RoutineView = () => {
    const [routine, setRoutine] = useState([]);
    const classes = useStyles();



    useEffect( () => {
        const fetchUserRoutine = async id => {
            await axios.get(`http://localhost:5000/api/routine/${id}`)
                .then(res => setRoutine(res.data))
                .catch(e => console.error(e));
        };
        fetchUserRoutine(1);
    }, []);

    console.log(routine)

    return (
        <Grid>{
            routine.map(x => (
                <Grid>
                    <Typography>{x.exerciseName}</Typography>
                    <Typography>{x.type}</Typography>
                    <Typography>{x.maxWeight}</Typography>
                </Grid>
            ))
        }</Grid>
    );
};

export default RoutineView;































