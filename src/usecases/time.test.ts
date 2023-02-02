import { formatTimeFromMilliseconds } from './time'

describe('formatTimeFromMilliseconds', () => {
  it('should return 00:00 if the milliseconds is 0', () => {
    expect(formatTimeFromMilliseconds(0)).toBe('00:00')
  })
  it('should return 00:01 if the milliseconds is 1000', () => {
    expect(formatTimeFromMilliseconds(1000)).toBe('00:01')
  })
  it('should return 01:00 if the milliseconds is 60000', () => {
    expect(formatTimeFromMilliseconds(60000)).toBe('01:00')
  })
  it('should return 01:01 if the milliseconds is 61000', () => {
    expect(formatTimeFromMilliseconds(61000)).toBe('01:01')
  })
  it('should return 10:00 if the milliseconds is 600000', () => {
    expect(formatTimeFromMilliseconds(600000)).toBe('10:00')
  })
  it('should return 10:01 if the milliseconds is 601000', () => {
    expect(formatTimeFromMilliseconds(601000)).toBe('10:01')
  })
  it('should return 10:10 if the milliseconds is 610000', () => {
    expect(formatTimeFromMilliseconds(610000)).toBe('10:10')
  })
})
