<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'login' },
})

const title = computed(() => (props.mode === 'signup' ? '회원가입' : '로그인'))
const description = computed(() =>
  props.mode === 'signup'
    ? '새 계정을 만들고 일정과 취향을 저장하세요.'
    : '등록된 이메일로 로그인해 여정을 이어가세요.',
)
</script>

<template>
  <section class="page">
    <p class="eyebrow">Access</p>
    <h1>{{ title }}</h1>
    <p class="lead">{{ description }}</p>

    <div class="panel-grid">
      <div class="panel">
        <h2>로그인</h2>
        <p class="subtle">이미 계정이 있다면 이메일과 비밀번호로 로그인하세요.</p>
        <form class="form">
          <label>
            이메일
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" class="btn primary">로그인</button>
        </form>
      </div>
      <div class="panel">
        <h2>회원가입</h2>
        <p class="subtle">새 계정을 만들고 맞춤형 추천을 받아보세요.</p>
        <form class="form">
          <label>
            이메일
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            비밀번호
            <input type="password" placeholder="최소 8자" />
          </label>
          <label>
            비밀번호 확인
            <input type="password" placeholder="다시 입력" />
          </label>
          <button type="button" class="btn ghost">회원가입</button>
        </form>
      </div>
    </div>
  </section>
</template>
