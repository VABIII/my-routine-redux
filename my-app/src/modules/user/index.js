import createContainer from 'constate';
import constate from "constate";
import { useState } from "react";
import axios from "axios";




const getRoutine = id => {
    let r = []

    axios.get(`http://localhost:5000/api/routine/${id}`)
        .then(res => r = res)
        .catch(e => console.error(e))

    return r;
}


const initialize = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userRoutine, setUserRoutine] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({});

    return {
        routine: {
            getUserRoutine: async id => {
                try {
                    const r = await getRoutine(id);
                    console.log(r)
                    setUserRoutine(r);
                    return userRoutine;
                }
                catch {
                    return null;
                }
            }
        }
    }

};


const [Provider, useRoutine] = createContainer(initialize, value => value.routine);



export {
    useRoutine,
}


export default { Provider };

























