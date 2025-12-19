import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSignupStore = defineStore('signup', () => {
  const email = ref('')
  const password = ref('')
  const profileImage = ref('')
  const name = ref('')
  const nickname = ref('')

  return { email, password, profileImage, name, nickname }
})
