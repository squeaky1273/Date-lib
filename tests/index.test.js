
const D = require('../src/index')

const date = new Date()
const d = new D(date)
const bDay = new D(1965, 8, 26)

test('D.year', () => {
    expect(d.year).toBe(date.getFullYear())
    expect(bDay.year).toBe(1965)
})

test('D.yr', () => {
    expect(d.yr).toBe(date.getFullYear() % 100)
    expect(bDay.yr).toBe(65)
})

test('D.month', () => {
    expect(bDay.month).toBe('September')
})

test('D.mon', () => {
    expect(bDay.mon).toBe('Sep')
})

test('D.day', () => {
    expect(bDay.day).toBe('Sunday')
})

test('D.dy', () => {
    expect(bDay.dy).toBe('Sun')
})

test('D.date', () => {
    expect(d.date).toBe(date.getDate())
})

test('D.hour', () => {
    expect(d.hour).toBe(date.getHours())
})

test('D.min', () => {
    expect(d.min).toBe(date.getMinutes())
})

test('Test Sec', () => {
    expect(d.sec).toBe(date.getSeconds())
})

test('format', () => {
    expect(d.format(""))
})

// test('when', () => {
//     expect(d.when(""))
// })