const DatabaseService = require('../framework/DatabaseService');

module.exports = (() => {
    return {
        DatabaseService: new DatabaseService()
    }
})();
