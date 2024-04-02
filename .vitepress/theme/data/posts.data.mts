import { createContentLoader } from 'vitepress'
import { JSDOM } from 'jsdom'

export default createContentLoader('blog/posts/*.md', {
  excerpt: true,
  includeSrc: true,
  render:true,
  transform(data) {
    return data.map(item=>{
      const { window:{ document } } = new JSDOM(item.html)
      const outline:any[] = []
      let pos = -1

      for(const node of document.body.children) {
        if(node.tagName.toLowerCase() === 'h1') {
          outline.push({
            title:node.textContent,
            children:[]
          })
          pos++
        } else if(node.tagName.toLowerCase() === 'h2') {
          outline[pos].children.push(node.textContent)
        }
      }
      
      return {
        ...item,
        outline
      }
    })
  }
})
