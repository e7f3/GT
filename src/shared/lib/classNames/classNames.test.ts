import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('Base class name (string)', () => {
    expect(classNames('test')).toBe('test')
  })

  test('Some class names (in array)', () => {
    const classNamesArray = ['test1', 'test2', 'test3']
    const result = classNamesArray.join(' ')
    expect(classNames('', {}, classNamesArray)).toBe(result)
  })

  test('Some class names (in object)', () => {
    const classNamesObj = {
      test1: true,
      test2: false,
      test3: true,
    }
    expect(classNames('', classNamesObj, [])).toBe('test1 test3')
  })

  test('Base class name + some classNames (in object)', () => {
    const classNamesObj = {
      test2: true,
      test3: false,
      test4: true,
    }
    expect(classNames('test1', classNamesObj, [])).toBe('test1 test2 test4')
  })

  test('Base class name + some class names (in array)', () => {
    const baseClassName = 'test1'
    const classNamesArray = ['test2', 'test3', 'test4']
    const result = `${baseClassName} ${classNamesArray.join(' ')}`
    expect(classNames(baseClassName, {}, classNamesArray)).toBe(result)
  })

  test('All together', () => {
    const classNamesObj = {
      test2: true,
      test3: false,
      test4: true,
    }
    const classNamesArray = ['test5', 'test6', 'test7']
    expect(classNames('test1', classNamesObj, classNamesArray)).toBe(
      'test1 test2 test4 test5 test6 test7'
    )
  })
})
