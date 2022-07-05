import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    // display: {
    //   thresholds: {
    //     xs: 320,
    //     sm: 480,
    //     md: 768,
    //     lg: 1000,
    //     xl: 1600,
    //     xxl: 2040,
    //   },
    // }
  })

  nuxtApp.vueApp.use(vuetify)
})