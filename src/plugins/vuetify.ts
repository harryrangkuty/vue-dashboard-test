import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const defaultTheme = localStorage.getItem('theme') || 'light';

export const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  theme: {
    defaultTheme,
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#e4dff1',
          surface: '#766d93',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#0E1524',
          surface: '#090F19',
        },
      },
    },
  },
})
