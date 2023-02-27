

const calculateStrengthWeight = (weight) => {
    const wIntervals = [.5, .7, .75, .8, .85, .9]
    let repWeights = [];

    wIntervals.forEach(x => {
       const repWeight = x * weight;
       repWeights.push(repWeight);
    });

    return repWeights;

};

const calculateSizeWeight = weight => {

};


export {
    calculateStrengthWeight,
    calculateSizeWeight,

}









































