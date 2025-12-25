<!-- 사이드바에 올라가는 관광지 컴포넌트 -->

<template>
  <div @click="handleSelectSpot" class="spot-card">
    <div class="spot-card-content">
      <div class="spot-card-title-row">
        <div class="spot-card-title">{{ spot.title }}</div>
      </div>

      <div class="spot-card-addr">{{ spot.sido_name }} {{ spot.gungu_name }}</div>

      <div class="spot-card-like-row">
        <button
          class="like-btn"
          type="button"
          :aria-pressed="!!spot.is_liked"
          @click.stop="$emit('like', spot)"
        >
          <Heart class="like-icon" :class="{ active: spot.is_liked }" />
          <span class="count">{{ spot.like_cnt ?? 0 }}</span>
        </button>
      </div>
    </div>

    <div class="spot-card-image-wrapper">
      <img class="spot-card-image" :src="spot.image_url || '/placeholder.svg'" :alt="spot" />
    </div>

    <Transition name="active-bar">
      <div v-if="isActive" class="spot-card-active-bar"></div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSpotStore } from '@/stores/spot'
import { storeToRefs } from 'pinia'
import { Heart } from 'lucide-vue-next' // ✅ 추가

const props = defineProps({
  spot: {
    type: Object,
    required: true,
  },
})

const store = useSpotStore()
const { selectedSpot } = storeToRefs(store)

const isActive = computed(
  () => selectedSpot.value && selectedSpot.value.attraction_id === props.spot.attraction_id,
)
</script>

<style scoped>
/* Spot card */

.spot-card {
  width: 100%;
  height: fit-content;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  flex: 0 0 auto;
  /* border-top: 1px solid oklch(0.65 0.02 240); */
  background: color-mix(in oklch, var(--card) 80%, transparent);
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.5);
  transition:
    box-shadow 0.18s ease,
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease;
}

.spot-card-image-wrapper {
  position: relative;
  width: 160px;
  height: 120px;
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 0;
}

.spot-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.spot-card:hover .spot-card-image .spot-card-image-gradient {
  transform: scale(1.05);
}

.spot-card-image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent 70%);
}

.spot-card-badge {
  position: absolute;
  right: 10px;
  bottom: 8px;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.18);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  color: var(--primary);
}

.spot-card-content {
  flex: 1; /* ✅ 이미지 영역 제외한 나머지 */
  min-width: 0; /* ✅ line-clamp + ellipsis 필수 */
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 12px 16px 0;
}

.spot-card-title-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.spot-card-title {
  font-weight: 600;
  font-size: 1.1rem;
}

.spot-card-description {
  font-size: 0.8rem;
  color: var(--muted-foreground);
  line-height: 1.4;

  /* ✅ 2줄 고정 + 2줄 초과 시 ... */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  overflow: hidden;
  text-overflow: ellipsis;

  /* ✅ 한 줄이어도 2줄 높이 확보 */
  min-height: calc(0.8rem * 1.4 * 2);
}

.spot-card-addr {
  font-size: 0.7rem;
  font-weight: 500;
}

/* bar 기본 스타일 */
.spot-card-active-bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background-color: #1f6feb;
  box-shadow: 0 0 12px rgba(31, 111, 235, 0.8);
}

/* enter / leave 애니메이션 */
.active-bar-enter-active,
.active-bar-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.active-bar-enter-from,
.active-bar-leave-to {
  opacity: 0;
  transform: scaleY(0);
  transform-origin: top;
}

.active-bar-enter-to,
.active-bar-leave-from {
  opacity: 1;
  transform: scaleY(1);
}

.spot-card-like-row {
  margin-top: 2px;
  display: flex;
  align-items: center;
}

/* ✅ 버튼: pill 형태 + 적당히 큰 터치 영역 */
.like-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  height: 36px;
  padding: 0 12px;
  border-radius: 999px;

  border: 1px solid color-mix(in oklch, var(--border) 70%, transparent);
  background: color-mix(in oklch, var(--card) 65%, transparent);
  color: rgba(255, 255, 255, 0.85);

  cursor: pointer;
  transition:
    transform 0.12s ease,
    background 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}

.like-btn:hover {
  background: color-mix(in oklch, var(--card) 85%, transparent);
  border-color: color-mix(in oklch, var(--primary) 40%, var(--border));
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.35);
  transform: translateY(-1px);
}

.like-btn:active {
  transform: translateY(0) scale(0.98);
}

/* ✅ 아이콘 크기 */
.like-icon {
  width: 18px;
  height: 18px;
  opacity: 0.9;
}

/* ✅ 좋아요 상태일 때: 핑크 + 살짝 글로우 */
.like-icon.active {
  opacity: 1;
  color: rgba(236, 72, 153, 0.95);
  filter: drop-shadow(0 6px 14px rgba(236, 72, 153, 0.35));
}

/* ✅ 카운트 */
.like-btn .count {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.2px;
  opacity: 0.9;
}

/* ✅ 좋아요 상태일 때 버튼 배경도 살짝 핑크톤 */
.like-btn[aria-pressed='true'] {
  border-color: color-mix(in oklch, rgba(236, 72, 153, 0.9) 50%, var(--border));
  background: color-mix(in oklch, rgba(236, 72, 153, 0.16) 60%, transparent);
}
</style>
