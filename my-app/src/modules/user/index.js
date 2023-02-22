import createContainer from 'constate';
import constate from "constate";
import { useState, createContext } from "react";
import axios from "axios";


const [routineProvider, useRoutineContext] = constate( async () => {
        const [routine] = useState([]);
        return routine;
});




export const fetchUserRoutine = async id => {
    await axios.get(`http://localhost:5000/api/routine/${id}`)
        .then(res => {
            return res.data;
        })
        .catch(e => console.error(e));
}

export const RoutineContext = createContext({
    fu: fetchUserRoutine(1),

});




const Initialize = () => {
    const [routine, setRoutine] = useState([]);

    return {
        fetchRoutine: async (id) => {
            const r = await axios.get(`http://localhost:5000/api/routine/${id}`)
                .then(res => {
                    setRoutine(res.data);
                })
                .catch(e => console.error(e));
            return routine;
        }
    }
};

const [Provider, useRoutine] = createContainer(Initialize);

export { useRoutine };

export default Provider;













































