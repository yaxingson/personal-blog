import { 
  toValue, 
  ref, 
  onMounted, 
  onUnmounted, 
  type Ref 
} from 'vue'
import { Tree, Branch, Vector } from '../utils'

export function useEffectCanvas(el:HTMLCanvasElement|Ref<HTMLCanvasElement>) {
  const canvas = toValue(el)

  const canvas_width = window.screen.width
  const canvas_height = window.screen.height - 30
  const center_x = canvas_width / 3
  const stretch_factor = 500 / canvas_height
  const y_speed = 3 / stretch_factor
  
  canvas.width = canvas_width
  canvas.height = canvas_height

  const ctx = canvas.getContext("2d")!

  const tree = new Tree()

  tree.init(ctx)

  new Branch(
    new Vector(center_x, canvas_height), 
    new Vector(Branch.random(-1, 1), -y_speed), 
    15/stretch_factor, 
    `pink`,
    tree
  )

  tree.render()

}

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function onMousemove(ev:MouseEvent) {
    x.value = ev.pageX
    y.value = ev.pageY
  }

  onMounted(()=>{
    window.addEventListener('mousemove', onMousemove)
  })

  onUnmounted(()=>{
    window.removeEventListener('mousemove', onMousemove)
  })

  return [ x,  y ] as const
}

