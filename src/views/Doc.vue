<template>
  <div class="layout">
    <Topnav class="nav" toggleMenuButtonVisible/>
    <div class="content">
      <aside v-if="menuVisible">
        <h1>文档</h1>  
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h1>组件列表</h1>
        <ol>
          <li>
            <router-link to="/doc/layout">Layout 布局</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 标签页</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input 输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/toast">Toast 轻提示</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">Popover 气泡弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/collapse">Collapse 折叠面板</router-link>
          </li>
          <li>
            <router-link to="/doc/scroll">Scroll 滚动条</router-link>
          </li>
          <li>
            <router-link to="/doc/citySelect">CitySelect 城市选择</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    background: #d6a176;
    flex-grow: 1;
    padding-top: 90px;
    padding-left: 186px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: #e8dcc4;
  width: 180px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  height: 100%;
  z-index: 10;
  box-shadow: 0 8px 12px #e8dcc4;
  > h1 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      
      .router-link-active {
        background: #d6a176;
        
        color: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>