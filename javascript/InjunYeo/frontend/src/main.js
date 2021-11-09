import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponent from'./components/GlobalComponent.vue'

//createApp()을 통해 Vue 객체를 생성함
//createApp(App).use(store).use(router).mount('#app')
const app =createApp(App)

//실제 Vue 객체를 생성하는 중앙(main)에서 사용할 컴포넌트의 등록까지 모두 처리함
//가장 최근 Vue(7월1일)의 경우 컴포넌트 등록을 중앙에서 하도록변경
//중앙에서 컴포넌트를 등록하는 방법은 아래와 같이
//app.component(컴포넌트 이름, 연결되는 실제 컴포넌트 객체)형식으로 등록할 수 있다.
//밑에 붙어있는 use(store).use(router).mount('@app')은 향후 VueX까지 보류 
app.component(GlobalComponent.name,GlobalComponent).use(store).use(router).mount('#app')