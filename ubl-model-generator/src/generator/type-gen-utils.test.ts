import { capitalize, extractTypeName, formatComment, uncapitalize } from './type-gen-utils'

describe('type-gen-utils', () => {
  test('extractTypeName', () => {
    expect(extractTypeName('SomeType')).toEqual('Some')
  })

  test('extractTypeName empty', () => {
    expect(extractTypeName('Type')).toEqual('')
  })

  test('formatComment splits in two lines for longer text', () => {
    const result = formatComment(' * 12345678', '123 567 9 '.repeat(11))
    expect(result).toContain('\n')
  })

  test('formatComment keeps one line for the exact line length', () => {
    const result = formatComment(' * 1234567', '123 567 9 '.repeat(11))
    expect(result.length).toEqual(120)
  })

  test('formatComment keeps one line for smaller line length', () => {
    const result = formatComment(' * 1234567', '123 567 9 '.repeat(10))
    expect(result.length).toEqual(110)
  })

  test('capitalize', () => {
    expect(capitalize('abc')).toEqual('Abc')
  })

  test('capitalize already does nothing', () => {
    expect(capitalize('Abc')).toEqual('Abc')
  })

  test('capitalize empty', () => {
    expect(capitalize('')).toEqual('')
  })

  test('uncapitalize', () => {
    expect(uncapitalize('Abc')).toEqual('abc')
  })

  test('uncapitalize already does nothing', () => {
    expect(uncapitalize('abc')).toEqual('abc')
  })

  test('uncapitalize empty', () => {
    expect(uncapitalize('')).toEqual('')
  })
})

