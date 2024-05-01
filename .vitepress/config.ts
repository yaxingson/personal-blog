import { fileURLToPath } from 'node:url'
import { dirname, resolve  } from 'node:path'
import { defineConfig } from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vueJsx from '@vitejs/plugin-vue-jsx'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: "Soetas の blog",
  lang:'zh-CN',
  cleanUrls:true,
  description: "personal blog site",
  themeConfig: {
    logo:'',
    nav: [
      { text: 'Blog', link:'/blog/posts/'},
      { text:'Projects', link:'/projects/'},
      { text:'Demos', link:'/demos/'},
      { text:'Resource', link:"/resource/"}
    ],
    socialLinks: [
      { icon: 'github', link: '' },
      { icon:'twitter', link:''}
    ],
    search: {
      provider: 'local'
    }
  },
  vite:{
    css:{
      postcss:{
        plugins:[
          tailwindcss() as any,
          autoprefixer() as any,
        ]
      }
    },
    plugins:[vueJsx()],
    resolve:{
      alias:{
        '@':resolve(root, 'theme')
      }
    }
  }
})
