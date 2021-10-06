import { one } from './eins'

describe('FizzBuzz Eins', () => {
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

describe('FizzBuzz extended', () => {
  it('CleverPush extended with 0 should return empty string', () => {
    expect(one.doFizzBuzzExtended(0)).toBe('')
  })

  it('CleverPush extended with 1 should return an empty string', () => {
    expect(one.doFizzBuzzExtended(1)).toBe('')
  })

  it('CleverPush extended with 2 should return an empty string', () => {
    expect(one.doFizzBuzzExtended(2)).toBe('')
  })

  it('CleverPush extended with 3 should return Clever', () => {
    expect(one.doFizzBuzzExtended(3)).toBe('Clever')
  })

  it('CleverPush extended with 4 should return an empty string', () => {
    expect(one.doFizzBuzzExtended(4)).toBe('')
  })

  it('CleverPush extended with 5 should return Push', () => {
    expect(one.doFizzBuzzExtended(5)).toBe('Push')
  })

  it('CleverPush extended with 6 should return Clever', () => {
    expect(one.doFizzBuzzExtended(6)).toBe('Clever')
  })

  it('CleverPush extended with 10 should return Push', () => {
    expect(one.doFizzBuzzExtended(10)).toBe('Push')
  })

  it('CleverPush extended with 13 should return Clever', () => {
    expect(one.doFizzBuzzExtended(13)).toBe('Clever')
  })

  it('CleverPush extended with 15 should return CleverPush', () => {
    expect(one.doFizzBuzzExtended(15)).toBe('CleverPush')
  })

  it('CleverPush extended with 25 should return Push', () => {
    expect(one.doFizzBuzzExtended(25)).toBe('Push')
  })

  it('CleverPush extended with 35 should return CleverPush', () => {
    expect(one.doFizzBuzzExtended(35)).toBe('CleverPush')
  })

  it('CleverPush extended with 52 should return Push', () => {
    expect(one.doFizzBuzzExtended(52)).toBe('Push')
  })

  it('CleverPush extended with 53 should return CleverPush', () => {
    expect(one.doFizzBuzzExtended(53)).toBe('CleverPush')
  })
})
