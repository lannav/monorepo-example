module.exports = config => {
    const oldConfig = require('@nrwl/react/plugins/webpack')(config);

    return oldConfig;
};
