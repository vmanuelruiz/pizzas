const fs = require('fs');
const path = require('path');

const loadData = async (fileName) => {
    try {
        let MAXIMUN_SLICES;
        let PIZZA_TYPES = [];
        const filePath = path.resolve(__dirname, `../data/${fileName}`);

        const file = fs.readFileSync(filePath, 'utf8');
        const fileLines = file.split(/\r?\n/);
        for (const line of fileLines) {
            if (line !== "") {
                if (MAXIMUN_SLICES === undefined) {
                    MAXIMUN_SLICES = line.split(' ')[0];
                } else {
                    PIZZA_TYPES = line.split(" ").map(val => Number(val) + 1);
                }
            }
        }

        return { MAXIMUN_SLICES, PIZZA_TYPES };
    } catch (err) {
        console.log(`An error ocurred in loadData: ${err.message}`);
    }
};

module.exports = { loadData };