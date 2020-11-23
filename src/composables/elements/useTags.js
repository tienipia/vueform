import { toRefs, onMounted, markRaw } from 'composition-api'
import useForm$ from './../useForm$'
import useTheme from './../useTheme'
import useInput from './features/useInput'
import usePath from './features/usePath'
import useConditions from './../useConditions'
import useData from './features/useData'
import useDefault from './features/useDefault'
import useValidation from './features/useValidation'
import useLabel from './features/useLabel'
import useFloating from './features/useFloating'
import usePlaceholder from './features/usePlaceholder'
import useClasses from './features/useClasses'
import useId from './features/useId'
import useColumns from './features/useColumns'
import useDescription from './features/useDescription'
import useReadonly from './features/useReadonly'
import useInfo from './features/useInfo'
import useBaseElement from './features/useBaseElement'
import useView from './features/useView'
import useComponents from './features/useComponents'
import useLayout from './features/useLayout'
import useSlots from './features/useSlots'
import useDebounce from './features/useDebounce'
import useDisabled from './features/useDisabled'
import useEvents from './../useEvents'
import useItems from './features/useItems'
import useHandleChange from './features/useHandleChange'
import useHandleSelectEvents from './features/useHandleSelectEvents'
import useHandleTag from './features/useHandleTag'
import useArrayType from './features/useArrayType'
import useSelect from './features/useSelect'
import useTaggable from './features/useTaggable'

import { tags as useOptions } from './features/useOptions'
import { multiselect as useValue } from './features/useValue'
import { array as  useNullValue } from './features/useNullValue'
import { array as useEmpty } from './features/useEmpty'

export default function (props, context) {
  const { schema } = toRefs(props)

  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const input = useInput(props, context)
  const path = usePath(props, context)
  const floating = useFloating(props, context)
  const placeholder = usePlaceholder(props, context)
  const id = useId(props, context)
  const description = useDescription(props, context)
  const readonly = useReadonly(props, context)
  const info = useInfo(props, context)
  const debounce = useDebounce(props, context)
  const disabled = useDisabled(props, context)
  const nullValue = useNullValue(props, context)
  const items = useItems(props, context)
  const arrayType = useArrayType(props, context)

  const default_ = useDefault(props, context, {
    nullValue: nullValue.nullValue
  })

  const options = useOptions(props, context, {
    form$: form$.form$,
  })

  const value = useValue(props, context, {
    nullValue: nullValue.nullValue,
    default: default_.default,
    isNative: options.isNative,
    items: items.items,
    trackBy: options.trackBy,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
    descriptor: schema,
  })

  const validation = useValidation(props, context, {
    form$: form$.form$,
    path: path.path,
  })

  const events = useEvents(props, context, {
    form$: form$.form$,
    descriptor: schema,
  }, {
    events: [
      'change', 'select', 'deselect', 'searchChange',
      'open', 'close', 'tag',
    ],
  })

  const data = useData(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    currentValue: value.currentValue,
    previousValue: value.previousValue,
    clean: validation.clean,
    validate: validation.validate,
    resetValidators: validation.resetValidators,
    fire: events.fire,
    default: default_.default,
    nullValue: nullValue.nullValue,
    dirt: validation.dirt,
  })

  const empty = useEmpty(props, context, {
    value: value.value,
    nullValue: nullValue.nullValue,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
  })

  const baseElement = useBaseElement(props, context, {
    label: label.label,
    placeholder: placeholder.placeholder,
  })
  
  const components = useComponents(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const layout = useLayout(props, context, {
    components: components.components,
  })

  const classes = useClasses(props, context, {
    form$: form$.form$,
    theme: theme.theme,
  })

  const columns = useColumns(props, context, {
    form$: form$.form$,
  })

  const view = useView(props, context, {
    available: conditions.available,
  })

  const slots = useSlots(props, context, {
    form$: form$.form$,
    components: components.components,
  }, {
    slots: [
      'label', 'info', 'description', 'error',
      'message', 'before', 'between', 'after',
      'beforeList', 'afterList', 'selection',
      'noResult', 'noOptions', 'option', 'tag',
    ],
    defaultSlots: {
      selection: markRaw(components.components.value.MultiselectSlotTagsSelection)
    }
  })

  const handleChange = useHandleChange(props, context, {
    form$: form$.form$,
    model: value.model,
    currentValue: value.currentValue,
    previousValue: value.previousValue,
    changed: data.changed,
    dirt: validation.dirt,
    validate: validation.validate,
    fire: events.fire,
  })

  const handleSelectEvents = useHandleSelectEvents(props, context, {
    fire: events.fire,
  })

  const handleTag = useHandleTag(props, context, {
    fire: events.fire,
  })

  const select = useSelect(props, context, {
    value: value.value,
    updated: data.updated,
  })

  const taggable = useTaggable(props, context, {
    form$: form$.form$,
    selectOptions: value.selectOptions,
    select: select.select,
    create: options.create,
    trackBy: options.trackBy,
    items: items.items,
    listeners: events.listeners,
    on: events.on,
  })

  onMounted(() => {
    validation.initMessageBag()
    validation.initValidation()
  })

  return {
    ...form$,
    ...theme,
    ...input,
    ...path,
    ...conditions,
    ...value,
    ...validation,
    ...label,
    ...floating,
    ...placeholder,
    ...classes,
    ...id,
    ...columns,
    ...description,
    ...readonly,
    ...info,
    ...baseElement,
    ...view,
    ...components,
    ...layout,
    ...slots,
    ...debounce,
    ...disabled,
    ...events,
    ...data,
    ...empty,
    ...default_,
    ...nullValue,
    ...handleChange,
    ...items,
    ...options,
    ...handleSelectEvents,
    ...arrayType,
    ...select,
    ...handleTag,
    ...taggable,
  }
} 