// crayola.mjs
import chalk from 'chalk';
import { crayolaColours } from './src/colours/colours.mjs';

const crayolaFunctions = {};

crayolaColours.forEach(color => {
    // Function for main color
    crayolaFunctions[color.colourName] = (text) => chalk.hex(color.properties.hex)(text);

    // Add functions for properties of the crayola color (dim, bright, etc.)
    Object.keys(color.properties).forEach(property => {
        const functionPropertyName = `${color.colourName}${property.charAt(0).toUpperCase() + property.slice(1)}`;
        crayolaFunctions[functionPropertyName] = (text) => chalk.hex(color.properties[property])(text);
    });
});

// Attach Crayola themes to Chalk
chalk.crayola = crayolaFunctions;

export default chalk;