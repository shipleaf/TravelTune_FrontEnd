<template>
  <div class="progress-bar">
    <div class="stepper-box">
      <div v-if="currentStep === 1" class="stepper-step stepper-active">
        <div class="stepper-circle">1</div>
        <div class="stepper-line"></div>
      </div>

      <div v-else class="checkbox-wrapper">
        <input type="checkbox" v-model="step1Checked" />
        <!-- <span class="checkbox-number">1</span> -->
        <svg viewBox="0 0 35.6 35.6">
          <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
        </svg>
        <div class="stepper-line"></div>
      </div>

      <div v-if="currentStep < 2" class="stepper-step stepper-pending">
        <div class="stepper-circle">2</div>
        <div class="stepper-line"></div>
      </div>

      <div v-else-if="currentStep === 2" class="stepper-step stepper-active">
        <div class="stepper-circle">2</div>
        <div class="stepper-line"></div>
      </div>

      <div v-else class="checkbox-wrapper">
        <input type="checkbox" v-model="step2Checked" />
        <svg viewBox="0 0 35.6 35.6">
          <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
          <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
          <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
        </svg>
      </div>
    </div>

    <StepOne v-if="currentStep === 1" ref="stepOneRef" @valid="nextStep" />
    <StepTwo v-else ref="stepTwoRef" @valid="nextStep" />

    <div class="stepper-controls">
      <button
        v-if="currentStep === 1"
        class="stepper-button stepper-button-primary"
        @click="handleNext"
      >
        다음
      </button>
      <div v-else class="steptwo-container">
        <button class="stepper-button" @click="prevStep">이전</button>
        <button class="primary" type="button" :disabled="isSubmitting" @click="handleSubmit">
          <span>회원가입</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import StepOne from '@/components/regist/StepOne.vue'
import StepTwo from '@/components/regist/StepTwo.vue'

const router = useRouter()

const currentStep = ref(1)
const step1Checked = ref(false)
const step2Checked = ref(false)

const stepOneRef = ref(null)
const stepTwoRef = ref(null)

const CHECK_ANIM_MS = 1000

const nextStep = () => {
  if (currentStep.value < 2) currentStep.value = 2
}

const handleNext = async () => {
  if (currentStep.value == 1) {
    const ok = await stepOneRef.value.validateStepOne()
    if (ok) {
      step1Checked.value = false
      currentStep.value = 2

      await nextTick()
      requestAnimationFrame(() => {
        step1Checked.value = true
      })
    }
  }
  return
}

const prevStep = () => {
  if (currentStep.value > 1) currentStep.value = 1
}

const handleSubmit = async () => {
  const ok = await stepTwoRef.value.validateStepTwo()
  if (!ok) return

  step2Checked.value = false
  currentStep.value = 3

  await nextTick()
  requestAnimationFrame(() => {
    step2Checked.value = true
  })

  setTimeout(() => {
    router.push('/signup-success')
  }, CHECK_ANIM_MS)
}
</script>

<style lang="scss" scoped>
$page-blue: oklch(0.75 0.15 195);
$border: rgba(255, 255, 255, 0.14);
$text: rgba(255, 255, 255, 0.92);
$muted: rgba(255, 255, 255, 0.68);

.progress-bar {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stepper-box {
  display: flex;
  justify-content: center;
  gap: 120px;
  padding: 32px;
  padding-top: 120px;
  width: 100%;
}

.stepper-step {
  display: flex;
  flex-direction: column;

  margin-bottom: 32px;
  position: relative;
}

.stepper-line {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateX(100%);
  height: 2px;
  width: 120px;
  background-color: #e2e8f0;
  z-index: 1;
}

.stepper-step:last-child .stepper-line {
  display: none;
}

.stepper-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.stepper-completed .stepper-circle {
  background-color: oklch(75% 0.15 195deg);
  color: white;
}

.stepper-active .stepper-circle {
  border: 3px solid oklch(75% 0.15 195deg);
  color: #fff;
}

.stepper-pending .stepper-circle {
  border: 2px solid #e2e8f0;
  color: #94a3b8;
}

.stepper-controls {
  display: flex;
  justify-content: center;
  width: 420px;
  height: 48px;
  margin-top: 32px;
}

.stepper-button {
  width: 45%;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.stepper-button-primary {
  width: 100%;
  height: 100%;
  background-color: $page-blue;
  color: #212121;
  border-color: $page-blue;
}

/* From Uiverse.io by PriyanshuGupta28 */
.checkbox-wrapper:hover .check {
  stroke-dashoffset: 0;
}

.steptwo-container {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
}

.checkbox-wrapper {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-bottom: 32px;
}

.checkbox-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-wrapper .background {
  fill: oklch(0.75 0.15 195);
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper .stroke {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  stroke-dashoffset: 100;
  stroke-dasharray: 100;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
}

.checkbox-wrapper .check {
  fill: none;
  stroke: #fff;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  stroke-dashoffset: 22;
  stroke-dasharray: 22;
  transition: ease all 1s;
  -webkit-transition: ease all 1s;
}

.checkbox-wrapper input[type='checkbox'] {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  opacity: 0;
  -appearance: none;
  appearance: none;
  -webkit-appearance: none;
}

.checkbox-wrapper input[type='checkbox']:hover {
  cursor: pointer;
}

.checkbox-wrapper input[type='checkbox']:checked + svg .background {
  fill: oklch(0.75 0.15 195);
}

.checkbox-wrapper input[type='checkbox']:checked + svg .stroke {
  stroke-dashoffset: 0;
}

.checkbox-wrapper input[type='checkbox']:checked + svg .check {
  stroke-dashoffset: 0;
}

.primary {
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: $page-blue;
  color: #000;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    opacity: 0.92;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
