import { computed, ref, onBeforeUpdate } from 'composition-api'

export default function useListChildren(props, context, dependencies)
{
  // ================ DATA ================
  
  const child$ = ref([])

  const instances = ref([])
      
  // ============== COMPUTED ==============

  const children$ = computed(() => {
    const elements$ = {}

    _.each(child$.value, (element$, i) => {
      elements$[element$.name] = element$
    })

    return elements$
  })
  
  const handleLayoutBeforeUpdate = () => {
    // console.log('emptied child$')
    child$.value = []
  }

  return {
    // Data
    child$,
    instances,

    // Computed
    children$,
    handleLayoutBeforeUpdate,
  }
}