
const uppercase = require('../uppercase');

xtest(`uppercase 'test' to equal 'TEST'`, () => {   // xtest - skipped
    return uppercase('test').then(str => {
        expect(str).toBe('TEST')
    })
})
    