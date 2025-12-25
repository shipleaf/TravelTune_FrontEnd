<template>
  <div class="carousel" @mouseenter="pause" @mouseleave="resume">
    <div class="viewport">
      <div class="track" :style="trackStyle">
        <article v-for="trip in trips" :key="trip.trip_id || trip.title" class="card">
          <img class="img" :src="trip.image_url" :alt="trip.title" />
          <div class="overlay"></div>

          <div class="meta">
            <h3 class="title">{{ trip.title }}</h3>
            <p class="addr">{{ trip.memo }}</p>
          </div>
        </article>
      </div>
    </div>

    <div class="dots">
      <button
        v-for="(_, i) in trips.length"
        :key="i"
        class="dot"
        :class="{ active: i === index }"
        type="button"
        @click="go(i)"
        aria-label="go slide"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { getTripsMock } from '@/api/tripApi'

const trips = ref([])
const index = ref(0)

const intervalMs = 2500
let timer = null

const load = async () => {
  const res = await getTripsMock()
  trips.value = res?.data ?? []
}

const next = () => {
  if (!trips.value.length) return
  index.value = (index.value + 1) % trips.value.length
}

const go = (i) => {
  index.value = i
}

const start = () => {
  stop()
  timer = window.setInterval(next, intervalMs)
}

const stop = () => {
  if (timer) window.clearInterval(timer)
  timer = null
}

const pause = () => stop()
const resume = () => start()

onMounted(async () => {
  await load()
  start()
})

onBeforeUnmount(() => stop())

const trackStyle = computed(() => ({
  transform: `translateX(-${index.value * 100}%)`,
}))
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.viewport {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(17, 24, 39, 0.4);
  backdrop-filter: blur(14px);
}

.track {
  display: flex;
  width: 100%;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.card {
  position: relative;
  min-width: 100%;
  height: 340px;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.15), transparent);
}

.meta {
  position: absolute;
  left: 18px;
  bottom: 16px;
  right: 18px;
  color: white;
}

.title {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.2px;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
}

.addr {
  margin: 0;
  font-size: 14px;
  opacity: 0.9;
}

.dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 12px;
}

.dot {
  height: 8px;
  width: 8px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  background: rgba(255, 255, 255, 0.35);

  transition:
    width 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.25s ease,
    opacity 0.25s ease;
}

.dot.active {
  width: 28px;
  background: rgba(255, 255, 255, 0.95);
}
</style>
