<template>
  <div class="page">
    <div class="container">
      <!-- Progress indicator -->
      <div class="progress">
        <div class="pill" :class="{ active: step >= 1 }">Artist</div>
        <div class="bar" :class="{ active: step >= 2 }"></div>
        <div class="pill" :class="{ active: step >= 2 }">Genre</div>
        <div class="bar" :class="{ active: step >= 3 }"></div>
        <div class="pill" :class="{ active: step >= 3 }">Song</div>
      </div>

      <!-- Header -->
      <div class="header">
        <h1 class="title">{{ stepTitle }}</h1>
        <p class="subtitle">원하는 옵션을 선택해 주세요</p>
      </div>

      <!-- Selection Grid -->
      <div class="grid">
        <button
          v-for="option in currentData"
          :key="option.id"
          type="button"
          class="card"
          :class="{ selected: isSelected(option.id) }"
          @click="toggleSelect(option.id)"
        >
          <div class="img-wrap">
            <img :src="option.image || '/placeholder.svg'" :alt="option.name" class="img" />
          </div>

          <div class="text">
            <div class="name" :title="option.name">{{ option.name }}</div>
            <div v-if="option.subtitle" class="sub" :title="option.subtitle">
              {{ option.subtitle }}
            </div>
          </div>

          <!-- Selected Indicator -->
          <div v-if="isSelected(option.id)" class="selected-badge" aria-hidden="true">
            <!-- check icon -->
            <svg viewBox="0 0 24 24" class="check-icon">
              <path fill="currentColor" d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
            </svg>
          </div>
        </button>
      </div>

      <!-- Save Button -->
      <button class="save" type="button" :disabled="!canProceed" @click="handleSave">
        <span>{{ step < 3 ? '저장 후 다음' : '완료' }}</span>
        <!-- arrow-right -->
        <svg viewBox="0 0 24 24" class="arrow-icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8z"
            transform="scale(-1,1) translate(-24,0)"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const ARTISTS = [
  {
    id: '1',
    name: 'The Weeknd',
    subtitle: 'Pop, R&B',
    image: '/src/assets/img/the-weeknd-artist.jpg',
  },
  {
    id: '2',
    name: 'Taylor Swift',
    subtitle: 'Pop, Country',
    image: '/src/assets/img/famous-musician.png',
  },
  { id: '3', name: 'Drake', subtitle: 'Hip Hop, Rap', image: '/src/assets/img/drake-artist.jpg' },
  {
    id: '4',
    name: 'Billie Eilish',
    subtitle: 'Alternative, Pop',
    image: '/src/assets/img/billie-eilish-artist.jpg',
  },
  {
    id: '5',
    name: 'Ed Sheeran',
    subtitle: 'Pop, Folk',
    image: '/src/assets/img/singer-songwriter-stage.png',
  },
  {
    id: '6',
    name: 'Ariana Grande',
    subtitle: 'Pop, R&B',
    image: '/src/assets/img/ariana-grande-artist.jpg',
  },
]

const GENRES = [
  { id: '1', name: 'Pop', subtitle: 'Popular music', image: '/src/assets/img/pop-music-genre.jpg' },
  {
    id: '2',
    name: 'Rock',
    subtitle: 'Rock and roll',
    image: '/src/assets/img/rock-music-genre.jpg',
  },
  {
    id: '3',
    name: 'Hip Hop',
    subtitle: 'Rap and beats',
    image: '/src/assets/img/hip-hop-genre.jpg',
  },
  {
    id: '4',
    name: 'Jazz',
    subtitle: 'Classic jazz',
    image: '/src/assets/img/jazz-music-genre.jpg',
  },
  {
    id: '5',
    name: 'Electronic',
    subtitle: 'EDM and techno',
    image: '/src/assets/img/electronic-music-genre.jpg',
  },
  {
    id: '6',
    name: 'Classical',
    subtitle: 'Orchestra',
    image: '/src/assets/img/classical-music-genre.jpg',
  },
]

