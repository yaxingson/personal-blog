import { defineComponent, h } from 'vue'
import { useData } from 'vitepress'
import HomeLayout from './category/home.vue'
import BlogLayout from './category/blog.vue'
import ProjectLayout from './category/project.vue'
import DemoLayout from './category/demo.vue'
import PostsLayout from './blog/post.vue'
import NoteLayout from './blog/note.vue'
import ColumnLayout from './blog/column.vue'
import StreamLayout from './blog/stream.vue'
import NoticeLayout from './blog/notice.vue'
import ResourceLayout from './category/resource.vue'

const columns = {
  home:HomeLayout,
  blog:BlogLayout,
  project:ProjectLayout,
  demo:DemoLayout,
  post: PostsLayout,
  note: NoteLayout,
  column: ColumnLayout,
  stream: StreamLayout,
  notice: NoticeLayout,
  resource: ResourceLayout,
  
}

export default defineComponent({
  setup() {
    const { frontmatter } = useData()
    return ()=>h(columns[frontmatter.value.layout])
  }
})


