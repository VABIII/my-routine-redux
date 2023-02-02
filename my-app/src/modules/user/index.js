import axiosWithAuth from "../../utils/axiosWithAuth";
import createContainer from 'constate';
import { useState } from "react";
import axios from "axios";

const Initialize = () => {
    const [routine, setRoutine] = useState([]);

    return {
        fetchRoutine: async () => {
            const r = await axios.get('http://localhost:5000/api/routine/1')
                .then(res => setRoutine(res.data))
                .then(e => console.error(e))

            return routine;
        }
    }
};

const [Provider, useRoutine] = createContainer(Initialize);

export { useRoutine };

export default Provider;













































