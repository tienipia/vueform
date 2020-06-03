import condition from './../plugins/condition'

export default {
  plugins: [
    condition,
  ],
  
  themes: {},

  theme: 'default',

  locale: 'en',

  elements: {},
  
  components: {},

  labels: false,

  columns: {
    element: 12,
    label: 12,
    field: 12,
  },

  validateOn: 'change|submit|step',

  method: 'post',

  endpoints: {
    process: '/laraform/process',
  },
}