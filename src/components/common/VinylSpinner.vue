<template>
  <div class="vinyl-container">
    <span></span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
/* From Uiverse.io by muqaddasjamal */
.vinyl-container {
  position: relative;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  border: 1px solid black;
  animation: rotate_3922 3s linear infinite;
  background-color: #9b59b6;
  background-image: linear-gradient(black, white, blue);
}

.vinyl-container span {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  background-color: #9b59b6;
  background-image: linear-gradient(blue, black);
}

.vinyl-container span {
  filter: blur(8px);
}
.vinyl-container::after {
  content: '';
  position: absolute;
  top: 50px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  background-color: black;
  border: solid 1px yellow;
  border-radius: 50%;
}

@keyframes rotate_3922 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
