import axiosApi from './axiosApi'

export const createTrip = (data) => {
  return axiosApi({
    url: '/api/v1/trips',
    method: 'post',
    data: data,
    withCredentials: true,
  })
}

// api/mock/getTrips.js
export const getTripsMock = () => {
  return Promise.resolve({
    success: true,
    data: [
      // ✅ 기존 데이터(과거)
      {
        trip_id: 1,
        sido_name: '부산',
        gungu_name: '해운대구',
        title: '부산 먹방 여행',
        start_date: '2025-05-01',
        end_date: '2025-05-03',
        trip_members: [
          {
            member_id: 1,
            nickname: '김철수',
            profile_image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
            role: 'HOST',
          },
          {
            member_id: 2,
            nickname: '이영희',
            profile_image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
            role: 'GUEST',
          },
        ],
      },
      {
        trip_id: 2,
        sido_name: '서울',
        gungu_name: '종로구',
        title: '서울 감성 산책',
        start_date: '2025-06-10',
        end_date: '2025-06-12',
        trip_members: [
          {
            member_id: 3,
            nickname: '박민수',
            profile_image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
            role: 'HOST',
          },
        ],
      },
      {
        trip_id: 3,
        sido_name: '제주',
        gungu_name: '서귀포시',
        title: '제주 힐링 여행',
        start_date: '2025-07-01',
        end_date: '2025-07-05',
        trip_members: [
          {
            member_id: 4,
            nickname: '최지은',
            profile_image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
            role: 'HOST',
          },
          {
            member_id: 5,
            nickname: '정우성',
            profile_image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0',
            role: 'GUEST',
          },
          {
            member_id: 6,
            nickname: '한지민',
            profile_image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
            role: 'GUEST',
          },
        ],
      },
      {
        trip_id: 4,
        sido_name: '강원',
        gungu_name: '속초시',
        title: '속초 바다 여행',
        start_date: '2025-08-15',
        end_date: '2025-08-17',
        trip_members: [
          {
            member_id: 7,
            nickname: '이준호',
            profile_image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
            role: 'HOST',
          },
        ],
      },

      // ✅ 추가 데이터(미래: 2026 -> upcoming용)
      {
        trip_id: 5,
        sido_name: '제주',
        gungu_name: '제주시',
        title: '새해 제주 드라이브',
        start_date: '2026-01-10',
        end_date: '2026-01-12',
        trip_members: [
          {
            member_id: 10,
            nickname: '김선엽',
            profile_image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
            role: 'HOST',
          },
          {
            member_id: 11,
            nickname: '홍길동',
            profile_image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
            role: 'GUEST',
          },
        ],
      },
      {
        trip_id: 6,
        sido_name: '서울',
        gungu_name: '마포구',
        title: '전시회 + 카페 투어',
        start_date: '2026-02-08',
        end_date: '2026-02-09',
        trip_members: [
          {
            member_id: 12,
            nickname: '박지성',
            profile_image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
            role: 'HOST',
          },
          {
            member_id: 13,
            nickname: '김하나',
            profile_image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
            role: 'GUEST',
          },
          {
            member_id: 14,
            nickname: '최유진',
            profile_image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
            role: 'GUEST',
          },
        ],
      },
      {
        trip_id: 7,
        sido_name: '강원',
        gungu_name: '강릉시',
        title: '강릉 커피 + 바다',
        start_date: '2026-03-20',
        end_date: '2026-03-22',
        trip_members: [
          {
            member_id: 15,
            nickname: '이민지',
            profile_image: 'https://images.unsplash.com/photo-1545996124-0501ebae84d0',
            role: 'HOST',
          },
        ],
      },
      {
        trip_id: 8,
        sido_name: '부산',
        gungu_name: '수영구',
        title: '광안리 야경 여행',
        start_date: '2026-05-03',
        end_date: '2026-05-05',
        trip_members: [
          {
            member_id: 16,
            nickname: '정수빈',
            profile_image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
            role: 'HOST',
          },
          {
            member_id: 17,
            nickname: '오지훈',
            profile_image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
            role: 'GUEST',
          },
        ],
      },
    ],
    error: null,
  })
}

// api/mock/getTripImage.js
export const getTripImageMock = (tripId) => {
  const imageMap = {
    1: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    2: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c',
    3: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    4: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',

    // ✅ 추가 이미지(2026)
    5: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', // 제주
    6: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c', // 서울
    7: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', // 강릉/바다 느낌
    8: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // 부산 바다 느낌
  }

  return Promise.resolve({
    success: true,
    data: {
      trip_id: tripId,
      image_url: imageMap[tripId] ?? null,
    },
    error: null,
  })
}

