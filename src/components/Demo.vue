<template>
  <h3>{{ component.__sourceCodeTitle }}</h3>
  <div class="demo-wrapper">
    <div class="demo-block">
      <component :is="component"></component>
    </div>
    <div class="code-block" v-if="flag">
      <div class="description">
        <slot></slot>
      </div>
    </div>
    <div class="code-block">
      <div class="demo-actions">
        <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
        <Button @click="showCode" v-else>查看代码</Button>
      </div>
      <div class="description" v-if="codeVisible">
        <pre class="language-css" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from '../lib/index'
import { computed, ref } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism

export default {
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props, context) {
    const html = computed(() => {
      console.log(props.component)
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        'html'
      )
    })
    const flag = context.slots && context.slots.default
    const showCode = () => (codeVisible.value = true)
    const hideCode = () => (codeVisible.value = false)
    const codeVisible = ref(false)
    return {
      html,
      Prism,
      codeVisible,
      showCode,
      hideCode,
      flag,
    }
  },
}
</script>

<style lang="scss" scoped>
$demo-bg-color: #eaddc1;
h3 {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #fff;
}
.demo-wrapper {
  margin-bottom: 54px;
  background: $demo-bg-color;
  border: 6px solid #f1ebd8;
  border-radius: 10px;

  .demo-block {
    padding: 24px;
    border-radius: 3px;
    transition: 0.2s;
    border-bottom: none;
    //display: flex;
    //align-items: center;
  }
  .code-block {
    border-top: 3px solid #f1ebd8;
    overflow: hidden;
    transition: height 0.2s;

    .demo-actions {
      padding: 8px 16px;
    }

    .description {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #eee6d0;

      p {
        color: #5e6d82;
      }
    }
  }
}
</style>
