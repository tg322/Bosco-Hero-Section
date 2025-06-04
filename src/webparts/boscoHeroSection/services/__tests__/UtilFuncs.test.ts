const { UtilFunctions } = require('../UtilFuncs');

describe('UtilFunctions.buildDateString', () => {
    it('should return a formatted date string', () => {
        const util = new UtilFunctions();
        const result = util.buildDateString();

        expect(result.success).toBe(true);
        expect(result.message).toBe('Date returned successfully.');
        expect(typeof result.data).toBe('string');
        expect(result.data.length).toBeGreaterThan(0);
    });
});