import axiosApi from './axiosApi'

// 로그인 api
export const login = (credentials) => {
  return axiosApi({
    url: '/members/login',
    method: 'post',
    data: credentials,
    withCredentials: true,
  })
}

// 회원가입 api
export const signup = (payload) => {
  return axiosApi({
    url: '/members/signup',
    method: 'post',
    data: payload,
    withCredentials: true,
  })
}

export const checkEmail = (email) => {
  return axiosApi({
    url: '/members/check-email',
    method: 'get',
    params: { email: email },
    withCredentials: true,
  })
}

// 이메일 중복 더미 함수
export const mockCheckEmail = (email) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          has_email: email === 'test@example.com',
          // test@example.com이면 중복(true)
          // 그 외는 사용 가능(false)
        },
        error: null,
      })
    }, 600) // 네트워크 지연 흉내
  })
}

export const checkNickname = (nickname) => {
  return axiosApi({
    url: '/members/check-nickname',
    method: 'get',
    params: { nickname: nickname },
    withCredentials: true,
  })
}

// 닉네임 중복 더미 함수
export const mockCheckNickname = (nickname) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          has_nickname: nickname === 'admin' || nickname === 'tester',
        },
        error: null,
      })
    }, 600)
  })
}
