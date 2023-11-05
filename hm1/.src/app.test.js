const getPercents = require('./app')

let number = '3700'
let percent = '5'

describe('getPercents tests', () => {

    it('getPercents checking the correct execution', () => {
        const result = getPercents(5, 100)
        expect(result).toBe(5)
    }),

    it('getPercents an incorrectly entered number ', () => {
        const result = getPercents(5, '3700')
        expect(result).toBe(`не можем посчитать проценты от '${number}'`)
    }),
    
    it('getPercents an incorrectly entered percent', () => {
        const result = getPercents('5', 100)
        expect(result).toBe(`не можем посчитать проценты от '${percent}'`)
    })

})