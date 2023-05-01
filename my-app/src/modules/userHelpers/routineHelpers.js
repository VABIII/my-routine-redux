

const calculateStrengthWeight = (weight) => {
    const wIntervals = [.5, .7, .75, .8, .85, .9]
    let repWeights = [];

    wIntervals.forEach(x => {
       const repWeight = x * weight;
       repWeights.push(Math.round(repWeight));
    });

    return repWeights;

};

const calculateSizeWeight = weight => {
    const wIntervals = [.5, .725, .75, .775, .8, .825]
    let repWeights = [];

    wIntervals.forEach(x => {
        const repWeight = x * weight;
        repWeights.push(Math.round(repWeight));
    });

    return repWeights;
};

const pushStrengthRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'push') {
            let name = x.exerciseName;
            let weights = calculateStrengthWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
}

const pullStrengthRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'pull') {
            let name = x.exerciseName;
            let weights = calculateStrengthWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
}

const legStrengthRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'leg') {
            let name = x.exerciseName;
            let weights = calculateStrengthWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
};

const pushSizeRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'push') {
            let name = x.exerciseName;
            let weights = calculateSizeWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
};

const pullSizeRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'push') {
            let name = x.exerciseName;
            let weights = calculateSizeWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
};

const legSizeRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'push') {
            let name = x.exerciseName;
            let weights = calculateSizeWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
}


export {
    calculateStrengthWeight,
    calculateSizeWeight,
    pushStrengthRoutineBuilder,
    pullStrengthRoutineBuilder,
    legStrengthRoutineBuilder,

}









































