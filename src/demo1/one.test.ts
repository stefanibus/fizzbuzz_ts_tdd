import { one } from './one'

describe('FizzBuzz Eins', () => {
  it('EdgeCase: CleverPush with any negative value, like -5 should return empty string', () => {
    expect(one.doFizzBuzz(-5)).toBe('')
  })

  it('CleverPush with 0 should return empty string', () => {
    expect(one.doFizzBuzz(0)).toBe('')
  })

  it('CleverPush with 1 should return an empty string', () => {
    expect(one.doFizzBuzz(1)).toBe('')
  })

  it('CleverPush with 2 should return an empty string', () => {
    expect(one.doFizzBuzz(2)).toBe('')
  })

  it('CleverPush with 3 should return Clever', () => {
    expect(one.doFizzBuzz(3)).toBe('Clever')
  })

  it('CleverPush with 4 should return an empty string', () => {
    expect(one.doFizzBuzz(4)).toBe('')
  })

  it('CleverPush with 5 should return Push', () => {
    expect(one.doFizzBuzz(5)).toBe('Push')
  })

  it('CleverPush with 6 should return Clever', () => {
    expect(one.doFizzBuzz(6)).toBe('Clever')
  })

  it('CleverPush with 10 should return Push', () => {
    expect(one.doFizzBuzz(10)).toBe('Push')
  })

  it('CleverPush with 15 should return CleverPush', () => {
    expect(one.doFizzBuzz(15)).toBe('CleverPush')
  })
})
