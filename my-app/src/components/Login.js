import React, {useState, useEffect, useContext} from 'react';
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
import UserContext from "../contexts/UserContext";

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.backgroundColor
    },
    title: {
      color: theme.palette.primary.main,
    },
    inputs: {
        margin: theme.spacing(2)
    },
    outerBox: {
        background: theme.palette.backgroundColor,
        margin: theme.spacing(8),
        padding: theme.spacing(2),
        width: "75%",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column"
        // justifyContent: "center",
        // borderRadius: theme.spacing(1)
    },
    innerBox: {
        background: "darkslategray",
        display: "flex",
        flexGrow: "1",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        flexDirection: "column"
    }

}));


const Login = () => {
    const classes = useStyles();
    const [values, setValues] = useState("");
    const [r, setR] = useState([]);
    const { t } = useTranslation('login');
    const userId = 1
    const routine = useContext(UserContext);



    const onChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onClick = () => {


    };

    for (let i = 0; i < routine.length; i++) {
        console.log(Object.keys(routine[i])[0] )
        console.log(Object.values(routine[i]) )
    }



    return (
        <Box className={classes.container}>
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
            <Card className={classes.outerBox}>
                <CardContent className={classes.innerBox}>
                    <Typography>
                        some exercise:&nbsp;&nbsp;
                    </Typography>
                    <Typography>
                        some weight
                    </Typography>
                </CardContent>
                <CardContent className={classes.innerBox}>
                    <Typography>
                        some exercise:&nbsp;&nbsp;
                    </Typography>
                    <Typography>
                        some weight
                    </Typography>
                </CardContent>


            </Card>
        </Box>
    );
};

export default Login;

















































