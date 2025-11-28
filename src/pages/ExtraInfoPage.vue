<template>
  <section class="page">
    <p class="eyebrow">Profile</p>
    <h1>추가 정보 입력</h1>
    <p class="lead">취향과 여행 스타일을 입력하면 여행 계획과 음악 추천이 더 정교해집니다.</p>

    <div class="panel-grid">
      <div class="panel">
        <h2>여행 취향</h2>
        <form class="form">
          <label>
            여행 스타일
            <select>
              <option>도시 탐험</option>
              <option>휴양/호캉스</option>
              <option>자연/트레킹</option>
              <option>맛집/카페</option>
            </select>
          </label>
          <label>
            선호하는 이동 수단
            <select>
              <option>도보/대중교통</option>
              <option>렌터카</option>
              <option>자전거/모빌리티</option>
            </select>
          </label>
          <label>
            여행 메이트
            <textarea rows="3" placeholder="혼자, 친구, 가족 등"></textarea>
          </label>
        </form>
      </div>
      <div class="panel">
        <h2>음악 취향</h2>
        <form class="form">
          <label>
            선호 장르
            <select>
              <option>Lo-fi</option>
              <option>Jazz</option>
              <option>Indie/Acoustic</option>
              <option>EDM</option>
              <option>Classical</option>
            </select>
          </label>
          <label>
            여행 중 듣는 분위기
            <textarea rows="3" placeholder="예: 카페 감성, 신나는 EDM 등"></textarea>
          </label>
          <label>
            싫어하는 아티스트나 장르
            <textarea rows="2" placeholder="있다면 적어주세요"></textarea>
          </label>
        </form>
      </div>
    </div>
  </section>
</template>
