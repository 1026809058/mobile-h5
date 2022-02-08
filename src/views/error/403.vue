<template>
  <div>
    403
    <button @click="btn">按钮</button>
  </div>
</template>
<script setup lang="ts">
import { formatDate } from '@/utils/tool/formateDate'
import { getCurrentInstance } from 'vue'
console.log(formatDate('yyyy/MM/dd', 1644278400000))
const { proxy } = getCurrentInstance()
let a = proxy.$throttle(b)
function btn() {
  a()
}
function b() {
  console.log(111111)
}
</script>
<style lang="scss" scoped></style>
