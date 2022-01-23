import { Ref } from 'vue'
import { gsap } from 'gsap'

export default function getCode(disabled: Ref<Boolean>, btnText: Ref) {
  disabled.value = true
  const start = { values: 60 }
  gsap.to(start, {
    values: 0,
    ease: 'none',
    duration: 60,
    onUpdate: () => {
      if (!Math.floor(start.values)) {
        disabled.value = false
        btnText.value = '获取验证码'
      } else {
        btnText.value = ` ${Math.floor(start.values)}s 后重试`
      }
    }
  })
}
