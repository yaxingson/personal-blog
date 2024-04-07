import { fileURLToPath } from 'node:url'
import { dirname, resolve  } from 'node:path'
import { defineConfig } from 'vitepress'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import vueJsx from '@vitejs/plugin-vue-jsx'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  title: "Samuel の blog",
  description: "A VitePress Site",
  themeConfig: {
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
    server:{
      port:8169
    },
    css:{
      postcss:{
        plugins:[
          tailwindcss,
          autoprefixer,
        ]
      }
    },
    plugins:[vueJsx()],
    resolve:{
      alias:{
        '@':resolve(__dirname, 'theme')
      }
    }
  }
})
