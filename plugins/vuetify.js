import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    display: {
      thresholds: {
        xs: 0,
        sm: 320,
        md: 480,
        lg: 768,
        xl: 1000,
        xxl: 1600,
      },
    }
  })

  nuxtApp.vueApp.use(vuetify)
})