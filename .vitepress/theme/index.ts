import { type Theme } from 'vitepress'
import DefaultTheme  from 'vitepress/theme'
import Layout from './layout/default.ts'
import Outline from './components/Outline.vue'
import Icon from './components/Icon.vue'

import './styles/index.css'

export default {
  extends:DefaultTheme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('Outline', Outline)
    app.component('Icon', Icon)


  }
} satisfies Theme
