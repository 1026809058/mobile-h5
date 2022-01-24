<!--
 * @Author: your name
 * @Date: 2022-01-24 14:57:30
 * @LastEditTime: 2022-01-24 15:07:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \移动端h5\src\components\globalComponents\iconFont\iconFont.vue
-->
<template>
  <div class="iconfont" :class="name"></div>
</template>
<script lang="ts" setup>
defineProps<{
  name: {
    type: String
    default: ''
  }
}>()
</script>
<style lang="scss" scoped></style>
