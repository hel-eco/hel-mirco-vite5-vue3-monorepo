<template>
  <div class="g-main">
    <h2>主应用内容</h2>
    <button @click="num++">
      <span class="btn-text"> host工程中的按钮 {{ num }}</span>
      <testCommon />
    </button>

    <div class="remote-component-container">
      <h3>远程组件内容：</h3>
      <remoteComponent />
    </div>
  </div>
</template>
<script setup>
import { defineAsyncComponent, getCurrentInstance, h, ref } from "vue";
import { preFetchLib } from "hel-micro";
import testCommon from "./components/testCommon.vue";
let num = ref(0);

const remoteComponent = defineAsyncComponent({
  loader: async () => {
    console.log("defineAsyncComponent: 开始加载远程组件...");

    try {
      // 获取已经预加载的远程组件
      const component = await preFetchLib("hel-monorepo-vite-vue3-remote", {
        custom: {
          host: "http://localhost:8888",
          skipFetchHelMeta: true,
          enable: true,
          trust: true,
        },
      });

      return component;
    } catch (err) {
      console.error("defineAsyncComponent: 获取远程组件失败:", err);
      throw err;
    }
  },
  errorComponent: null,
});
</script>

<style lang="scss" scoped >
.g-main {
  padding: 20px;

  .btn-text,.text {
    color: red;
    font-size: 20px;
  }

  .remote-component-container {
    margin-top: 30px;
    padding: 20px;
    border: 2px dashed #ccc;
    border-radius: 8px;
    // 试图修改远程组件的样式
    .card {
      color: yellow;
    }
  }
}
</style>
