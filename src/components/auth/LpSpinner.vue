<!-- LpSpinner.vue -->
<template>
  <div class="lp">
    <svg
      class="lp__disc"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      aria-label="Spinning vinyl record"
      role="img"
    >
      <rect width="128" height="128" fill="black" />
      <!-- 별/점 -->
      <circle cx="20" cy="20" r="2" fill="white" />
      <circle cx="40" cy="30" r="2" fill="white" />
      <circle cx="60" cy="10" r="2" fill="white" />
      <circle cx="80" cy="40" r="2" fill="white" />
      <circle cx="100" cy="20" r="2" fill="white" />
      <circle cx="120" cy="50" r="2" fill="white" />

      <!-- 라벨(달처럼 보이는 부분) -->
      <circle cx="90" cy="30" r="10" fill="white" fill-opacity="0.5" />
      <circle cx="90" cy="30" r="8" fill="white" />

      <!-- 파형 -->
      <path d="M0 128 Q32 64 64 128 T128 128" fill="purple" stroke="black" stroke-width="1" />
      <path d="M0 128 Q32 48 64 128 T128 128" fill="mediumpurple" stroke="black" stroke-width="1" />
      <path
        d="M0 128 Q32 32 64 128 T128 128"
        fill="rebeccapurple"
        stroke="black"
        stroke-width="1"
      />
      <path d="M0 128 Q16 64 32 128 T64 128" fill="purple" stroke="black" stroke-width="1" />
      <path
        d="M64 128 Q80 64 96 128 T128 128"
        fill="mediumpurple"
        stroke="black"
        stroke-width="1"
      />
    </svg>

    <!-- 가운데 스핀들(고정) -->
    <div class="lp__spindle" />
  </div>
</template>

<script setup>
// 일반 JS만 사용 (지금은 로직 필요 없음)
// 필요하면 props로 speed 제어 같은 것도 추가 가능
</script>

<style lang="scss" scoped>
.lp {
  position: relative;
  width: 128px;
  height: 128px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;

  &__disc {
    width: 128px;
    height: 128px;
    border-radius: 9999px;

    // 원본 느낌 살리기
    border: 4px solid #a1a1aa; // zinc-400 비슷
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);

    // 회전
    animation: lp-spin 3s linear infinite;
  }

  &__spindle {
    position: absolute;
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    background: #fff;
    border: 4px solid #a1a1aa;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.18);
    // 가운데 고정
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
}

@keyframes lp-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
