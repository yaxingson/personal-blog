import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"

export default [
  {
    languageOptions: { 
      globals:{
        ...globals.browser,
        ...globals.commonjs
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    rules:{
      '@typescript-eslint/no-explicit-any':'off',
      '@typescript-eslint/no-unused-vars':'off',
      'vue/multi-word-component-names':'off'

    }
  }
]
