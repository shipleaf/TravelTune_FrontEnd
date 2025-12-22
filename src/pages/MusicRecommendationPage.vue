<template>
  <div class="app-page">
    <HeaderBar />

    <div class="app-main">
      <!-- <div class="page-title">music-recommedations</div> -->
      <div class="contents">
        <SideBar />
        <MapArea />
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderBar from '@/components/common/HeaderBar.vue'
import SideBar from '@/components/music/SideBar.vue'
import MapArea from '@/components/music/MapArea.vue'
</script>

<style scoped>
.app-page {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.app-main {
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.contents {
  display: flex;
}

.mapContainer {
}
</style>
