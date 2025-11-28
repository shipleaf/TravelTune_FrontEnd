<template>
  <section class="page">
    <p class="eyebrow">Planner</p>
    <h1>여행계획</h1>
    <p class="lead">여행 일정, 체크리스트, 메모를 한 곳에서 관리하세요.</p>

    <div class="panel-grid">
      <div class="panel">
        <h2>목적지 & 일정</h2>
        <form class="form">
          <label>
            여행지
            <input type="text" placeholder="예: 오사카, 제주도" />
          </label>
          <label>
            출발일
            <input type="date" />
          </label>
          <label>
            도착일
            <input type="date" />
          </label>
        </form>
      </div>
      <div class="panel">
        <h2>할 일 체크리스트</h2>
        <ul class="list">
          <li>항공/기차 예약 확인</li>
          <li>숙소 체크인 안내 저장</li>
          <li>필수 준비물 점검</li>
          <li>현지 교통카드/유심 준비</li>
        </ul>
      </div>
    </div>

    <div class="card-grid">
      <div class="card">
        <h2>일정 블록</h2>
        <p class="subtle">날짜별로 방문지와 예약 정보를 추가하세요.</p>
      </div>
      <div class="card">
        <h2>메모</h2>
        <p class="subtle">레스토랑, 카페, 포토스팟 등 아이디어를 남겨두세요.</p>
      </div>
      <div class="card">
        <h2>공유</h2>
        <p class="subtle">동행과 계획을 공유해 함께 수정할 수 있습니다.</p>
      </div>
    </div>
  </section>
</template>
