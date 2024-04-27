import { defineComponent, h } from 'vue'
import { useData } from 'vitepress'
import HomeLayout from './pages/home.vue'
import BlogLayout from './pages/blog.vue'
import ProjectLayout from './pages/project.vue'
import DemoLayout from './pages/demo.vue'
import PostsLayout from './blog/post.vue'
import NoteLayout from './blog/note.vue'
import ColumnLayout from './blog/column.vue'
import StreamLayout from './blog/stream.vue'
import ResourceLayout from './pages/resource.vue'

const columns = {
  home:HomeLayout,
  blog:BlogLayout,
  project:ProjectLayout,
  demo:DemoLayout,
  post: PostsLayout,
  note: NoteLayout,
  column: ColumnLayout,
  stream: StreamLayout,
  resource: ResourceLayout,
  
}

export default defineComponent({
  setup() {
    const { frontmatter } = useData()
    return ()=>h(columns[frontmatter.value.layout])
  }
})


