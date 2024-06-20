const jagexClient = require('./jagex');

exports.handler = async (event) => {
    await jagexClient.fetchHiscoreDataForUser('greazydonkey')
};