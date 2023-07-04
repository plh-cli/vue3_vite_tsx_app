import { createApp } from 'vue';
import './style.css';
import App from './App.tsx';
import router from './router';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { camelCaseToLine } from '@/utils/str-utils';



const app = createApp(App);
// 全局注册图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(`el-icon${camelCaseToLine(key)}`, component);
}
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.mount('#app');
