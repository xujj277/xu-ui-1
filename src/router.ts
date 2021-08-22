import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/switch/SwitchDemo.vue'
import ButtonDemo from './components/button/ButtonDemo.vue'
import DialogDemo from './components/dialog/DialogDemo.vue'
import TabDemo from './components/tab/TabDemo.vue'
import ToastDemo from './components/toast/ToastDemo.vue'
import PopoverDemo from './components/popover/PopoverDemo.vue'
import InputDemo from './components/input/InputDemo.vue'
import LayoutDemo from './components/layout/LayoutDemo.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import CollapseDemo from './components/collapse/CollapseDemo.vue'
const md = string => h(Markdown, {content: string, key: string}) 
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(getStarted)},
        {path: 'intro', component: md(intro)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'input', component: InputDemo},
        {path: 'layout', component: LayoutDemo},
        {path: 'tabs', component: TabDemo},
        {path: 'toast', component: ToastDemo},
        {path: 'popover', component: PopoverDemo},
        {path: 'collapse', component: CollapseDemo},
      ]
    }
  ]
})

router.afterEach(() => {
  console.log('切换')
})
