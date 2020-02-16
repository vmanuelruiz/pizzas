const { loadData } = require('./helpers/functions');
const CONSTANTS = require('./helpers/constants');

const main = async () => {
    try {
        const { MAXIMUN_SLICES, PIZZA_TYPES } = await loadData(CONSTANTS.FILES.A);
        console.log(`Maximun slices: ${MAXIMUN_SLICES}`);
        console.log(`Amount of types: ${PIZZA_TYPES.length}`);
        console.log(`Number of types: ${PIZZA_TYPES.toString()}`);

    } catch (err) {
        console.log(`An error ocurred in main: ${err.message}`)
    }
};

main();