<!--
 * @Author: your name
 * @Date: 2021-12-21 16:11:14
 * @LastEditTime: 2022-01-24 14:08:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \project-framework\src\layouts\layouts.vue
-->
<template>
  <div class="layouts">
    <header class="layouts-header">
      <Header></Header>
    </header>
    <main class="layouts-main">
      <Main></Main>
    </main>
    <footer class="layouts-footer">
      <Footer></Footer>
    </footer>
  </div>
</template>
<script setup lang="ts">
import Header from '@/layouts/header/index.vue'
import Main from '@/layouts/main/index.vue'
import Footer from '@/layouts/footer/index.vue'
</script>
<style lang="scss" scoped>
.layouts {
  height: 100%;
  display: flex;
  flex-direction: column;
  .layouts-header {
    height: 4rem;
    flex: 0;
  }
  .layouts-main {
    height: calc(100% - 4rem);
    flex: 1;
  }
  .layouts-footer {
    height: 4rem;
    flex: 0;
  }
}
</style>
