import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入 MUI 的样式
import '../public/css/mui/css/mui.min.css'
// 导入扩展图标样式
import '../public/css/mui/css/icons-extra.css'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
