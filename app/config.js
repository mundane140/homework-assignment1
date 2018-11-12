/**
 * Configuration Variables
*/

// Container for all environments
var environments = {};

// Staging (default) environment
environments.staging = {
    'httpPort' : 3000,
    'envName' : 'staging'
};

// Production enviroment 
environments.production = {
    'httpPort' : 5000,
    'envName' : 'production'
};

// Determine which envirnoment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the defined environments above, if not, default to 'staging'
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the environment
module.exports = environmentToExport;