import { createForm, testComputedOption } from 'test-helpers'

export { loading, trackBy, limit, maxHeight, } from './options_select'

export const hideSelectedTag = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'hideSelectedTag', false, true)
}

export const search = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'search', false, true)

  it('should have `search` "true" when "create" is "true"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          create: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.search).toBe(true)
  })
}

export const create = function (elementType, elementName, options) {
  testComputedOption(it, elementType, 'create', false, true)
}

export const tagPlaceholder = function (elementType, elementName, options) {
  let form = createForm({
    schema: {
      el: {
        type: elementType,
        native: true,
      }
    }
  })

  testComputedOption(it, elementType, 'tagPlaceholder', form.vm.__('laraform.elements.tags.createLabel'), 'Placeholder tag')
}

export const native = function (elementType, elementName, options) {
  it('should always have "false" for `native`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.native).toBe(false)
  })
}

export const isNative = function (elementType, elementName, options) {
  it('should always have `isNative` "false"', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: true,
        }
      }
    })

    let el = form.vm.el$('el')
    
    expect(el.isNative).toBe(false)
  })
}

export const options = function (elementType, elementName, options) {
  it('should have default `options`', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      limit: el.limit,
      mode: 'tags',
      hideSelectedTag: el.hideSelectedTag,
      maxHeight: el.maxHeight,
      createTag: el.create,
      appendNewTag: false,
    })
  })
  
  it('should extend `options` from schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          options: {
            custom: 'option'
          }
        }
      }
    })

    let el = form.vm.el$('el')

    expect(el.options).toStrictEqual({ 
      searchable: el.search,
      label: 'label',
      trackBy: el.trackBy,
      loading: el.loading,
      limit: el.limit,
      mode: 'tags',
      hideSelectedTag: el.hideSelectedTag,
      maxHeight: el.maxHeight,
      createTag: el.create,
      appendNewTag: false,
      custom: 'option'
    })
  })
  
  it('should set `options` to schema', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
        }
      }
    })

    let el = form.vm.el$('el')

    el.options = {
      custom: 'option'
    }

    expect(el.schema.options).toStrictEqual({
      custom: 'option'
    })
  })
  
  it('should bind `options` to Multiselect when not native', () => {
    let form = createForm({
      schema: {
        el: {
          type: elementType,
          native: false,
        }
      }
    })

    let el = form.vm.el$('el')
    let elWrapper = findAllComponents(form, { name: elementName }).at(0)
    let Multiselect = findAllComponents(elWrapper, { name: 'Multiselect' }).at(0)
    
    _.each(el.options, (value, key) => {
      expect(Multiselect.props(key)).toStrictEqual(value)
    })
  })
}