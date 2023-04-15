

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

};

const pushRoutineBuilder = (ud=[]) => {
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

const pullRoutineBuilder = (ud=[]) => {
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

const legRoutineBuilder = (ud=[]) => {
    let finalRoutine = [];

    ud.map(x => {
        if(x.type === 'leg') {
            let name = x.exerciseName;
            let weights = calculateStrengthWeight(x.maxWeight);
            finalRoutine.push({[name]: weights});
        }
    });
    return finalRoutine;
}


export {
    calculateStrengthWeight,
    calculateSizeWeight,
    pushRoutineBuilder,
    pullRoutineBuilder,
    legRoutineBuilder,

}









































