import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome, faFacebook, faTwitter, faLinkedin, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
