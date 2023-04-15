import createContainer from 'constate';
import { useState } from "react";
import axios from "axios";
import {pushRoutineBuilder, pullRoutineBuilder, legRoutineBuilder} from "../../utils/routineHelpers";


const getRoutine = async id => {

    return await axios.get(`http://localhost:5000/api/routine/${id}`)
        .then(res => {
            return res.data
        })
        .catch(e => console.error(e));
}


const initialize = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userPushRoutine, setUserPushRoutine] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userPullRoutine, setUserPullRoutine] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userLegRoutine, setUserLegRoutine] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({});

    return {
        routine: {
            getUserRoutines: async id => {

                    await getRoutine(id)
                        .then(res => {
                            let push = pushRoutineBuilder(res);
                            let pull = pullRoutineBuilder(res);
                            let leg = legRoutineBuilder(res);
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


const [Provider, useRoutine] = createContainer(initialize, value => value.routine);



export {
    useRoutine,
}


export default { Provider };

























