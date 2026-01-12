<template>
  <div>
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>


  </div>
</template>
<script setup lang="ts">

</script>

<!--设置全局样式-->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 10px; /* 垂直滚动条的宽度 */
  height: 10px; /* 水平滚动条的高度 */
}

*::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888; /* 滑块的背景颜色 */
  border-radius: 10px; /* 滑块的圆角 */
}


</style>