<!--TODO: 여행지 기반 음악 추천으로 연결되는 컴포넌트-->
<template>
  <div class="recommedation-container"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.recommedation-container {
  position: absolute;
  width: 80%;
  height: calc(100vh - 64px);
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.14);
  padding: 14px;
  backdrop-filter: blur(10px);
}
</style>
