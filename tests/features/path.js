import { createForm, findAllComponents, testComputedOption } from 'test-helpers'

export const path = function (elementType, elementName) {
  it('should have `path` equal to name if parent is not provided', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.path).toBe(el.vm.name)
  })
}

export const flat = function (elementType, elementName) {
  it('should have `flat` equal to "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = findAllComponents(form, { name: elementName }).at(0)

    expect(el.vm.flat).toBe(false)
  })
}

export default function (elementType) {
  const elementName = `${_.upperFirst(elementType)}Element`

  return () => {
    _.each(exports, (suite) => {
      suite(elementType, elementName)
    })
  }
}