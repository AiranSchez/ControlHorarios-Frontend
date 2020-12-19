import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.source.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFontAwesome, faFacebook, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTrash, faUserMinus, faUserPlus, faInfoCircle, faCalendarAlt, faUsers, faClock, faList, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VCalendar from 'v-calendar'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

library.add(faFontAwesome, faFacebook, faTwitter, faLinkedin, faGithub, faTrash, faUserMinus, faUserPlus, faInfoCircle, faCalendarAlt, faUsers, faClock, faList, faCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueToast)
Vue.use(VCalendar, {
  componentPrefix: 'vc' // Use <vc-calendar /> instead of <v-calendar />
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
