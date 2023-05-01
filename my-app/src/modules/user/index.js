import createContainer from 'constate';
import { useState } from "react";
import axios from "axios";
import {pushStrengthRoutineBuilder, pullStrengthRoutineBuilder, legStrengthRoutineBuilder} from "../userHelpers/routineHelpers";


const getRoutine = async id => {

    return await axios.get(`http://localhost:5000/api/routine/${id}`)
        .then(res => {
            return res.data
        })
        .catch(e => console.error(e));
}


const Initialize = () => {

    const [userPushRoutine, setUserPushRoutine] = useState([]);
    const [userPullRoutine, setUserPullRoutine] = useState([]);
    const [userLegRoutine, setUserLegRoutine] = useState([]);
    const [user, setUser] = useState({});

    return {
        userdata: {

        },
        routine: {
            getUserStrengthRoutines: async id => {

                    await getRoutine(id)
                        .then(res => {
                            let push = pushStrengthRoutineBuilder(res);
                            let pull = pullStrengthRoutineBuilder(res);
                            let leg = legStrengthRoutineBuilder(res);
                            setUserPushRoutine(push);
                            setUserPullRoutine(pull);
                            setUserLegRoutine(leg);
                        })
                        .catch(e => {
                            console.error(e);
                            return null;
                        });
            },
            userPushRoutine,
            userPullRoutine,
            userLegRoutine,
        },
    }
};


const [Provider, useUser, useRoutine] = createContainer(
    Initialize,
    value => value.userdata,
    value => value.routine,
    );


export {
    useUser,
    useRoutine,
}


export default {Provider};

























