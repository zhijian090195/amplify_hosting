import App from './App.vue'
import { createApp } from 'vue'
import AmplifyVue from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css';
import '@fontsource/inter/variable.css';

const app = createApp(App);
app.use(AmplifyVue);
app.mount('#app');