const SONGS = [
  {
    id: '1',
    name: 'Blinding Lights',
    subtitle: 'The Weeknd',
    image: '/src/assets/img/blinding-lights-song.jpg',
  },
  {
    id: '2',
    name: 'Anti-Hero',
    subtitle: 'Taylor Swift',
    image: '/src/assets/img/anti-hero-song.jpg',
  },
  { id: '3', name: "God's Plan", subtitle: 'Drake', image: '/src/assets/img/gods-plan-song.jpg' },
  {
    id: '4',
    name: 'Bad Guy',
    subtitle: 'Billie Eilish',
    image: '/src/assets/img/bad-guy-song.jpg',
  },
  {
    id: '5',
    name: 'Shape of You',
    subtitle: 'Ed Sheeran',
    image: '/src/assets/img/shape-of-you-song.jpg',
  },
  {
    id: '6',
    name: 'Positions',
    subtitle: 'Ariana Grande',
    image: '/src/assets/img/placeholder.svg?height=80&width=80',
  },
]

// step: 1 | 2 | 3
const step = ref(1)

const selectedArtists = ref([])
const selectedGenres = ref([])
const selectedSongs = ref([])

const currentData = computed(() => {
  if (step.value === 1) return ARTISTS
  if (step.value === 2) return GENRES
  return SONGS
})

const currentSelection = computed(() => {
  if (step.value === 1) return selectedArtists.value
  if (step.value === 2) return selectedGenres.value
  return selectedSongs.value
})

const stepTitle = computed(() => {
  if (step.value === 1) return '좋아하는 아티스트를 선택하세요'
  if (step.value === 2) return '선호하는 장르를 선택하세요'
  return '좋아하는 곡을 선택하세요'
})

const isSelected = (id) => currentSelection.value.includes(id)

const toggleSelect = (id) => {
  const arr = currentSelection.value
  const exists = arr.includes(id)
  const next = exists ? arr.filter((x) => x !== id) : [...arr, id]

  if (step.value === 1) selectedArtists.value = next
  else if (step.value === 2) selectedGenres.value = next
  else selectedSongs.value = next
}

const canProceed = computed(() => currentSelection.value.length > 0)

const handleSave = () => {
  if (step.value < 3) {
    step.value += 1
    return
  }

  console.log('[Music preferences saved]:', {
    artists: selectedArtists.value,
    genres: selectedGenres.value,
    songs: selectedSongs.value,
  })
  // 최종 제출 로직 연결 위치
}
</script>

<style lang="scss" scoped>
$page-blue: oklch(0.75 0.15 195);

.page {
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.container {
  width: 100%;
  max-width: 672px; // max-w-2xl 느낌
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* Progress */
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.pill {
  height: 40px;
  padding: 0 16px;
  border-radius: 9999px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  color: rgba(255, 255, 255, 0.45);
  font-weight: 700;
  font-size: 13px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 180ms ease,
    border-color 180ms ease,
    color 180ms ease;

  &.active {
    background: $page-blue;
    border-color: $page-blue;
    color: #000;
  }
}

.bar {
  width: 80px;
  height: 2px;
  background: rgba(255, 255, 255, 0.18);
  transition: background-color 180ms ease;

  &.active {
    background: $page-blue;
  }
}

/* Header */
.header {
  text-align: center;
  display: grid;
  gap: 8px;
}

.title {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
}

.subtitle {
  margin: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
}

.card {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 14px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background-color 160ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.18);
    transform: translateY(-1px);
  }

  &.selected {
    border-color: $page-blue;
    background: color-mix(in oklch, $page-blue 12%, transparent);
  }
}

.img-wrap {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  flex: 0 0 auto;
  background: rgba(255, 255, 255, 0.08);
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.text {
  min-width: 0;
  flex: 1;
  text-align: left;
}

.name {
  font-weight: 800;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
}

.sub {
  margin-top: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Selected badge */
.selected-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
  background: $page-blue;
  color: #000;
  display: grid;
  place-items: center;
}

.check-icon {
  width: 16px;
  height: 16px;
}

/* Save button */
.save {
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  border: none;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition:
    opacity 150ms ease,
    background-color 150ms ease,
    color 150ms ease;

  background: $page-blue;
  color: #000;

  &:hover {
    opacity: 0.92;
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.35);
    cursor: not-allowed;
    opacity: 1;
  }
}

.arrow-icon {
  width: 20px;
  height: 20px;
  color: currentColor;
}
</style>
