<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="page">
    <p class="eyebrow">Welcome</p>
    <h1>TravelTune에서 여행과 음악을 한 번에</h1>
    <p class="lead">여행 계획을 세우고, 목적지에 어울리는 음악을 추천받는 워크플로우를 시작하세요.</p>

    <div class="actions">
      <RouterLink class="btn primary" to="/login">로그인</RouterLink>
      <RouterLink class="btn ghost" to="/signup">회원가입</RouterLink>
      <RouterLink class="btn ghost" to="/travel-plan">계획 만들기</RouterLink>
    </div>

    <div class="card-grid">
      <article class="card">
        <h2>여행계획</h2>
        <p class="subtle">목적지, 일정, 해야 할 일을 정리하고 마일스톤을 관리합니다.</p>
      </article>
      <article class="card">
        <h2>장소 기반 음악</h2>
        <p class="subtle">현재 도시와 분위기에 맞는 플레이리스트를 추천받아 여정에 음악을 더합니다.</p>
      </article>
      <article class="card">
        <h2>마이페이지</h2>
        <p class="subtle">저장된 일정과 취향 정보를 한눈에 보고 바로 이어서 준비할 수 있습니다.</p>
      </article>
    </div>
  </section>
</template>
