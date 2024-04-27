///<reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test:{
    coverage:{
      provider:'v8',
      enabled:true,
      reporter:['html', 'json'],
      reportsDirectory:'.vitepress/theme/__test__/coverage'
    }

  }
})
