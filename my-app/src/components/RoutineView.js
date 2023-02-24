import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/styles';
import axios from "axios";
import Push from "./Push";
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
        flexDirection: "column"

    }

}));


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


    let push = routine.filter(x => {
        return x.type === 'push'
    });
    let pull = routine.filter(x => {
        return x.type === 'pull'
    });
    let leg = routine.filter(x => {
        return x.type === 'leg'
    });

    return (
        <Box className={classes.container}>
            <Push push={push}/>
        </Box>
    );
};

export default RoutineView;































