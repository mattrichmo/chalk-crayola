// consoleExample.mjs
import chalk from './crayola.mjs';
import { crayolaColours } from './src/colours/colours.mjs';

const consoleExample = () => {
    // Go through and print the crayolaName string from each object in the hex code.
    crayolaColours.forEach(color => {
        console.log(chalk.crayola[color.colourName](color.crayolaName));
    });

    console.log('\n'); // Add a new line for separation

    // Print the crayolaName string in the hex code AND the chalk.bg property of the compliment property.
    crayolaColours.forEach(color => {
        const complimentBg = chalk.bgHex(color.properties.compliment);
        console.log(complimentBg(chalk.crayola[color.colourName](color.crayolaName)));
    });

    console.log('\n'); // Add a new line for separation

    // Print the crayolaName string in the hex code AND the chalk.bg property of the contrast property AND the chalk.dim property of the contrast property.
    crayolaColours.forEach(color => {
        const contrastBg = chalk.bgHex(color.properties.contrast);
        const contrastDim = chalk.crayola[`${color.colourName}Dim`];
        console.log(contrastBg(chalk.crayola[color.colourName](color.crayolaName)) + '   ' + contrastDim('   '));
    });
    console.log('\n'); // Add a new line for separation

    // Print the crayolaName in the dim and bright alternating, printing the crayolaName twice.
    crayolaColours.forEach(color => {
        const dimText = chalk.crayola[`${color.colourName}Dim`](color.crayolaName);
        const brightText = chalk.crayola[`${color.colourName}Bright`](color.crayolaName);
        console.log(dimText + '   ' + brightText);
    });
};

consoleExample();

export default consoleExample;