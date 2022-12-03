import { useSidePanelStore } from '~/stores/sidePanel'
import { h, RendererNode, RendererElement, VNode } from 'vue'

// components
import manageCollection from '../components/panels/manageCollection.vue'


type ComponentName = "manageCollection"
type PanelState = "show" | "hide"

export const usePanel = (
  state: PanelState,
  title: string | null,
  component: ComponentName | null,
  props: any
) => {
  const store = useSidePanelStore()

  if (state === "show") {
    setTimeout(() => {
      store.animate = true
    }, 1);

    if (component) {
      const compToRender = getComponent(component, props)
      if (compToRender) {
        store.component = compToRender
        store.show = true
        store.title = title
      }
    }
  }

  if (state === "hide") {
    setTimeout(() => {
      store.show = false
    }, 500);
    store.component = null
    store.animate = false
    store.title = null
  }
}

const getComponent = (componentName:ComponentName, props:any):VNode<RendererNode, RendererElement, { [key: string]: any }> => {
  const componentMap = new Map<ComponentName, any>(
    [
      ['manageCollection', manageCollection ],
    ]
  )
  const componentDefinition = componentMap.get(componentName)
  return h(componentDefinition, props)
}
