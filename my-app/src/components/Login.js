import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/styles';
import {useRoutine} from "../modules/user";
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    CardActions,
    Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.backgroundColor
    },
    title: {
      color: theme.palette.primary.main,
    },
    inputs: {
        margin: theme.spacing(2)
    }

}));


const Login = () => {
    const classes = useStyles();
    const [values, setValues] = useState("");
    const [r, setR] = useState([]);
    const { t } = useTranslation('login');
    const userId = 1
    const routine = useRoutine();


    console.log(r)
    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value
        });

        console.log(values);
    };

    const onClick = () => {


    };
    console.log(routine)

    return (
        <Card className={classes.root}>
            <CardContent className={classes.title}>
                <Typography variant='h2'>{t('title')}</Typography>
                <Box>
                    <TextField className={classes.inputs} name={'userName'} onChange={onChange} label={t('label1')}></TextField>
                    <TextField className={classes.inputs} name={'password'} onChange={onChange} label={t('label2')}></TextField>
                </Box>
            </CardContent>
            <CardActions>
                <Button onClick={onClick} n>{t('action1')}</Button>
            </CardActions>
        </Card>
    );
};

export default Login;

















































